import type { LanguageCode } from './translations';

export interface PrivacySection {
  number: string;
  heading: string;
  body: string;
}

export interface PrivacyBundle {
  linkLabel: string;
  kicker: string;
  title: string;
  lastUpdated: string;
  intro: string;
  closeAria: string;
  closeButton: string;
  contactLabel: string;
  contactEmail: string;
  sections: PrivacySection[];
}

export const PRIVACY_DATA: Record<LanguageCode, PrivacyBundle> = {
  en: {
    linkLabel: 'Privacy Policy',
    kicker: 'Enterprise Governance · GDPR & ISO 27001',
    title: 'WAppShot Privacy Policy',
    lastUpdated: 'Last updated: November 2026',
    intro:
      'WAppShot (by Vibe Hub) is committed to protecting enterprise customer and prospect data processed through our Official WhatsApp Business API platform, website forms, and CRM integrations.',
    closeAria: 'Close privacy policy',
    closeButton: 'Close',
    contactLabel: 'Data Protection Inquiries:',
    contactEmail: 'privacy@wappshot.com',
    sections: [
      {
        number: '01.',
        heading: 'Information We Collect',
        body: 'When you request an API migration checklist, submit onboarding details, or connect a Meta Business Account, we collect business contact identifiers (name, company name, work email) and configuration metadata necessary to provision message tracking and lead routing.',
      },
      {
        number: '02.',
        heading: 'WhatsApp Cloud API & Webhook Telemetry',
        body: 'WAppShot processes message delivery events (sent, delivered, read, and error status codes) directly through Meta’s Official Cloud API. We never use unofficial mobile scraping, emulator sessions, or unauthorized third-party relays.',
      },
      {
        number: '03.',
        heading: 'Lawful Basis & GDPR Compliance',
        body: 'Personal and business contact data is processed strictly under legitimate business interest, contractual necessity, or explicit opt-in consent in accordance with GDPR Articles 6 and 28. We do not sell or broker messaging lists.',
      },
      {
        number: '04.',
        heading: 'Security Controls (ISO 27001 Aligned)',
        body: 'All API traffic and signed webhook streams use TLS 1.3 encryption in transit, strict tenant isolation, role-based access controls, and scoped API credentials for HubSpot, Salesforce, Pipedrive, Zoho, and custom REST endpoints.',
      },
      {
        number: '05.',
        heading: 'Data Retention & Enterprise Rights',
        body: 'Customers retain full ownership of conversation logs and CRM records. You may request access, correction, export, or deletion of stored records at any time by contacting our data protection team.',
      },
    ],
  },

  es: {
    linkLabel: 'Política de Privacidad',
    kicker: 'Gobernanza Empresarial · GDPR e ISO 27001',
    title: 'Política de Privacidad de WAppShot',
    lastUpdated: 'Última actualización: Noviembre 2026',
    intro:
      'WAppShot (de Vibe Hub) se compromete a proteger los datos corporativos y de prospectos procesados mediante nuestra plataforma en la API Oficial de WhatsApp Business, formularios web e integraciones CRM.',
    closeAria: 'Cerrar política de privacidad',
    closeButton: 'Cerrar',
    contactLabel: 'Consultas de Protección de Datos:',
    contactEmail: 'privacy@wappshot.com',
    sections: [
      {
        number: '01.',
        heading: 'Información que Recopilamos',
        body: 'Al solicitar la guía de migración a la API, enviar datos de onboarding o vincular tu cuenta de Meta Business, recopilamos datos de contacto comercial (nombre, empresa, correo corporativo) y metadatos técnicos necesarios para activar el seguimiento.',
      },
      {
        number: '02.',
        heading: 'Telemetría de WhatsApp Cloud API y Webhooks',
        body: 'WAppShot procesa eventos de entrega de mensajes (enviado, entregado, leído y códigos de error) directamente a través de la API Oficial de Meta Cloud. Nunca utilizamos rastreadores móviles no oficiales ni sesiones QR inseguras.',
      },
      {
        number: '03.',
        heading: 'Base Legal y Cumplimiento GDPR',
        body: 'Los datos se tratan exclusivamente bajo necesidad contractual, interés comercial legítimo o consentimiento explícito conforme al RGPD/GDPR. No vendemos ni compartimos bases de contactos con terceros.',
      },
      {
        number: '04.',
        heading: 'Controles de Seguridad (Alineados con ISO 27001)',
        body: 'Todo el tráfico API y los webhooks firmados utilizan cifrado TLS en tránsito, aislamiento estricto por empresa, control de acceso por roles y credenciales delimitadas para HubSpot, Salesforce, Pipedrive y Zoho.',
      },
      {
        number: '05.',
        heading: 'Retención y Derechos de los Usuarios',
        body: 'Cada empresa conserva la titularidad total de sus registros y conversaciones. Puedes solicitar acceso, rectificación, exportación o eliminación de datos en cualquier momento escribiendo a nuestro equipo.',
      },
    ],
  },

  ar: {
    linkLabel: 'سياسة الخصوصية',
    kicker: 'الحوكمة المؤسسية · GDPR و ISO 27001',
    title: 'سياسة الخصوصية لمنصة WAppShot',
    lastUpdated: 'آخر تحديث: نوفمبر 2026',
    intro:
      'تلتزم منصة WAppShot (من Vibe Hub) بحماية بيانات الشركات والعملاء المحتملين المعالجة عبر واجهة واتساب للأعمال الرسمية ونماذج الموقع الإلكتروني وتكاملات أنظمة إدارة علاقات العملاء CRM.',
    closeAria: 'إغلاق سياسة الخصوصية',
    closeButton: 'إغلاق',
    contactLabel: 'استفسارات حماية البيانات:',
    contactEmail: 'privacy@wappshot.com',
    sections: [
      {
        number: '01.',
        heading: 'البيانات التي نجمعها',
        body: 'عند طلب قائمة خطوات الانتقال إلى الـ API أو إرسال بيانات التفعيل أو ربط حساب Meta Business، نجمع بيانات التواصل المهنية (الاسم، اسم الشركة، البريد الإلكتروني للعمل) والبيانات التقنية اللازمة لتفعيل التتبع وتوجيه العملاء.',
      },
      {
        number: '02.',
        heading: 'بيانات واجهة WhatsApp Cloud و Webhooks',
        body: 'تعالج WAppShot أحداث تسليم الرسائل (الإرسال، التسليم، القراءة، ورموز الأخطاء) مباشرة عبر خوادم Meta Cloud الرسمية، دون استخدام أي أدوات غير رسمية أو جلسات هواتف غير آمنة.',
      },
      {
        number: '03.',
        heading: 'الأساس القانوني والامتثال للائحة GDPR',
        body: 'تُعالج البيانات وفق الضرورة التعاقدية أو المصلحة التجارية المشروعة أو الموافقة الصريحة طبقاً لمتطلبات اللائحة الأوروبية لحماية البيانات GDPR. لا نقوم ببيع أو مشاركة قوائم العملاء إطلاقاً.',
      },
      {
        number: '04.',
        heading: 'ضوابط الأمان (وفق معيار ISO 27001)',
        body: 'تستخدم جميع اتصالات الـ API وتدفقات Webhooks الموقّعة تشفير TLS أثناء النقل مع عزل تام لبيانات كل مؤسسة وصلاحيات وصول محددة لربط HubSpot و Salesforce و Pipedrive و Zoho.',
      },
      {
        number: '05.',
        heading: 'الاحتفاظ بالبيانات وحقوق المؤسسات',
        body: 'تحتفظ شركتك بالملكية الكاملة لسجلات المحادثات وبيانات العملاء، ويمكنك طلب الوصول إلى بياناتك أو تعديلها أو تصديرها أو حذفها نهائياً في أي وقت.',
      },
    ],
  },

  it: {
    linkLabel: 'Informativa sulla Privacy',
    kicker: 'Governance Aziendale · GDPR e ISO 27001',
    title: 'Informativa sulla Privacy di WAppShot',
    lastUpdated: 'Ultimo aggiornamento: Novembre 2026',
    intro:
      'WAppShot (di Vibe Hub) si impegna a proteggere i dati aziendali e dei contatti trattati tramite l’API Ufficiale di WhatsApp Business, i moduli web e le integrazioni CRM.',
    closeAria: 'Chiudi informativa sulla privacy',
    closeButton: 'Chiudi',
    contactLabel: 'Contatto Protezione Dati:',
    contactEmail: 'privacy@wappshot.com',
    sections: [
      {
        number: '01.',
        heading: 'Dati Raccolti',
        body: 'Quando richiedi la checklist di migrazione API, invii i dettagli di onboarding o colleghi un account Meta Business, raccogliamo i recapiti aziendali (nome, azienda, email lavorativa) e i metadati tecnici necessari per configurare il tracciamento.',
      },
      {
        number: '02.',
        heading: 'Telemetria WhatsApp Cloud API e Webhook',
        body: 'WAppShot elabora gli eventi di stato dei messaggi (inviato, consegnato, letto e codici errore) direttamente tramite l’API Ufficiale Meta Cloud, senza alcun utilizzo di strumenti non ufficiali o sessioni smartphone.',
      },
      {
        number: '03.',
        heading: 'Base Giuridica e Conformità GDPR',
        body: 'I dati vengono trattati esclusivamente per necessità contrattuale, legittimo interesse aziendale o consenso esplicito in conformità al GDPR. Non vendiamo né cediamo elenchi di contatti a terzi.',
      },
      {
        number: '04.',
        heading: 'Controlli di Sicurezza (Allineati ISO 27001)',
        body: 'Tutto il traffico API e gli stream webhook firmati utilizzano crittografia TLS in transito, isolamento multi-tenant, controllo degli accessi basato sui ruoli e token dedicati per HubSpot, Salesforce, Pipedrive e Zoho.',
      },
      {
        number: '05.',
        heading: 'Conservazione dei Dati e Diritti Aziendali',
        body: 'Le aziende mantengono la piena proprietà dei log e dei record CRM e possono richiedere in qualsiasi momento l’accesso, la rettifica, l’esportazione o la cancellazione dei dati.',
      },
    ],
  },
};
