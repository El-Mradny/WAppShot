import type { LanguageCode } from './translations';

export type BillingCycle = 'monthly' | 'annual';

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingTier {
  id: 'starter' | 'pro' | 'enterprise';
  name: string;
  kicker?: string;
  description: string;
  monthlyPrice: string;
  annualPrice: string;
  periodLabel: string;
  annualNote?: string;
  usersSpec: string;
  webhooksSpec: string;
  highlighted?: boolean;
  features: PricingFeature[];
  ctaLabel: string;
  whatsappMessageMonthly: string;
  whatsappMessageAnnual: string;
}

export interface PricingBundle {
  kicker: string;
  title: string;
  subtitle: string;
  monthlyLabel: string;
  annualLabel: string;
  annualSavingsLabel: string;
  usersLabel: string;
  webhooksLabel: string;
  includedHeading: string;
  notePrefix: string;
  noteBody: string;
  tiers: PricingTier[];
}

export const PRICING_DATA: Record<LanguageCode, PricingBundle> = {
  en: {
    kicker: 'Transparent Plans · Clear Seat & Webhook Tiers',
    title: 'Simple pricing built for scaling WhatsApp revenue',
    subtitle:
      'Pick a plan tailored to your team capacity and automation requirements on the Official WhatsApp Business API.',
    monthlyLabel: 'Monthly',
    annualLabel: 'Annual',
    annualSavingsLabel: 'Save 20%',
    usersLabel: 'Users',
    webhooksLabel: 'Webhooks',
    includedHeading: 'Included in plan',
    notePrefix: 'Note:',
    noteBody:
      'Additional charges apply for template messages. Per message charges vary for marketing, utility, and authentication categories.',
    tiers: [
      {
        id: 'starter',
        name: 'Starter',
        description:
          'Built for lean pairs upgrading from the mobile app to reliable cloud message tracking.',
        monthlyPrice: '$49',
        annualPrice: '$39',
        periodLabel: '/ month',
        annualNote: 'Billed annually ($468/yr)',
        usersSpec: '2 only (no additional)',
        webhooksSpec: 'None',
        features: [
          { text: '1 Official WhatsApp Business API number', included: true },
          { text: 'Real-time Sent, Delivered & Read logs', included: true },
          { text: 'Shared team inbox & Meta Embedded Signup', included: true },
          { text: 'Automated lead routing & CRM sync', included: false },
        ],
        ctaLabel: 'Start Starter on WhatsApp',
        whatsappMessageMonthly:
          'Hi WAppShot! I would like to start the Starter plan ($49/month, 2 users) on the Official WhatsApp Business API.',
        whatsappMessageAnnual:
          'Hi WAppShot! I would like to start the Starter annual plan ($39/month billed yearly, 2 users) on the Official WhatsApp Business API.',
      },
      {
        id: 'pro',
        name: 'Pro',
        kicker: 'Most Popular · Growing Sales Teams',
        description:
          'Designed for sales teams automating lead qualification, ad attribution, and CRM pipelines.',
        monthlyPrice: '$129',
        annualPrice: '$99',
        periodLabel: '/ month',
        annualNote: 'Billed annually ($1,188/yr)',
        usersSpec: '7 included (+$49/user/mo)',
        webhooksSpec: 'Limited',
        highlighted: true,
        features: [
          { text: 'Automated lead capture & qualification flows', included: true },
          { text: 'Click-to-WhatsApp ad & UTM attribution', included: true },
          { text: 'Native HubSpot, Pipedrive, Zoho & Sheets sync', included: true },
          { text: 'Round-robin routing & per-rep SLA timers', included: true },
        ],
        ctaLabel: 'Start Pro on WhatsApp',
        whatsappMessageMonthly:
          'Hi WAppShot! I would like to start the Pro plan ($129/month, 7 users + $49/extra user) with limited webhooks.',
        whatsappMessageAnnual:
          'Hi WAppShot! I would like to start the Pro annual plan ($99/month billed yearly, 7 users + $49/extra user) with limited webhooks.',
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        description:
          'Engineered for multi-branch operations with custom scale, high-volume APIs, and dedicated SLAs.',
        monthlyPrice: 'Custom',
        annualPrice: 'Custom',
        periodLabel: '',
        annualNote: 'Tailored seat volume & SLA terms',
        usersSpec: 'Custom multi-branch',
        webhooksSpec: 'Extensive',
        features: [
          { text: 'Multiple Official WhatsApp Business API numbers', included: true },
          { text: 'Salesforce sync & high-throughput REST API', included: true },
          { text: 'Official Meta Green Tick verification support', included: true },
          { text: 'Custom SLA escalation & dedicated engineer', included: true },
        ],
        ctaLabel: 'Talk to Sales on WhatsApp',
        whatsappMessageMonthly:
          'Hi WAppShot! I want to discuss an Enterprise plan with extensive webhooks for our team.',
        whatsappMessageAnnual:
          'Hi WAppShot! I want to discuss an Enterprise annual plan with extensive webhooks for our team.',
      },
    ],
  },

  es: {
    kicker: 'Planes Transparentes · Usuarios y Webhooks Claros',
    title: 'Precios claros para escalar tus ventas por WhatsApp',
    subtitle:
      'Elige el plan adaptado a la capacidad de tu equipo y tus necesidades de automatización en la API Oficial de WhatsApp Business.',
    monthlyLabel: 'Mensual',
    annualLabel: 'Anual',
    annualSavingsLabel: 'Ahorra 20%',
    usersLabel: 'Usuarios',
    webhooksLabel: 'Webhooks',
    includedHeading: 'Incluido en el plan',
    notePrefix: 'Nota:',
    noteBody:
      'Aplican cargos adicionales por mensajes de plantilla. Las tarifas por mensaje varían según las categorías de marketing, utilidad y autenticación.',
    tiers: [
      {
        id: 'starter',
        name: 'Starter',
        description:
          'Ideal para duplas que pasan de la app móvil al seguimiento fiable de mensajes en la nube.',
        monthlyPrice: '$49',
        annualPrice: '$39',
        periodLabel: '/ mes',
        annualNote: 'Facturación anual ($468/año)',
        usersSpec: 'Solo 2 (sin adicionales)',
        webhooksSpec: 'No incluido',
        features: [
          { text: '1 número oficial de WhatsApp Business API', included: true },
          { text: 'Registro en vivo: Enviado, Entregado y Leído', included: true },
          { text: 'Bandeja compartida y alta guiada con Meta', included: true },
          { text: 'Enrutamiento automático y sincronización CRM', included: false },
        ],
        ctaLabel: 'Elegir Starter en WhatsApp',
        whatsappMessageMonthly:
          '¡Hola WAppShot! Quiero comenzar con el plan Starter ($49/mes, 2 usuarios) en la API Oficial de WhatsApp Business.',
        whatsappMessageAnnual:
          '¡Hola WAppShot! Quiero comenzar con el plan Starter anual ($39/mes, 2 usuarios) en la API Oficial de WhatsApp Business.',
      },
      {
        id: 'pro',
        name: 'Pro',
        kicker: 'Más Elegido · Equipos Comerciales',
        description:
          'Diseñado para equipos comerciales que automatizan calificación de leads, anuncios y CRM.',
        monthlyPrice: '$129',
        annualPrice: '$99',
        periodLabel: '/ mes',
        annualNote: 'Facturación anual ($1,188/año)',
        usersSpec: '7 incluidos (+$49/usuario/mes)',
        webhooksSpec: 'Limitados',
        highlighted: true,
        features: [
          { text: 'Flujos automáticos de captura y calificación', included: true },
          { text: 'Atribución de anuncios Click-to-WhatsApp y UTM', included: true },
          { text: 'Integración con HubSpot, Pipedrive, Zoho y Sheets', included: true },
          { text: 'Asignación rotativa y temporizadores SLA', included: true },
        ],
        ctaLabel: 'Elegir Pro en WhatsApp',
        whatsappMessageMonthly:
          '¡Hola WAppShot! Quiero activar el plan Pro ($129/mes, 7 usuarios + $49/usuario extra) con webhooks limitados.',
        whatsappMessageAnnual:
          '¡Hola WAppShot! Quiero activar el plan Pro anual ($99/mes, 7 usuarios + $49/usuario extra) con webhooks limitados.',
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        description:
          'Pensado para operaciones multisede con escala personalizada, API de alto caudal y SLA dedicado.',
        monthlyPrice: 'A medida',
        annualPrice: 'A medida',
        periodLabel: '',
        annualNote: 'Volumen y acuerdo SLA personalizados',
        usersSpec: 'A medida por sucursal',
        webhooksSpec: 'Extensivos',
        features: [
          { text: 'Múltiples números oficiales de WhatsApp Business API', included: true },
          { text: 'Integración Salesforce y API REST de alto caudal', included: true },
          { text: 'Asistencia oficial para verificación Tick Verde', included: true },
          { text: 'Escalamiento SLA a medida e ingeniero dedicado', included: true },
        ],
        ctaLabel: 'Hablar con Ventas en WhatsApp',
        whatsappMessageMonthly:
          '¡Hola WAppShot! Quiero cotizar el plan Enterprise con webhooks extensivos para nuestro equipo.',
        whatsappMessageAnnual:
          '¡Hola WAppShot! Quiero cotizar el plan Enterprise anual con webhooks extensivos para nuestro equipo.',
      },
    ],
  },

  ar: {
    kicker: 'خطط واضحة · حدود دقيقة للمستخدمين والـ Webhooks',
    title: 'تسعير واضح مصمم لتنمية مبيعاتك عبر واتساب',
    subtitle:
      'اختر الباقة المناسبة لحجم فريقك ومتطلبات الأتمتة على واجهة واتساب للأعمال الرسمية.',
    monthlyLabel: 'شهري',
    annualLabel: 'سنوي',
    annualSavingsLabel: 'وفر 20%',
    usersLabel: 'المستخدمون',
    webhooksLabel: 'Webhooks',
    includedHeading: 'المزايا المشمولة',
    notePrefix: 'ملاحظة:',
    noteBody:
      'تُطبق رسوم إضافية على رسائل القوالب (Template Messages)، وتختلف الرسوم لكل رسالة حسب فئات التسويق والخدمة والتحقق.',
    tiers: [
      {
        id: 'starter',
        name: 'Starter',
        description:
          'مصممة للفرق الصغيرة التي تنتقل من تطبيق الهاتف إلى تتبع سحابي موثوق للرسائل.',
        monthlyPrice: '$49',
        annualPrice: '$39',
        periodLabel: '/ شهرياً',
        annualNote: 'يدفع سنوياً ($468/سنة)',
        usersSpec: '2 فقط (بدون إضافيين)',
        webhooksSpec: 'غير متاح',
        features: [
          { text: 'رقم واتساب للأعمال رسمي واحد (API)', included: true },
          { text: 'تتبع لحظي لحالات الإرسال والتسليم والقراءة', included: true },
          { text: 'صندوق وارد مشترك وتفعيل سريع عبر Meta', included: true },
          { text: 'توزيع تلقائي للعملاء ومزامنة CRM', included: false },
        ],
        ctaLabel: 'ابدأ باقة Starter عبر واتساب',
        whatsappMessageMonthly:
          'مرحباً WAppShot! أرغب في باقة Starter الشهرية ($49/شهر، مستخدمان) عبر واجهة واتساب الرسمية.',
        whatsappMessageAnnual:
          'مرحباً WAppShot! أرغب في باقة Starter السنوية ($39/شهر، مستخدمان) عبر واجهة واتساب الرسمية.',
      },
      {
        id: 'pro',
        name: 'Pro',
        kicker: 'الأكثر طلباً · فرق المبيعات النامية',
        description:
          'مخصصة لفرق المبيعات التي تؤتمت تأهيل العملاء وربط الإعلانات وأنظمة إدارة العلاقات.',
        monthlyPrice: '$129',
        annualPrice: '$99',
        periodLabel: '/ شهرياً',
        annualNote: 'يدفع سنوياً ($1,188/سنة)',
        usersSpec: '7 مشمولين (+$49/مستخدم/شهر)',
        webhooksSpec: 'محدود',
        highlighted: true,
        features: [
          { text: 'مسارات آلية لالتقاط وتأهيل العملاء المحتملين', included: true },
          { text: 'تتبع إعلانات Click-to-WhatsApp ووسوم UTM', included: true },
          { text: 'ربط مباشر مع HubSpot و Pipedrive و Zoho و Sheets', included: true },
          { text: 'توزيع دوري للعملاء ومؤقتات SLA لكل مندوب', included: true },
        ],
        ctaLabel: 'ابدأ باقة Pro عبر واتساب',
        whatsappMessageMonthly:
          'مرحباً WAppShot! أرغب في باقة Pro الشهرية ($129/شهر، 7 مستخدمين + $49 للمستخدم الإضافي) مع Webhooks محدودة.',
        whatsappMessageAnnual:
          'مرحباً WAppShot! أرغب في باقة Pro السنوية ($99/شهر، 7 مستخدمين + $49 للمستخدم الإضافي) مع Webhooks محدودة.',
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        description:
          'مهيأة للمؤسسات متعددة الفروع التي تتطلب سعة مخصصة وتدفقات API عالية الكثافة.',
        monthlyPrice: 'مخصص',
        annualPrice: 'مخصص',
        periodLabel: '',
        annualNote: 'اتفاقية حجم مستخدمين و SLA مخصصة',
        usersSpec: 'سعة مخصصة للفروع',
        webhooksSpec: 'موسّع وشامل',
        features: [
          { text: 'عدة أرقام واتساب للأعمال رسمية (API)', included: true },
          { text: 'تكامل Salesforce وسرعة REST API عالية', included: true },
          { text: 'دعم التقديم الرسمي للشارة الخضراء (Green Tick)', included: true },
          { text: 'مهندس تفعيل مخصص وقواعد تصعيد SLA خاصة', included: true },
        ],
        ctaLabel: 'تواصل مع المبيعات عبر واتساب',
        whatsappMessageMonthly:
          'مرحباً WAppShot! أرغب في مناقشة باقة Enterprise مع Webhooks موسّعة لفريقنا.',
        whatsappMessageAnnual:
          'مرحباً WAppShot! أرغب في مناقشة باقة Enterprise السنوية مع Webhooks موسّعة لفريقنا.',
      },
    ],
  },

  it: {
    kicker: 'Piani Trasparenti · Utenti e Webhook Chiari',
    title: 'Prezzi chiari per scalare le vendite su WhatsApp',
    subtitle:
      'Scegli il piano adatto alla dimensione del team e al livello di automazione su API Ufficiale WhatsApp Business.',
    monthlyLabel: 'Mensile',
    annualLabel: 'Annuale',
    annualSavingsLabel: 'Risparmia 20%',
    usersLabel: 'Utenti',
    webhooksLabel: 'Webhook',
    includedHeading: 'Incluso nel piano',
    notePrefix: 'Nota:',
    noteBody:
      'Si applicano costi aggiuntivi per i messaggi template. Le tariffe per messaggio variano per le categorie marketing, utility e autenticazione.',
    tiers: [
      {
        id: 'starter',
        name: 'Starter',
        description:
          'Pensato per coppie operative che passano dall’app mobile al tracciamento cloud affidabile.',
        monthlyPrice: '$49',
        annualPrice: '$39',
        periodLabel: '/ mese',
        annualNote: 'Fatturazione annuale ($468/anno)',
        usersSpec: 'Solo 2 (nessun extra)',
        webhooksSpec: 'Non incluso',
        features: [
          { text: '1 numero ufficiale WhatsApp Business API', included: true },
          { text: 'Log in tempo reale: Inviato, Consegnato, Letto', included: true },
          { text: 'Inbox condivisa e attivazione guidata Meta', included: true },
          { text: 'Routing automatico lead e sync CRM', included: false },
        ],
        ctaLabel: 'Attiva Starter su WhatsApp',
        whatsappMessageMonthly:
          'Ciao WAppShot! Vorrei attivare il piano Starter ($49/mese, 2 utenti) su API Ufficiale WhatsApp Business.',
        whatsappMessageAnnual:
          'Ciao WAppShot! Vorrei attivare il piano Starter annuale ($39/mese, 2 utenti) su API Ufficiale WhatsApp Business.',
      },
      {
        id: 'pro',
        name: 'Pro',
        kicker: 'Più Scelto · Team in Crescita',
        description:
          'Ideale per team commerciali che automatizzano qualificazione lead, attribuzione ads e CRM.',
        monthlyPrice: '$129',
        annualPrice: '$99',
        periodLabel: '/ mese',
        annualNote: 'Fatturazione annuale ($1,188/anno)',
        usersSpec: '7 inclusi (+$49/utente/mese)',
        webhooksSpec: 'Limitato',
        highlighted: true,
        features: [
          { text: 'Flussi automatici di acquisizione e qualificazione', included: true },
          { text: 'Attribuzione inserzioni Click-to-WhatsApp e UTM', included: true },
          { text: 'Sync nativo con HubSpot, Pipedrive, Zoho e Sheets', included: true },
          { text: 'Assegnazione round-robin e timer SLA per consulente', included: true },
        ],
        ctaLabel: 'Attiva Pro su WhatsApp',
        whatsappMessageMonthly:
          'Ciao WAppShot! Vorrei attivare il piano Pro ($129/mese, 7 utenti + $49/utente extra) con webhook limitati.',
        whatsappMessageAnnual:
          'Ciao WAppShot! Vorrei attivare il piano Pro annuale ($99/mese, 7 utenti + $49/utente extra) con webhook limitati.',
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        description:
          'Progettato per aziende multi-sede con scala personalizzata, API ad alta portata e SLA dedicati.',
        monthlyPrice: 'Su misura',
        annualPrice: 'Su misura',
        periodLabel: '',
        annualNote: 'Accordo volumi e SLA personalizzati',
        usersSpec: 'Su misura multi-sede',
        webhooksSpec: 'Esteso',
        features: [
          { text: 'Più numeri ufficiali WhatsApp Business API', included: true },
          { text: 'Integrazione Salesforce e API REST ad alta capacità', included: true },
          { text: 'Supporto ufficiale alla verifica Spunta Verde', included: true },
          { text: 'Regole SLA dedicate e ingegnere di onboarding', included: true },
        ],
        ctaLabel: 'Parla con Vendite su WhatsApp',
        whatsappMessageMonthly:
          'Ciao WAppShot! Vorrei valutare il piano Enterprise con webhook estesi per il nostro team.',
        whatsappMessageAnnual:
          'Ciao WAppShot! Vorrei valutare il piano Enterprise annuale con webhook estesi per il nostro team.',
      },
    ],
  },
};
