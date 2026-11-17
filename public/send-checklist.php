<?php
/**
 * WAppShot API Migration Checklist Mailer & WhatsApp Forwarder
 *
 * Placed in /public so Vite copies it directly to /dist/send-checklist.php.
 * Accepts POST requests (JSON or form-urlencoded) from the migration checklist form:
 * 1. Sends an email notification to the WAppShot team and a checklist copy to the requester.
 * 2. Optionally dispatches a WhatsApp Cloud API notification if token/phone ID are configured.
 * 3. Returns a pre-filled WhatsApp wa.me URL containing the requester's form details.
 */

declare(strict_types=1);

// -----------------------------------------------------------------------------
// Configuration — update RECIPIENT_EMAIL / WhatsApp settings for your server
// -----------------------------------------------------------------------------
const RECIPIENT_EMAIL = 'Ahmed.ElMradny@gmail.com';
const FROM_NAME = 'WAppShot Onboarding';
const SEND_CLIENT_CHECKLIST = true;

// WhatsApp Business Number (used for pre-filled wa.me link & Cloud API target)
const WHATSAPP_TARGET_NUMBER = '971554669844';

// Optional: Configure Meta WhatsApp Cloud API credentials (or set via server env vars)
// to automatically push form leads to WhatsApp on submit via PHP cURL.
const WHATSAPP_CLOUD_TOKEN = '';
const WHATSAPP_PHONE_NUMBER_ID = '';

header('Content-Type: application/json; charset=UTF-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Allow: POST, OPTIONS');
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST, OPTIONS');
    http_response_code(405);
    echo json_encode([
        'ok' => false,
        'error' => 'Method not allowed. Please submit via POST.',
    ]);
    exit;
}

/**
 * Strip newline/control characters to prevent SMTP header injection.
 */
function sanitize_header_value(string $value, int $maxLength = 150): string
{
    $cleaned = preg_replace('/[\r\n\t\0\x0B]+/', ' ', trim($value));
    $cleaned = $cleaned === null ? '' : $cleaned;
    if (function_exists('mb_substr')) {
        return mb_substr($cleaned, 0, $maxLength, 'UTF-8');
    }
    return substr($cleaned, 0, $maxLength);
}

/**
 * Encode email subject safely for UTF-8 headers.
 */
function encode_utf8_subject(string $subject): string
{
    return '=?UTF-8?B?' . base64_encode($subject) . '?=';
}

/**
 * Resolve a safe sender address matching the current host when available.
 */
function resolve_from_email(): string
{
    $rawHost = $_SERVER['HTTP_HOST'] ?? $_SERVER['SERVER_NAME'] ?? 'wappshot.com';
    $host = strtolower(preg_replace('/:\d+$/', '', trim((string) $rawHost)) ?? 'wappshot.com');
    $host = preg_replace('/^www\./', '', $host) ?? $host;

    if ($host === '' || $host === 'localhost' || filter_var($host, FILTER_VALIDATE_IP)) {
        return 'no-reply@wappshot.com';
    }

    $candidate = 'no-reply@' . $host;
    return filter_var($candidate, FILTER_VALIDATE_EMAIL) ? $candidate : 'no-reply@wappshot.com';
}

/**
 * Send optional lead alert via Meta WhatsApp Cloud API when credentials are configured.
 */
function send_whatsapp_cloud_alert(string $messageText): bool
{
    $token = WHATSAPP_CLOUD_TOKEN !== '' ? WHATSAPP_CLOUD_TOKEN : (string) getenv('WHATSAPP_CLOUD_TOKEN');
    $phoneNumberId = WHATSAPP_PHONE_NUMBER_ID !== '' ? WHATSAPP_PHONE_NUMBER_ID : (string) getenv('WHATSAPP_PHONE_NUMBER_ID');

    if ($token === '' || $phoneNumberId === '' || !function_exists('curl_init')) {
        return false;
    }

    $endpoint = sprintf('https://graph.facebook.com/v21.0/%s/messages', rawurlencode($phoneNumberId));
    $payload = json_encode([
        'messaging_product' => 'whatsapp',
        'to' => WHATSAPP_TARGET_NUMBER,
        'type' => 'text',
        'text' => [
            'preview_url' => false,
            'body' => $messageText,
        ],
    ]);

    if (!is_string($payload)) {
        return false;
    }

    $ch = curl_init($endpoint);
    if ($ch === false) {
        return false;
    }

    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 8,
        CURLOPT_HTTPHEADER => [
            'Authorization: Bearer ' . $token,
            'Content-Type: application/json',
        ],
        CURLOPT_POSTFIELDS => $payload,
    ]);

    curl_exec($ch);
    $statusCode = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    return $statusCode >= 200 && $statusCode < 300;
}

// Parse JSON body or standard POST fields
$contentType = $_SERVER['CONTENT_TYPE'] ?? '';
$input = [];

if (stripos($contentType, 'application/json') !== false) {
    $rawBody = file_get_contents('php://input');
    $decoded = is_string($rawBody) ? json_decode($rawBody, true) : null;
    if (!is_array($decoded)) {
        http_response_code(400);
        echo json_encode([
            'ok' => false,
            'error' => 'Invalid JSON payload.',
        ]);
        exit;
    }
    $input = $decoded;
} else {
    $input = $_POST;
}

