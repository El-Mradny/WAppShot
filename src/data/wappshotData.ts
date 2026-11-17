export const WHATSAPP_NUMBER = '971554669844';

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export interface WebhookEventSample {
  id: 'sent' | 'delivered' | 'read' | 'qualified';
  label: string;
  summary: string;
  timestamp: string;
  payload: string;
}

export const WEBHOOK_EVENTS: WebhookEventSample[] = [
  {
    id: 'sent',
    label: 'message.sent',
    summary: 'Dispatched via Meta Cloud API node with template tracking ID',
    timestamp: '10:42:01.114 UTC',
    payload: `{
  "event": "message.sent",
  "wamid": "wamid.HBgLMjAxMDA5...",
  "campaign_id": "cmp_q4_outbound",
  "recipient": "+14155550198",
  "status": "accepted_by_meta",
  "latency_ms": 142
}`,
  },
  {
    id: 'delivered',
    label: 'message.delivered',
    summary: 'Confirmed receipt on prospect handset with carrier timestamp',
    timestamp: '10:42:02.008 UTC',
    payload: `{
  "event": "message.delivered",
  "wamid": "wamid.HBgLMjAxMDA5...",
  "delivered_at": "2026-11-16T10:42:02Z",
  "delivery_ms": 894,
  "billable": true,
  "conversation_category": "utility"
}`,
  },
  {
    id: 'read',
    label: 'message.read',
    summary: 'Prospect opened thread; SLA timer and link attribution updated',
    timestamp: '10:42:19.450 UTC',
    payload: `{
  "event": "message.read",
  "wamid": "wamid.HBgLMjAxMDA5...",
  "read_at": "2026-11-16T10:42:19Z",
  "time_to_open_sec": 17.4,
  "assigned_agent": "sarah.m@company.com"
}`,
  },
  {
    id: 'qualified',
    label: 'lead.qualified',
    summary: 'Inbound reply parsed, tagged, and synced to CRM deal pipeline',
    timestamp: '10:43:04.820 UTC',
    payload: `{
  "event": "lead.qualified",
  "lead_source": "ctwa_meta_ad_884",
  "intent": "api_onboarding_5_seats",
  "crm_sync": "hubspot_deal_90421",
  "routed_to": "enterprise_sales_desk"
}`,
  },
];

export type ComparisonCategory = 'all' | 'tracking' | 'automation' | 'scale';

export type FaqCategory = 'all' | 'api' | 'integration' | 'pricing';

