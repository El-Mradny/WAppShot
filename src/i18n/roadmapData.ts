import type { LanguageCode } from './translations';

export interface RoadmapStep {
  id: string;
  number: string;
  phase: string;
  duration: string;
  title: string;
  summary: string;
  deliverableLabel: string;
  deliverable: string;
  ownerLabel: string;
  owner: string;
}

export interface RoadmapBundle {
  kicker: string;
  title: string;
  subtitle: string;
  timelineSummary: string;
  ctaLabel: string;
  ctaGreeting: string;
  steps: RoadmapStep[];
}

export const ROADMAP_DATA: Record<LanguageCode, RoadmapBundle> = {
  en: {
    kicker: 'Implementation Roadmap · Sign-Up to Production',
    title: 'From API sign-up to full team deployment in days',
    subtitle:
      'A structured five-stage rollout takes your organization from Meta Cloud API registration to multi-agent lead routing without disrupting live customer conversations.',
    timelineSummary: '5 stages · Live sandbox in 30 mins · Full team rollout in 4 days',
    ctaLabel: 'Plan Your Rollout on WhatsApp',
    ctaGreeting:
      'Hi WAppShot! I reviewed the Implementation Roadmap and would like to plan our Official WhatsApp Business API rollout.',
    steps: [
      {
        id: 'api-signup',
        number: '01',
        phase: 'Stage 01',
        duration: 'Day 1 · ~15 mins',
        title: 'API Sign-Up & Number Provisioning',
        summary:
          'Connect your Meta Business Portfolio through Embedded Signup and migrate an existing business number or provision a dedicated cloud line—with zero SIM or phone dependency.',
        deliverableLabel: 'Milestone',
        deliverable: 'WABA ID & cloud phone active',
        ownerLabel: 'Led by',
        owner: 'WAppShot Onboarding + Admin',
      },
      {
        id: 'meta-verification',
        number: '02',
        phase: 'Stage 02',
        duration: 'Days 1–3',
        title: 'Meta Verification & Messaging Tiers',
        summary:
          'Complete Meta Business Verification, align your official WhatsApp display name, and establish clean opt-in compliance for higher daily outbound capacity and Green Tick eligibility.',
        deliverableLabel: 'Milestone',
        deliverable: 'Verified business & tier upgrade',
        ownerLabel: 'Led by',
        owner: 'Business Owner + Compliance Desk',
      },
      {
        id: 'templates-webhooks',
        number: '03',
        phase: 'Stage 03',
        duration: 'Day 2',
        title: 'Message Templates & Webhook Telemetry',
        summary:
          'Register Meta-approved utility, authentication, and marketing templates while subscribing your workspace to real-time Sent, Delivered, Read, and failure status webhooks.',
        deliverableLabel: 'Milestone',
        deliverable: 'Signed webhooks & live delivery logs',
        ownerLabel: 'Led by',
        owner: 'Implementation Engineer',
      },
      {
        id: 'crm-routing',
        number: '04',
        phase: 'Stage 04',
        duration: 'Day 3',
        title: 'CRM Sync & Automated Lead Routing',
        summary:
          'Connect HubSpot, Salesforce, Pipedrive, or Zoho CRM, bind Click-to-WhatsApp ad UTM attribution, and enable qualification prompts with round-robin rep assignment.',
        deliverableLabel: 'Milestone',
        deliverable: 'Bi-directional CRM & SLA routing live',
        ownerLabel: 'Led by',
        owner: 'RevOps + WAppShot Engineer',
      },
      {
        id: 'team-deployment',
        number: '05',
        phase: 'Stage 05',
        duration: 'Day 4+',
        title: 'Full Multi-Agent Team Deployment',
        summary:
          'Onboard sales and support teams into one shared cloud inbox with role-based permissions, collision locks, internal notes, and continuous response-time SLA reporting.',
        deliverableLabel: 'Milestone',
        deliverable: 'All reps live on one verified number',
        ownerLabel: 'Led by',
        owner: 'Sales & Support Team Leads',
      },
    ],
  },

  es: {
    kicker: 'Hoja de Ruta · Del Registro a Producción',
    title: 'Del alta en la API al despliegue completo del equipo en días',
    subtitle:
      'Un proceso estructurado en cinco etapas lleva a tu empresa desde el registro en Meta Cloud API hasta el enrutamiento multi-agente sin interrumpir conversaciones activas.',
    timelineSummary: '5 etapas · Conexión inicial en 30 min · Despliegue completo en 4 días',
    ctaLabel: 'Planificar Despliegue por WhatsApp',
    ctaGreeting:
      '¡Hola WAppShot! Revisé la hoja de ruta de implementación y quiero planificar nuestro despliegue en la API Oficial de WhatsApp Business.',
    steps: [
      {
        id: 'api-signup',
        number: '01',
        phase: 'Etapa 01',
        duration: 'Día 1 · ~15 min',
        title: 'Registro en la API y Activación de Línea',
        summary:
          'Conecta tu Portafolio Empresarial de Meta mediante Embedded Signup y migra tu número actual o activa una línea en la nube sin depender de tarjetas SIM ni móviles.',
        deliverableLabel: 'Hito',
        deliverable: 'WABA ID y número cloud activos',
        ownerLabel: 'Responsable',
        owner: 'Onboarding WAppShot + Admin',
      },
      {
        id: 'meta-verification',
        number: '02',
        phase: 'Etapa 02',
        duration: 'Días 1–3',
        title: 'Verificación de Meta y Niveles de Envío',
        summary:
          'Completa la verificación comercial de Meta, valida el nombre visible de tu marca y asegura el cumplimiento opt-in para escalar límites diarios y optar al Tick Verde.',
        deliverableLabel: 'Hito',
        deliverable: 'Empresa verificada y mayor cuota',
        ownerLabel: 'Responsable',
        owner: 'Dirección + Cumplimiento',
      },
      {
        id: 'templates-webhooks',
        number: '03',
        phase: 'Etapa 03',
        duration: 'Día 2',
        title: 'Plantillas Aprobadas y Telemetría Webhook',
        summary:
          'Da de alta plantillas de utilidad, autenticación y marketing aprobadas por Meta y suscribe tu espacio a eventos en tiempo real de Envío, Entrega, Lectura y error.',
        deliverableLabel: 'Hito',
        deliverable: 'Webhooks firmados y logs en vivo',
        ownerLabel: 'Responsable',
        owner: 'Ingeniero de Implementación',
      },
      {
        id: 'crm-routing',
        number: '04',
        phase: 'Etapa 04',
        duration: 'Día 3',
        title: 'Sincronización CRM y Enrutamiento de Leads',
        summary:
          'Integra HubSpot, Salesforce, Pipedrive o Zoho CRM, vincula atribución UTM de anuncios Click-to-WhatsApp y activa flujos de calificación con asignación rotativa.',
        deliverableLabel: 'Hito',
        deliverable: 'CRM bidireccional y reglas SLA activas',
        ownerLabel: 'Responsable',
        owner: 'RevOps + Soporte Técnico',
      },
      {
        id: 'team-deployment',
        number: '05',
        phase: 'Etapa 05',
        duration: 'Día 4+',
        title: 'Despliegue Completo del Equipo Multi-Agente',
        summary:
          'Incorpora a ventas y soporte en una sola bandeja compartida con permisos por rol, bloqueo contra colisiones, notas internas y seguimiento continuo de tiempos SLA.',
        deliverableLabel: 'Hito',
        deliverable: 'Todo el equipo operando en 1 número',
        ownerLabel: 'Responsable',
        owner: 'Líderes de Ventas y Soporte',
      },
    ],
  },

  ar: {
    kicker: 'خارطة التنفيذ · من التسجيل إلى الإطلاق الكامل',
    title: 'من تفعيل الواجهة البرمجية إلى جاهزية الفريق بالكامل خلال أيام',
    subtitle:
      'خطة تنفيذ منظمة من خمس مراحل تنقل شركتك من ربط Meta Cloud API إلى توزيع العملاء الآلي على كامل فريقك دون انقطاع محادثات العملاء الحالية.',
    timelineSummary: '5 مراحل · ربط أولي خلال 30 دقيقة · إطلاق كامل للفريق خلال 4 أيام',
    ctaLabel: 'خطط لإطلاقك عبر واتساب',
    ctaGreeting:
      'مرحباً WAppShot! اطلعت على خارطة التنفيذ وأرغب في التخطيط لإطلاق واجهة واتساب للأعمال الرسمية لفريقنا.',
    steps: [
      {
        id: 'api-signup',
        number: '01',
        phase: 'المرحلة 01',
        duration: 'اليوم 1 · ~15 دقيقة',
        title: 'التسجيل في الواجهة وتفعيل الرقم السحابي',
        summary:
          'اربط حساب Meta Business عبر التسجيل المدمج وانقل رقم عملك الحالي أو فعّل رقماً سحابياً مخصصاً دون أي اعتماد على شرائح SIM أو هواتف متصلة.',
        deliverableLabel: 'الإنجاز',
        deliverable: 'تفعيل WABA ID والرقم السحابي',
        ownerLabel: 'بقيادة',
        owner: 'فريق التفعيل + مدير الحساب',
      },
      {
        id: 'meta-verification',
        number: '02',
        phase: 'المرحلة 02',
        duration: 'الأيام 1–3',
        title: 'توثيق Meta ورفع حدود الإرسال',
        summary:
          'أكمل توثيق النشاط التجاري لدى Meta، واعتمد اسم العرض الرسمي للعلامة التجارية مع ضبط موافقات العملاء لفتح سعات إرسال أعلى والتأهل للشارة الخضراء.',
        deliverableLabel: 'الإنجاز',
        deliverable: 'نشاط موثق وترقية سقف الإرسال',
        ownerLabel: 'بقيادة',
        owner: 'الإدارة + فريق الامتثال',
      },
      {
        id: 'templates-webhooks',
        number: '03',
        phase: 'المرحلة 03',
        duration: 'اليوم 2',
        title: 'اعتماد القوالب وتفعيل تتبع Webhooks',
        summary:
          'جهّز قوالب الخدمة والتحقق والتسويق المعتمدة من Meta واربط نظامك بإشعارات Webhook اللحظية لحالات الإرسال والتسليم والقراءة وأكواد الأخطاء.',
        deliverableLabel: 'الإنجاز',
        deliverable: 'Webhooks موقّعة وسجلات تسليم حية',
        ownerLabel: 'بقيادة',
        owner: 'مهندس التكامل والتنفيذ',
      },
      {
        id: 'crm-routing',
        number: '04',
        phase: 'المرحلة 04',
        duration: 'اليوم 3',
        title: 'مزامنة CRM والتوزيع الآلي للعملاء',
        summary:
          'اربط HubSpot أو Salesforce أو Pipedrive أو Zoho CRM، وفعّل تتبع مصادر إعلانات Click-to-WhatsApp مع مسارات التأهيل والتوزيع الدوري على المندوبين.',
        deliverableLabel: 'الإنجاز',
        deliverable: 'ربط CRM ثنائي الاتجاه وقواعد SLA',
        ownerLabel: 'بقيادة',
        owner: 'فريق العمليات + مهندس WAppShot',
      },
      {
        id: 'team-deployment',
        number: '05',
        phase: 'المرحلة 05',
        duration: 'اليوم 4+',
        title: 'الإطلاق الكامل لفريق المبيعات والدعم',
        summary:
          'أضف كافة موظفي المبيعات والدعم إلى صندوق وارد سحابي موحد بصلاحيات دقيقة ومنع تعارض الردود والملاحظات الداخلية وتقارير الالتزام بمؤشرات SLA.',
        deliverableLabel: 'الإنجاز',
        deliverable: 'تشغيل الفريق بالكامل على رقم واحد',
        ownerLabel: 'بقيادة',
        owner: 'قادة فرق المبيعات والدعم',
      },
    ],
  },

  it: {
    kicker: 'Roadmap di Implementazione · Dall’Attivazione al Team',
    title: 'Dalla registrazione API al rilascio completo del team in pochi giorni',
    subtitle:
      'Un percorso guidato in cinque fasi accompagna la tua azienda dalla registrazione su Meta Cloud API al routing multi-agente senza interrompere le chat attive.',
    timelineSummary: '5 fasi · Connessione iniziale in 30 min · Rilascio team in 4 giorni',
    ctaLabel: 'Pianifica il Rollout su WhatsApp',
    ctaGreeting:
      'Ciao WAppShot! Ho visto la Roadmap di Implementazione e vorrei pianificare il rollout dell’API Ufficiale WhatsApp Business.',
    steps: [
      {
        id: 'api-signup',
        number: '01',
        phase: 'Fase 01',
        duration: 'Giorno 1 · ~15 min',
        title: 'Registrazione API e Provisioning Numero',
        summary:
          'Collega il tuo Meta Business Portfolio tramite Embedded Signup e migra il numero esistente o attiva una linea cloud dedicata senza dipendere da SIM o smartphone.',
        deliverableLabel: 'Obiettivo',
        deliverable: 'WABA ID e numero cloud attivi',
        ownerLabel: 'A cura di',
        owner: 'Onboarding WAppShot + Admin',
      },
      {
        id: 'meta-verification',
        number: '02',
        phase: 'Fase 02',
        duration: 'Giorni 1–3',
        title: 'Verifica Meta e Livelli di Invio',
        summary:
          'Completa la verifica aziendale su Meta, conferma il nome visualizzato ufficiale e imposta la conformità opt-in per sbloccare soglie superiori e Spunta Verde.',
        deliverableLabel: 'Obiettivo',
        deliverable: 'Azienda verificata e tier sbloccati',
        ownerLabel: 'A cura di',
        owner: 'Direzione + Compliance',
      },
      {
        id: 'templates-webhooks',
        number: '03',
        phase: 'Fase 03',
        duration: 'Giorno 2',
        title: 'Template Approvati e Telemetria Webhook',
        summary:
          'Registra template utility, autenticazione e marketing approvati da Meta e attiva i webhook in tempo reale per gli stati Inviato, Consegnato, Letto ed errori.',
        deliverableLabel: 'Obiettivo',
        deliverable: 'Webhook firmati e log live attivi',
        ownerLabel: 'A cura di',
        owner: 'Ingegnere di Implementazione',
      },
      {
        id: 'crm-routing',
        number: '04',
        phase: 'Fase 04',
        duration: 'Giorno 3',
        title: 'Sync CRM e Routing Automatico dei Lead',
        summary:
          'Integra HubSpot, Salesforce, Pipedrive o Zoho CRM, collega l’attribuzione UTM degli annunci Click-to-WhatsApp e attiva la qualificazione con assegnazione round-robin.',
        deliverableLabel: 'Obiettivo',
        deliverable: 'Sync CRM bidirezionale e SLA attivi',
        ownerLabel: 'A cura di',
        owner: 'RevOps + Ingegnere WAppShot',
      },
      {
        id: 'team-deployment',
        number: '05',
        phase: 'Fase 05',
        duration: 'Giorno 4+',
        title: 'Deploy Completo per Team Multi-Agente',
        summary:
          'Abilita i team vendite e assistenza su un’unica inbox cloud condivisa con permessi per ruolo, blocchi anti-collisione, note interne e reportistica SLA continua.',
        deliverableLabel: 'Obiettivo',
        deliverable: 'Tutti i rep attivi su un solo numero',
        ownerLabel: 'A cura di',
        owner: 'Team Lead Vendite e Supporto',
      },
    ],
  },
};