// Honeypot spam trap
$honeypot = trim((string) ($input['website'] ?? ''));
if ($honeypot !== '') {
    echo json_encode([
        'ok' => true,
        'message' => 'Checklist request received.',
    ]);
    exit;
}

$name = sanitize_header_value((string) ($input['name'] ?? ''), 120);
$company = sanitize_header_value((string) ($input['company'] ?? ''), 150);
$email = sanitize_header_value((string) ($input['email'] ?? ''), 180);
$topic = sanitize_header_value((string) ($input['topic'] ?? 'API Migration Checklist'), 150);
$language = sanitize_header_value((string) ($input['language'] ?? 'en'), 10);

if ($name === '') {
    http_response_code(422);
    echo json_encode([
        'ok' => false,
        'error' => 'Please enter your name.',
    ]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode([
        'ok' => false,
        'error' => 'Please provide a valid work email address.',
    ]);
    exit;
}

$fromEmail = resolve_from_email();
$submittedAt = gmdate('Y-m-d H:i:s') . ' UTC';
$remoteIp = sanitize_header_value((string) ($_SERVER['REMOTE_ADDR'] ?? 'unknown'), 64);

$whatsappLines = [
    'Hi WAppShot! I requested the Official WhatsApp Business API Migration Checklist.',
    'Name: ' . $name,
    'Company: ' . ($company !== '' ? $company : 'Not provided'),
    'Work Email: ' . $email,
    'Priority Topic: ' . $topic,
];
$whatsappText = implode("\n", $whatsappLines);
$whatsappUrl = sprintf(
    'https://wa.me/%s?text=%s',
    WHATSAPP_TARGET_NUMBER,
    rawurlencode($whatsappText)
);

// 1. Send internal lead notification email to the WAppShot team
$adminSubject = sprintf('New WAppShot API Migration Checklist Request — %s', $name);
$adminBodyLines = [
    'A new visitor requested the WAppShot Official WhatsApp Business API migration checklist.',
    '',
    'Contact Details:',
    '- Name: ' . $name,
    '- Company: ' . ($company !== '' ? $company : 'Not provided'),
    '- Work Email: ' . $email,
    '- Priority Topic: ' . $topic,
    '- Site Language: ' . strtoupper($language),
    '- Submitted At: ' . $submittedAt,
    '- Client IP: ' . $remoteIp,
    '',
    'Reply directly to this email to reach ' . $name . ' at ' . $email . '.',
];
$adminBody = implode("\r\n", $adminBodyLines);

$adminHeaders = implode("\r\n", [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: ' . FROM_NAME . ' <' . $fromEmail . '>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'X-Mailer: WAppShot-PHP-Mailer/1.1',
]);

$adminSent = @mail(
    RECIPIENT_EMAIL,
    encode_utf8_subject($adminSubject),
    $adminBody,
    $adminHeaders
);

if (!$adminSent) {
    http_response_code(500);
    echo json_encode([
        'ok' => false,
        'error' => 'The server could not send the email. Please verify PHP mail/SMTP configuration or send your request on WhatsApp.',
        'whatsappUrl' => $whatsappUrl,
    ]);
    exit;
}

// 2. Optionally send the checklist summary directly to the requester
if (SEND_CLIENT_CHECKLIST) {
    $clientSubject = 'Your WAppShot Official WhatsApp Business API Migration Checklist';
    $clientBodyLines = [
        'Hi ' . $name . ',',
        '',
        'Thank you for requesting the WAppShot Official WhatsApp Business API migration checklist'
            . ($topic !== '' ? ' (' . $topic . ')' : '') . '.',
        '',
        'Pre-Migration Checklist:',
        '1. Verify your Meta Business Manager account and legal business details.',
        '2. Choose your WhatsApp number (existing Business App number, landline, or dedicated SIM).',
        '3. Back up essential mobile chats before disconnecting from the WhatsApp Business App.',
        '4. Connect via Meta Embedded Signup inside WAppShot (15-30 minutes) to activate Cloud hosting.',
        '5. Configure delivery/read webhooks, lead routing rules, and CRM synchronization.',
        '6. Submit your initial Marketing, Utility, and Authentication message templates for Meta review.',
        '',
        'Need live help migrating your number with minimal downtime?',
        'Chat with our onboarding team anytime on WhatsApp: https://wa.me/' . WHATSAPP_TARGET_NUMBER,
        '',
        'Best regards,',
        'WAppShot Onboarding Team',
    ];
    $clientBody = implode("\r\n", $clientBodyLines);

    $clientHeaders = implode("\r\n", [
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'From: ' . FROM_NAME . ' <' . $fromEmail . '>',
        'Reply-To: ' . RECIPIENT_EMAIL,
        'X-Mailer: WAppShot-PHP-Mailer/1.1',
    ]);

    @mail(
        $email,
        encode_utf8_subject($clientSubject),
        $clientBody,
        $clientHeaders
    );
}

// 3. Optionally push the checklist lead via Meta WhatsApp Cloud API
$whatsappCloudSent = send_whatsapp_cloud_alert(
    "New API Migration Checklist Request\n"
    . "Name: {$name}\n"
    . 'Company: ' . ($company !== '' ? $company : 'Not provided') . "\n"
    . "Email: {$email}\n"
    . "Topic: {$topic}"
);

echo json_encode([
    'ok' => true,
    'message' => 'Checklist request sent successfully.',
    'whatsappSent' => $whatsappCloudSent,
    'whatsappUrl' => $whatsappUrl,
]);
