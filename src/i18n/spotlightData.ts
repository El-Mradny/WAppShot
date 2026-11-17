import type { LanguageCode } from './translations';

export interface SpotlightBundle {
  kicker: string;
  title: string;
  subtitle: string;
  routing: {
    kicker: string;
    title: string;
    description: string;
    latencyBadge: string;
    steps: { label: string; detail: string }[];
  };
  analytics: {
    kicker: string;
    title: string;
    description: string;
    bars: { label: string; value: string; ratio: number }[];
  };
  templates: {
    kicker: string;
    title: string;
    description: string;
    rows: { category: string; metric: string }[];
  };
  webhooks: {
    kicker: string;
    title: string;
    description: string;
    endpoints: { name: string; event: string; latency: string }[];
  };
}

export const SPOTLIGHT_DATA: Record<LanguageCode, SpotlightBundle> = {
  en: {
    kicker: 'Feature Spotlight · Inside the Workspace',
    title: 'Built for speed from first message to closed deal',
    subtitle:
      'Explore the high-impact tools teams rely on daily inside WAppShot to route leads, measure message engagement, and sync revenue data.',
    routing: {
      kicker: 'Spotlight 01 · Zero Manual Triage',
      title: 'Automated Lead Routing',
      description:
        'Detect ad source, language, and service intent the moment a prospect writes in—then assign the right advisor via round-robin or territory rules before a lead ever goes cold.',
      latencyBadge: '< 1.8s assignment SLA',
      steps: [
        { label: '01 · Capture', detail: 'Click-to-WhatsApp Ad / Web QR' },
        { label: '02 · Qualify', detail: 'Intent & budget tagged automatically' },
        { label: '03 · Assign', detail: 'Round-robin dispatch to active rep' },
      ],
    },
    analytics: {
      kicker: 'Spotlight 02 · Real-Time Telemetry',
      title: 'Analytics Dashboard',
      description:
        'Track campaign delivery, read rates, response SLAs, and conversion attribution in one clean reporting view.',
      bars: [
        { label: 'Delivered', value: '99.4%', ratio: 0.99 },
        { label: 'Read', value: '74.2%', ratio: 0.74 },
        { label: 'Replied', value: '41.6%', ratio: 0.42 },
        { label: 'Qualified', value: '31.8%', ratio: 0.32 },
      ],
    },
    templates: {
      kicker: 'Spotlight 03 · Meta Categories',
      title: 'Template Health Monitor',
      description:
        'Audit approval status, quality scores, and delivery across Marketing, Utility, and Authentication templates.',
      rows: [
        { category: 'Marketing Templates', metric: '98.9% delivered' },
        { category: 'Utility Alerts', metric: '99.7% delivered' },
        { category: 'Authentication OTP', metric: '1.1s median' },
      ],
    },
    webhooks: {
      kicker: 'Spotlight 04 · Pro & Enterprise',
      title: 'CRM & Webhook Event Stream',
      description:
        'Stream signed delivery, read, and lead-qualification events straight into HubSpot, Salesforce, Pipedrive, or your internal backend with automatic retries.',
      endpoints: [
        { name: 'HubSpot / Pipedrive', event: 'lead.qualified → Deal Stage Updated', latency: '140ms' },
        { name: 'ERP Order Pipeline', event: 'message.delivered → Receipt Logged', latency: '98ms' },
        { name: 'Custom REST Endpoint', event: 'message.read → SLA Timer Reset', latency: '112ms' },
      ],
    },
  },

  es: {
    kicker: 'Funciones Destacadas · Dentro de la Plataforma',
    title: 'Diseñado para convertir desde el primer mensaje',
    subtitle:
      'Explora las herramientas clave que los equipos usan cada día en WAppShot para asignar leads, medir entregas y sincronizar su CRM.',
    routing: {
      kicker: 'Destacado 01 · Cero Clasificación Manual',
      title: 'Enrutamiento Automático de Leads',
      description:
        'Detecta origen del anuncio, idioma e intención en cuanto escribe un prospecto y asígnalo automáticamente al asesor indicado por turnos o territorio.',
      latencyBadge: '< 1.8s SLA de asignación',
      steps: [
        { label: '01 · Captura', detail: 'Anuncio Click-to-WhatsApp / QR' },
        { label: '02 · Califica', detail: 'Intención y presupuesto etiquetados' },
        { label: '03 · Asigna', detail: 'Reparto rotativo a asesor activo' },
      ],
    },
    analytics: {
      kicker: 'Destacado 02 · Telemetría en Vivo',
      title: 'Panel de Analítica',
      description:
        'Supervisa tasas de entrega, lectura, tiempos de respuesta SLA y atribución de ventas en una vista unificada.',
      bars: [
        { label: 'Entregados', value: '99.4%', ratio: 0.99 },
        { label: 'Leídos', value: '74.2%', ratio: 0.74 },
        { label: 'Respondidos', value: '41.6%', ratio: 0.42 },
        { label: 'Calificados', value: '31.8%', ratio: 0.32 },
      ],
    },
    templates: {
      kicker: 'Destacado 03 · Categorías Meta',
      title: 'Monitor de Plantillas',
      description:
        'Controla aprobaciones, calidad y entregas de tus plantillas de Marketing, Utilidad y Autenticación.',
      rows: [
        { category: 'Plantillas Marketing', metric: '98.9% entrega' },
        { category: 'Alertas de Utilidad', metric: '99.7% entrega' },
        { category: 'OTP Autenticación', metric: '1.1s mediana' },
      ],
    },
    webhooks: {
      kicker: 'Destacado 04 · Pro y Enterprise',
      title: 'Flujo de Eventos CRM y Webhooks',
      description:
        'Envía eventos firmados de entrega, lectura y calificación directamente hacia HubSpot, Salesforce, Pipedrive o tu backend REST.',
      endpoints: [
        { name: 'HubSpot / Pipedrive', event: 'lead.qualified → Etapa CRM Actualizada', latency: '140ms' },
        { name: 'Flujo de Pedidos ERP', event: 'message.delivered → Recibo Registrado', latency: '98ms' },
        { name: 'Endpoint REST Propio', event: 'message.read → SLA Reiniciado', latency: '112ms' },
      ],
    },
  },

  ar: {
    kicker: 'أبرز المزايا · نظرة داخل المنصة',
    title: 'مصمم للسرعة من أول رسالة حتى إغلاق الصفقة',
    subtitle:
      'تعرّف على الأدوات الأساسية التي تعتمد عليها الفرق يومياً داخل WAppShot لتوجيه العملاء، وقياس التفاعل، ومزامنة بيانات المبيعات.',
    routing: {
      kicker: 'ميزة 01 · بدون فرز يدوي',
      title: 'توجيه العملاء المحتملين تلقائياً',
      description:
        'يتعرف النظام على مصدر الإعلان واللغة والخدمة المطلوبة فور مراسلة العميل، ثم يوزّعه تلقائياً على المندوب المناسب حسب الدور أو المنطقة قبل فقدان الاهتمام.',
      latencyBadge: 'توزيع خلال أقل من 1.8 ثانية',
      steps: [
        { label: '01 · الالتقاط', detail: 'إعلانات Click-to-WhatsApp / رمز QR' },
        { label: '02 · التأهيل', detail: 'تصنيف الاهتمام والميزانية تلقائياً' },
        { label: '03 · التعيين', detail: 'توزيع دوري فوري على المندوب المتاح' },
      ],
    },
    analytics: {
      kicker: 'ميزة 02 · قياس لحظي',
      title: 'لوحة التحليلات والتقارير',
      description:
        'تابع نسب التسليم والقراءة وزمن الاستجابة SLA والعائد من الحملات الإعلانية في شاشة واحدة واضحة.',
      bars: [
        { label: 'تم التسليم', value: '99.4%', ratio: 0.99 },
        { label: 'تمت القراءة', value: '74.2%', ratio: 0.74 },
        { label: 'تم الرد', value: '41.6%', ratio: 0.42 },
        { label: 'عميل مؤهل', value: '31.8%', ratio: 0.32 },
      ],
    },
    templates: {
      kicker: 'ميزة 03 · فئات Meta',
      title: 'مراقب جودة القوالب',
      description:
        'راقب حالة الاعتماد وجودة الإرسال عبر قوالب التسويق والخدمة والتحقق لحظياً.',
      rows: [
        { category: 'قوالب التسويق', metric: '98.9% تسليم' },
        { category: 'تنبيهات الخدمة', metric: '99.7% تسليم' },
        { category: 'رموز التحقق OTP', metric: '1.1 ثانية متوسط' },
      ],
    },
    webhooks: {
      kicker: 'ميزة 04 · باقات Pro و Enterprise',
      title: 'تدفق أحداث CRM و Webhooks',
      description:
        'أرسل أحداث التسليم والقراءة وتأهيل العملاء الموقّعة مباشرة إلى HubSpot و Salesforce و Pipedrive أو خادمك البرمجي مع إعادة محاولة تلقائية.',
      endpoints: [
        { name: 'HubSpot / Pipedrive', event: 'lead.qualified → تحديث مرحلة الصفقة', latency: '140ms' },
        { name: 'نظام الطلبات ERP', event: 'message.delivered → توثيق الإيصال', latency: '98ms' },
        { name: 'خادم REST مخصص', event: 'message.read → تحديث مؤقت الاستجابة', latency: '112ms' },
      ],
    },
  },

  it: {
    kicker: 'Focus Funzionalità · Dentro la Piattaforma',
    title: 'Progettato per convertire dal primo messaggio alla chiusura',
    subtitle:
      'Scopri gli strumenti ad alto impatto usati ogni giorno su WAppShot per smistare lead, misurare le consegne e sincronizzare i ricavi.',
    routing: {
      kicker: 'Focus 01 · Zero Smistamento Manuale',
      title: 'Automated Lead Routing',
      description:
        'Rileva fonte dell’annuncio, lingua e intento appena un contatto scrive—assegnando subito il consulente corretto tramite regole round-robin o territoriali.',
      latencyBadge: '< 1.8s SLA di assegnazione',
      steps: [
        { label: '01 · Acquisizione', detail: 'Annuncio Click-to-WhatsApp / QR' },
        { label: '02 · Qualificazione', detail: 'Tag automatici su intento e budget' },
        { label: '03 · Assegnazione', detail: 'Instradamento rotativo al consulente' },
      ],
    },
    analytics: {
      kicker: 'Focus 02 · Telemetria in Tempo Reale',
      title: 'Analytics Dashboard',
      description:
        'Monitora consegne, tassi di lettura, SLA di risposta e attribuzione conversioni in un’unica vista.',
      bars: [
        { label: 'Consegnati', value: '99.4%', ratio: 0.99 },
        { label: 'Letti', value: '74.2%', ratio: 0.74 },
        { label: 'Risposti', value: '41.6%', ratio: 0.42 },
        { label: 'Qualificati', value: '31.8%', ratio: 0.32 },
      ],
    },
    templates: {
      kicker: 'Focus 03 · Categorie Meta',
      title: 'Monitor Qualità Template',
      description:
        'Controlla approvazioni, qualità e tassi di consegna tra template Marketing, Utility e Autenticazione.',
      rows: [
        { category: 'Template Marketing', metric: '98.9% consegnati' },
        { category: 'Avvisi Utility', metric: '99.7% consegnati' },
        { category: 'OTP Autenticazione', metric: '1.1s mediana' },
      ],
    },
    webhooks: {
      kicker: 'Focus 04 · Pro & Enterprise',
      title: 'Stream Eventi CRM e Webhook',
      description:
        'Invia eventi firmati di consegna, lettura e qualificazione verso HubSpot, Salesforce, Pipedrive o il tuo backend REST.',
      endpoints: [
        { name: 'HubSpot / Pipedrive', event: 'lead.qualified → Fase Deal Aggiornata', latency: '140ms' },
        { name: 'Pipeline Ordini ERP', event: 'message.delivered → Ricevuta Salvata', latency: '98ms' },
        { name: 'Endpoint REST Custom', event: 'message.read → Timer SLA Resettato', latency: '112ms' },
      ],
    },
  },
};
