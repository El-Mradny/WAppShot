import type {
  ComparisonCategory,
  FaqCategory,
  WebhookEventSample,
} from '../data/wappshotData';

export type LanguageCode = 'en' | 'es' | 'ar' | 'it';

export interface LanguageOption {
  code: LanguageCode;
  shortLabel: string;
  nativeLabel: string;
  dir: 'ltr' | 'rtl';
  ogLocale: string;
}

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: 'en', shortLabel: 'EN', nativeLabel: 'English', dir: 'ltr', ogLocale: 'en_US' },
  { code: 'es', shortLabel: 'ES', nativeLabel: 'Español', dir: 'ltr', ogLocale: 'es_ES' },
  { code: 'ar', shortLabel: 'AR', nativeLabel: 'العربية', dir: 'rtl', ogLocale: 'ar_AE' },
  { code: 'it', shortLabel: 'IT', nativeLabel: 'Italiano', dir: 'ltr', ogLocale: 'it_IT' },
];

export interface TranslationBundle {
  seo: {
    title: string;
    description: string;
  };
  nav: {
    capabilities: string;
    compare: string;
    pricing: string;
    faq: string;
    contact: string;
    chatCta: string;
    chatGreeting: string;
    languageAria: string;
    openMenuAria: string;
    closeMenuAria: string;
    toggleThemeToDarkAria: string;
    toggleThemeToLightAria: string;
  };
  hero: {
    kickerParts: [string, string, string];
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    heroChatGreeting: string;
    imageAlt: string;
    fallbackTitle: string;
    fallbackSubtitle: string;
    kpis: { metric: string; description: string }[];
  };
  whatIsApi: {
    kicker: string;
    title: string;
    subtitle: string;
    pillars: { number: string; title: string; body: string }[];
    imageAlt: string;
    fallbackTitle: string;
    fallbackSubtitle: string;
    inspectorTitle: string;
    playFlow: string;
    pauseFlow: string;
    eventSummaries: Record<WebhookEventSample['id'], string>;
  };
  capabilities: {
    kicker: string;
    title: string;
    walkthroughLink: string;
    walkthroughGreeting: string;
    card1Title: string;
    card1Body: string;
    outboundTab: string;
    inboundTab: string;
    trackingMetrics: {
      outbound: { label: string; value: string; detail: string }[];
      inbound: { label: string; value: string; detail: string }[];
    };
    card2Title: string;
    card2Body: string;
    card2Rows: { label: string; value: string }[];
    card3Title: string;
    card3Body: string;
    card3Rows: { label: string; value: string }[];
    card4Title: string;
    card4Body: string;
    card4Cols: { label: string; title: string; detail: string }[];
  };
  comparison: {
    kicker: string;
    title: string;
    subtitle: string;
    filters: Record<ComparisonCategory, string>;
    headers: {
      capability: string;
      businessApp: string;
      wappshotApi: string;
    };
    rows: {
      feature: string;
      category: Exclude<ComparisonCategory, 'all'>;
      businessApp: string;
      wappshotApi: string;
    }[];
  };
  faq: {
    kicker: string;
    title: string;
    subtitle: string;
    filters: Record<FaqCategory, string>;
    escalationPrompt: string;
    escalationLink: string;
    escalationGreeting: string;
    items: {
      id: string;
      category: Exclude<FaqCategory, 'all'>;
      categoryLabel: string;
      question: string;
      answer: string;
    }[];
  };
  proofCta: {
    kicker: string;
    title: string;
    subtitle: string;
    topicPrompt: string;
    topics: string[];
    previewLabel: string;
    buildPreviewMessage: (name: string, company: string, topic: string) => string;
    primaryCta: string;
    ctaHint: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    sendViaWhatsAppCta: string;
    whatsappConfirmationCta: string;
    buildChecklistWhatsAppMessage: (
      name: string,
      company: string,
      email: string,
      topic: string,
    ) => string;
    errorMissingName: string;
    errorInvalidEmail: string;
    submittedTitle: (name: string) => string;
    submittedBodyBeforeEmail: string;
    submittedBodyAfterEmail: string;
    submitAnother: string;
  };
  footer: {
    byText: string;
    brandBy: string;
    tagline: string;
    rights: string;
  };
  floatingChat: {
    label: string;
    greeting: string;
    ariaLabel: string;
  };
  trust: {
    gdpr: string;
    iso: string;
    securityLabel: string;
  };
}

export const TRANSLATIONS: Record<LanguageCode, TranslationBundle> = {
  en: {
    seo: {
      title: 'WAppShot – Official WhatsApp Business API & Lead Tracking',
      description:
        'Track every WhatsApp message, automate lead qualification, and sync your CRM with WAppShot on the Official WhatsApp Business API. Chat with us today.',
    },
    nav: {
      capabilities: 'Capabilities',
      compare: 'Compare',
      pricing: 'Pricing',
      faq: 'FAQ',
      contact: 'Contact',
      chatCta: 'Chat on WhatsApp',
      chatGreeting:
        'Hi WAppShot team, I would like to learn more about Official WhatsApp Business API message tracking and lead automation.',
      languageAria: 'Select language',
      openMenuAria: 'Open navigation menu',
      closeMenuAria: 'Close navigation menu',
      toggleThemeToDarkAria: 'Switch to dark mode',
      toggleThemeToLightAria: 'Switch to light mode',
    },
    hero: {
      kickerParts: ['Official Meta Cloud API', 'Message Tracking', 'Automated Lead Management'],
      headline: 'Track every WhatsApp message and automate every lead.',
      subheadline:
        'WAppShot connects your business directly to the Official WhatsApp Business API. Monitor real-time delivery and read receipts, route inbound prospects to your sales team automatically, and sync every conversation with your CRM—without relying on a linked phone.',
      primaryCta: 'Chat with Me on WhatsApp',
      secondaryCta: 'Compare with Business App',
      heroChatGreeting:
        'Hi! I saw WAppShot and want to start using the Official WhatsApp Business API for message tracking and lead automation.',
      imageAlt:
        'WAppShot operations workstation showing WhatsApp Business API message analytics and conversation threads',
      fallbackTitle: 'WAppShot API Command Workspace',
      fallbackSubtitle: 'Real-time delivery telemetry and shared multi-agent conversation routing.',
      kpis: [
        { metric: '99.94%', description: 'Message delivery tracking across Meta Cloud webhooks' },
        { metric: '< 1.8s', description: 'Automated lead capture to CRM assignment latency' },
        { metric: 'Unlimited', description: 'Concurrent sales and support agents on one number' },
        { metric: '0%', description: 'Smartphone battery or QR-session dependency' },
      ],
    },
    whatIsApi: {
      kicker: 'Official Infrastructure · Meta Cloud API',
      title: 'What is the WhatsApp Business API?',
      subtitle:
        "The WhatsApp Business API is Meta's enterprise messaging interface built for medium and large teams to connect WhatsApp directly to software systems. WAppShot wraps that official API in a ready-to-use tracking and lead automation platform.",
      pillars: [
        {
          number: '01.',
          title: 'Cloud-Hosted Protocol, Not a Mobile App',
          body: 'Unlike the consumer WhatsApp Business App that runs on a single smartphone, the Official WhatsApp Business API operates directly on Meta Cloud servers. Your business number stays online around the clock with no battery drain, SIM swap issues, or QR code disconnects.',
        },
        {
          number: '02.',
          title: 'Event-Driven Message Tracking Webhooks',
          body: 'Every outbound campaign and inbound customer reply emits verifiable status events—accepted, sent, delivered, read, and failed—so your team has auditable proof of message delivery and response-time SLAs.',
        },
        {
          number: '03.',
          title: 'Verified Brand Identity & Compliant Scale',
          body: 'Built for businesses that outgrow 256-contact broadcast lists. Send Meta-approved utility, authentication, and marketing templates to thousands of opted-in leads while protecting your number reputation and qualifying for the official Green Tick.',
        },
      ],
      imageAlt: 'Isometric architectural diagram of official WhatsApp Cloud API routing nodes',
      fallbackTitle: 'Meta Cloud API Routing Layer',
      fallbackSubtitle: 'Direct webhook ingestion for message tracking and CRM lead sync.',
      inspectorTitle: 'Interactive Webhook Event Preview',
      playFlow: 'Play Flow',
      pauseFlow: 'Pause Flow',
      eventSummaries: {
        sent: 'Dispatched via Meta Cloud API node with template tracking ID',
        delivered: 'Confirmed receipt on prospect handset with carrier timestamp',
        read: 'Prospect opened thread; SLA timer and link attribution updated',
        qualified: 'Inbound reply parsed, tagged, and synced to CRM deal pipeline',
      },
    },
    capabilities: {
      kicker: 'Platform Capabilities · Revenue Operations',
      title: 'What can WAppShot help you with?',
      walkthroughLink: 'Request a live walkthrough',
      walkthroughGreeting:
        'Hi! I want to see a walkthrough of WAppShot message tracking and lead automation.',
      card1Title: 'Seamless End-to-End Message Tracking',
      card1Body:
        'Know the exact status of every customer touchpoint. WAppShot logs sent, delivered, read, and undelivered error codes in a single audit timeline—and connects Click-to-WhatsApp ad clicks directly to closed deals.',
      outboundTab: 'Outbound Campaigns',
      inboundTab: 'Inbound Support',
      trackingMetrics: {
        outbound: [
          { label: 'Delivered Rate', value: '99.4%', detail: 'Verified carrier handoff' },
          { label: 'Template Read Rate', value: '74.2%', detail: 'Median 3m 12s to open' },
          { label: 'CTA Click Attribution', value: '31.8%', detail: 'Mapped to UTM campaign' },
        ],
        inbound: [
          { label: 'First Response SLA', value: '42s', detail: 'Automated queue routing' },
          { label: 'Auto-Qualified Leads', value: '86.5%', detail: 'Synced prior to agent pickup' },
          { label: 'Resolution Coverage', value: '100%', detail: 'Zero dropped customer threads' },
        ],
      },
      card2Title: 'Automated Lead Capture & Qualification',
      card2Body:
        'Stop losing prospects after business hours. WAppShot greets inbound leads within two seconds, captures name, budget, and service intent via interactive reply buttons, and scores every contact before a rep steps in.',
      card2Rows: [
        { label: 'Lead source capture', value: 'Meta Ads · Web · QR' },
        { label: 'Routing logic', value: 'Round-robin & territory' },
        { label: 'Follow-up sequence', value: 'Automated 24h window' },
      ],
      card3Title: 'Shared Multi-Agent Team Inbox',
      card3Body:
        'Run your entire sales and support floor on one verified WhatsApp number. Assign owners, leave private internal notes, track agent response times, and prevent two reps from replying to the same lead simultaneously.',
      card3Rows: [
        { label: 'Team seats', value: 'Unlimited agents' },
        { label: 'Agent accountability', value: 'Per-rep SLA reports' },
        { label: 'Collision guard', value: 'Real-time lock' },
      ],
      card4Title: 'Real-Time CRM, Order & Webhook Synchronization',
      card4Body:
        'Eliminate manual spreadsheet updates. Every qualified WhatsApp lead, conversation transcript, and delivery receipt syncs automatically with HubSpot, Salesforce, Pipedrive, Zoho, Google Sheets, or your own REST webhook endpoint.',
      card4Cols: [
        {
          label: 'Pipeline Sync',
          title: 'Bi-directional deal stages',
          detail: 'Trigger WhatsApp templates when a CRM deal moves stage.',
        },
        {
          label: 'Broadcast Engine',
          title: 'Segmented opt-in sends',
          detail: 'Track delivery and reply rate across every cohort.',
        },
        {
          label: 'REST & Webhooks',
          title: 'Signed JSON event stream',
          detail: 'Connect ERP order confirmations and payment reminders.',
        },
      ],
    },
    comparison: {
      kicker: 'Feature Comparison · App vs. Official API',
      title: 'WAppShot Official API vs. WhatsApp Business App',
      subtitle:
        'The free WhatsApp Business App was built for solo shopkeepers replying on one phone. See how WAppShot removes device limits and gives sales teams measurable tracking.',
      filters: {
        all: 'All Features',
        tracking: 'Message Tracking',
        automation: 'Lead Automation',
        scale: 'Scale & Compliance',
      },
      headers: {
        capability: 'Capability',
        businessApp: 'WhatsApp Business App (Free Mobile App)',
        wappshotApi: 'WAppShot (Official WhatsApp Business API)',
      },
      rows: [
        {
          feature: 'Message Delivery & Read Tracking',
          category: 'tracking',
          businessApp: 'Manual phone check only; no exportable logs or failure codes',
          wappshotApi: 'Real-time Sent, Delivered, Read & error reason webhooks per message',
        },
        {
          feature: 'Automated Lead Capture & CRM Sync',
          category: 'automation',
          businessApp: 'Manual copy-paste from mobile chats into spreadsheets or CRM',
          wappshotApi: 'Instant lead extraction, intent tagging & bi-directional CRM sync',
        },
        {
          feature: 'Click-to-WhatsApp Ad Attribution',
          category: 'tracking',
          businessApp: 'No campaign UTM or Meta ad-set conversion mapping',
          wappshotApi: 'Full ad-set, keyword & referral attribution tied to closed revenue',
        },
        {
          feature: 'Multi-Agent Shared Team Inbox',
          category: 'automation',
          businessApp: 'Capped at 1 primary phone + 4 linked devices with no routing rules',
          wappshotApi: 'Unlimited team seats on 1 number with round-robin & SLA timers',
        },
        {
          feature: 'Device & Battery Dependency',
          category: 'scale',
          businessApp: 'Requires primary smartphone online; QR sessions disconnect regularly',
          wappshotApi: '100% Meta Cloud hosted; zero phone, SIM, or QR dependency',
        },
        {
          feature: 'Outbound Broadcast Capacity',
          category: 'scale',
          businessApp: 'Hard cap of 256 contacts; recipient must save your number first',
          wappshotApi: 'Unlimited opt-in broadcasts via Meta-approved message templates',
        },
        {
          feature: 'Account Compliance & Green Tick',
          category: 'scale',
          businessApp: 'High risk of sudden number bans; no official verification badge',
          wappshotApi: 'Official Meta Business verification & Green Tick eligibility',
        },
        {
          feature: 'Auto-Responder & Qualification Flows',
          category: 'automation',
          businessApp: 'Basic static away greeting only; no branching logic',
          wappshotApi: 'Multi-step interactive button & list flows with conditional routing',
        },
      ],
    },
    faq: {
      kicker: 'Common Questions · API, Setup & Billing',
      title: 'Frequently asked questions',
      subtitle:
        'Clear answers on migrating your existing number, connecting CRM workflows, and how Meta conversation fees work with WAppShot.',
      filters: {
        all: 'All Questions',
        api: 'WhatsApp API',
        integration: 'Integration',
        pricing: 'Pricing',
      },
      escalationPrompt: 'Have a custom compliance or volume question?',
      escalationLink: 'Ask us directly on WhatsApp',
      escalationGreeting:
        'Hi WAppShot team, I have a question about WhatsApp Business API setup and pricing for my team.',
      items: [
        {
          id: 'keep-number',
          category: 'api',
          categoryLabel: 'WhatsApp API',
          question: 'Can we keep our existing business phone number when moving to WAppShot?',
          answer:
            'Yes. You can migrate your existing WhatsApp Business App number directly to the Official WhatsApp Business API through WAppShot, or connect a dedicated landline, toll-free, or mobile number. We guide you through the 10-minute Embedded Signup flow so downtime is minimal. Note that once connected to the API, that number runs in the cloud via WAppShot rather than the mobile app.',
        },
        {
          id: 'anti-ban',
          category: 'api',
          categoryLabel: 'WhatsApp API',
          question: 'Does using the Official API protect our number from bans during campaigns?',
          answer:
            'Yes. Unofficial scraping tools and high-volume broadcasts from the free Business App frequently trigger automated bans. WAppShot operates strictly on Meta’s Official Cloud API using pre-approved message templates and opt-in tracking, keeping your quality rating healthy and your account compliant.',
        },
        {
          id: 'green-tick',
          category: 'api',
          categoryLabel: 'WhatsApp API',
          question: 'How does the Official WhatsApp Green Tick verification work?',
          answer:
            'Only businesses on the Official WhatsApp Business API are eligible to apply for the verified badge (Green Tick). Once your Meta Business Manager is verified and your WAppShot profile is active, our onboarding team helps prepare and submit your official verification request directly to Meta.',
        },
        {
          id: 'setup-time',
          category: 'integration',
          categoryLabel: 'Integration',
          question: 'How long does it take to connect WAppShot and start tracking messages?',
          answer:
            'Most teams connect their Meta Business Account and launch live message tracking within 15 to 30 minutes using Meta Embedded Signup. Full Meta Business Verification—which unlocks higher daily messaging tiers—typically completes in 1 to 3 business days while you already test and route leads.',
        },
        {
          id: 'crm-sync',
          category: 'integration',
          categoryLabel: 'Integration',
          question: 'Which CRMs and software tools can we integrate with WAppShot?',
          answer:
            'WAppShot includes native connectors for HubSpot, Salesforce, Pipedrive, Zoho CRM, and Google Sheets, plus signed JSON webhooks and a REST API. Every sent, delivered, read, and reply event—along with Click-to-WhatsApp ad attribution—syncs to your pipeline automatically.',
        },
        {
          id: 'multi-agent',
          category: 'integration',
          categoryLabel: 'Integration',
          question: 'Can multiple sales and support reps use the same WhatsApp number simultaneously?',
          answer:
            'Yes. Unlike the WhatsApp Business App, which limits you to one primary phone and four linked devices, WAppShot supports unlimited team seats on a single verified number with round-robin lead routing, private internal notes, and live collision locks.',
        },
        {
          id: 'pricing-structure',
          category: 'pricing',
          categoryLabel: 'Pricing',
          question: 'How does WAppShot billing separate from Meta template charges?',
          answer:
            'Your WAppShot subscription covers workspace access, seats, CRM connectors, and webhook throughput at a flat monthly or annual rate. Meta bills per-conversation template fees separately based on template category and recipient region.',
        },
        {
          id: 'service-window',
          category: 'pricing',
          categoryLabel: 'Pricing',
          question: 'Do we pay Meta fees when replying to inbound customer leads?',
          answer:
            'Under Meta Cloud API rules, free-form replies sent within 24 hours of a customer message—as well as conversations started from Click-to-WhatsApp ads—carry zero Meta per-message fees.',
        },
        {
          id: 'contracts',
          category: 'pricing',
          categoryLabel: 'Pricing',
          question: 'Are annual contracts mandatory, or can we upgrade seats later?',
          answer:
            'No annual lock-in is required. You can start month-to-month or choose annual billing to save 20%, and add Pro seats ($49/user/month) or upgrade to Enterprise whenever your team expands.',
        },
      ],
    },
    proofCta: {
      kicker: 'Direct Onboarding · Chat Live on WhatsApp',
      title: 'Ready to switch to the Official WhatsApp Business API?',
      subtitle:
        'Pick what you want to set up, customize your intro note, and start a real WhatsApp conversation directly with our onboarding specialist.',
      topicPrompt: '1. Select your priority workflow',
      topics: [
        'Message Tracking & Analytics',
        'Automated Lead Management',
        'Migrate from WhatsApp Business App',
        'CRM & Webhook Integration',
      ],
      previewLabel: 'Pre-filled WhatsApp message preview',
      buildPreviewMessage: (name, company, topic) =>
        `Hi! I'm ${name.trim() || 'interested in WAppShot'}${
          company.trim() ? ` from ${company.trim()}` : ''
        }. I want to discuss ${topic} using the Official WhatsApp Business API.`,
      primaryCta: 'Chat with Me on WhatsApp',
      ctaHint: 'Opens WhatsApp with your selected topic pre-filled',
      formTitle: 'Or request an API migration checklist',
      formSubtitle:
        'Leave your details to receive the Meta verification guide and a tailored WAppShot setup plan.',
      nameLabel: 'Your Name',
      namePlaceholder: 'e.g. Sarah Ahmed',
      companyLabel: 'Company Name (Optional)',
      companyPlaceholder: 'e.g. Horizon Logistics',
      emailLabel: 'Work Email',
      emailPlaceholder: 'sarah@company.com',
      sendViaWhatsAppCta: 'Send Details on WhatsApp',
      whatsappConfirmationCta: 'Also Send on WhatsApp',
      buildChecklistWhatsAppMessage: (name, company, email, topic) =>
        `Hi WAppShot! I'm requesting the Official WhatsApp Business API migration checklist.\nName: ${
          name.trim() || 'Not provided'
        }${company.trim() ? `\nCompany: ${company.trim()}` : ''}${
          email.trim() ? `\nWork Email: ${email.trim()}` : ''
        }\nPriority Topic: ${topic}`,
      errorMissingName: 'Please enter your name so we know who to address.',
      errorInvalidEmail: 'Please enter a valid work email address.',
      submittedTitle: (name) => `Request received for ${name}`,
      submittedBodyBeforeEmail: 'We sent the WAppShot API setup guide to ',
      submittedBodyAfterEmail:
        '. You can also send a copy straight to our WhatsApp onboarding desk below.',
      submitAnother: 'Submit another inquiry',
    },
    footer: {
      byText: 'by',
      brandBy: 'Vibe Hub',
      tagline: 'Official WhatsApp Business API for message tracking and automated lead management.',
      rights: 'WAppShot. All rights reserved.',
    },
    floatingChat: {
      label: 'Chat with us',
      greeting:
        'Hi WAppShot team! I am visiting your site and would like to chat about the Official WhatsApp Business API.',
      ariaLabel: 'Chat with us on WhatsApp',
    },
    trust: {
      gdpr: 'GDPR Compliant',
      iso: 'ISO 27001',
      securityLabel: 'Enterprise Security & Compliance',
    },
  },

  es: {
    seo: {
      title: 'WAppShot – API Oficial de WhatsApp Business y Seguimiento',
      description:
        'Rastrea cada mensaje de WhatsApp, automatiza la calificación de leads y sincroniza tu CRM con WAppShot usando la API Oficial de WhatsApp Business.',
    },
    nav: {
      capabilities: 'Capacidades',
      compare: 'Comparar',
      pricing: 'Precios',
      faq: 'Preguntas',
      contact: 'Contacto',
      chatCta: 'Chatear en WhatsApp',
      chatGreeting:
        'Hola equipo de WAppShot, me gustaría conocer más sobre el seguimiento de mensajes y la automatización de leads con la API Oficial de WhatsApp Business.',
      languageAria: 'Seleccionar idioma',
      openMenuAria: 'Abrir menú de navegación',
      closeMenuAria: 'Cerrar menú de navegación',
      toggleThemeToDarkAria: 'Cambiar a modo oscuro',
      toggleThemeToLightAria: 'Cambiar a modo claro',
    },
    hero: {
      kickerParts: [
        'API Oficial de Meta Cloud',
        'Seguimiento de Mensajes',
        'Gestión Automatizada de Leads',
      ],
      headline: 'Rastrea cada mensaje de WhatsApp y automatiza cada lead.',
      subheadline:
        'WAppShot conecta tu empresa directamente con la API Oficial de WhatsApp Business. Supervisa entregas y lecturas en tiempo real, asigna prospectos automáticamente a tu equipo de ventas y sincroniza cada conversación con tu CRM sin depender de un teléfono.',
      primaryCta: 'Chatea Conmigo en WhatsApp',
      secondaryCta: 'Comparar con Business App',
      heroChatGreeting:
        '¡Hola! Vi WAppShot y quiero comenzar a usar la API Oficial de WhatsApp Business para rastrear mensajes y automatizar leads.',
      imageAlt:
        'Estación de operaciones WAppShot mostrando analítica de mensajes y conversaciones de la API de WhatsApp Business',
      fallbackTitle: 'Espacio de Operaciones WAppShot API',
      fallbackSubtitle: 'Telemetría de entrega en tiempo real y enrutamiento multi-agente.',
      kpis: [
        { metric: '99.94%', description: 'Seguimiento de entrega mediante webhooks de Meta Cloud' },
        { metric: '< 1.8s', description: 'Latencia de captura de lead y asignación al CRM' },
        { metric: 'Ilimitados', description: 'Agentes de ventas y soporte simultáneos en un número' },
        { metric: '0%', description: 'Dependencia de batería del móvil o sesiones QR' },
      ],
    },
    whatIsApi: {
      kicker: 'Infraestructura Oficial · Meta Cloud API',
      title: '¿Qué es la API de WhatsApp Business?',
      subtitle:
        'La API de WhatsApp Business es la interfaz empresarial de Meta diseñada para conectar WhatsApp directamente con sistemas de software. WAppShot convierte esa API oficial en una plataforma lista para rastrear mensajes y gestionar leads.',
      pillars: [
        {
          number: '01.',
          title: 'Protocolo en la Nube, No una App Móvil',
          body: 'A diferencia de WhatsApp Business App que funciona en un solo teléfono, la API Oficial opera directamente en los servidores de Meta Cloud. Tu número permanece en línea 24/7 sin fallos de batería, tarjetas SIM o desconexiones QR.',
        },
        {
          number: '02.',
          title: 'Webhooks de Seguimiento por Eventos',
          body: 'Cada campaña saliente y respuesta entrante genera eventos verificables —aceptado, enviado, entregado, leído y fallido— ofreciendo auditoría exacta de entrega y tiempos de respuesta.',
        },
        {
          number: '03.',
          title: 'Identidad Verificada y Escala Segura',
          body: 'Diseñada para empresas que superan el límite de 256 contactos. Envía plantillas aprobadas por Meta a miles de prospectos con consentimiento, protegiendo tu número y optando al Tick Verde oficial.',
        },
      ],
      imageAlt: 'Diagrama isométrico de nodos de enrutamiento de la API Oficial de WhatsApp Cloud',
      fallbackTitle: 'Capa de Enrutamiento Meta Cloud API',
      fallbackSubtitle: 'Ingesta directa de webhooks para seguimiento y sincronización CRM.',
      inspectorTitle: 'Vista Interactiva de Eventos Webhook',
      playFlow: 'Reproducir Flujo',
      pauseFlow: 'Pausar Flujo',
      eventSummaries: {
        sent: 'Enviado vía nodo Meta Cloud API con ID de seguimiento de plantilla',
        delivered: 'Recepción confirmada en el dispositivo del prospecto con marca horaria',
        read: 'El prospecto abrió el chat; temporizador SLA y atribución actualizados',
        qualified: 'Respuesta procesada, etiquetada y sincronizada con el pipeline del CRM',
      },
    },
    capabilities: {
      kicker: 'Capacidades de Plataforma · Operaciones Comerciales',
      title: '¿En qué puede ayudarte WAppShot?',
      walkthroughLink: 'Solicitar demostración en vivo',
      walkthroughGreeting:
        '¡Hola! Quiero ver una demostración de seguimiento de mensajes y automatización de leads en WAppShot.',
      card1Title: 'Seguimiento Integral de Mensajes',
      card1Body:
        'Conoce el estado exacto de cada interacción. WAppShot registra códigos de enviado, entregado, leído y error en una sola línea temporal, vinculando clics de anuncios Click-to-WhatsApp con ventas cerradas.',
      outboundTab: 'Campañas Salientes',
      inboundTab: 'Soporte Entrante',
      trackingMetrics: {
        outbound: [
          { label: 'Tasa de Entrega', value: '99.4%', detail: 'Confirmación verificada de operador' },
          { label: 'Tasa de Lectura', value: '74.2%', detail: 'Mediana de 3m 12s en abrir' },
          { label: 'Atribución de Clics', value: '31.8%', detail: 'Mapeado a campaña UTM' },
        ],
        inbound: [
          { label: 'Primera Respuesta SLA', value: '42s', detail: 'Enrutamiento automático' },
          { label: 'Leads Autocalificados', value: '86.5%', detail: 'Sincronizados antes del agente' },
          { label: 'Cobertura de Atención', value: '100%', detail: 'Cero conversaciones perdidas' },
        ],
      },
      card2Title: 'Captura y Calificación Automática de Leads',
      card2Body:
        'Deja de perder prospectos fuera de horario. WAppShot responde en menos de dos segundos, recopila nombre, presupuesto e intención mediante botones interactivos y puntúa cada contacto antes de asignarlo.',
      card2Rows: [
        { label: 'Captura de origen', value: 'Meta Ads · Web · QR' },
        { label: 'Lógica de asignación', value: 'Turnos y territorio' },
        { label: 'Seguimiento automático', value: 'Ventana de 24 horas' },
      ],
      card3Title: 'Bandeja Compartida Multi-Agente',
      card3Body:
        'Opera todo tu equipo comercial y de soporte bajo un solo número verificado. Asigna responsables, deja notas internas privadas, mide tiempos de respuesta y evita que dos agentes respondan al mismo lead.',
      card3Rows: [
        { label: 'Asientos del equipo', value: 'Agentes ilimitados' },
        { label: 'Control por agente', value: 'Reportes SLA individuales' },
        { label: 'Bloqueo de colisión', value: 'Control en tiempo real' },
      ],
      card4Title: 'Sincronización en Tiempo Real con CRM y Webhooks',
      card4Body:
        'Elimina las hojas de cálculo manuales. Cada lead calificado, historial de chat y recibo de entrega se sincroniza automáticamente con HubSpot, Salesforce, Pipedrive, Zoho, Google Sheets o tu propio endpoint REST.',
      card4Cols: [
        {
          label: 'Sincronización CRM',
          title: 'Etapas bidireccionales',
          detail: 'Dispara plantillas de WhatsApp cuando cambia una oportunidad en tu CRM.',
        },
        {
          label: 'Motor de Difusión',
          title: 'Envíos segmentados opt-in',
          detail: 'Mide entrega y tasa de respuesta por cada cohorte.',
        },
        {
          label: 'REST y Webhooks',
          title: 'Flujo JSON firmado',
          detail: 'Conecta confirmaciones de pedidos ERP y recordatorios de pago.',
        },
      ],
    },
    comparison: {
      kicker: 'Comparativa · App vs. API Oficial',
      title: 'WAppShot API Oficial vs. WhatsApp Business App',
      subtitle:
        'La aplicación gratuita WhatsApp Business App fue creada para comercios pequeños en un solo móvil. Descubre cómo WAppShot elimina límites de dispositivos y aporta métricas reales.',
      filters: {
        all: 'Todas las Funciones',
        tracking: 'Seguimiento',
        automation: 'Automatización',
        scale: 'Escala y Cumplimiento',
      },
      headers: {
        capability: 'Capacidad',
        businessApp: 'WhatsApp Business App (App Móvil Gratuita)',
        wappshotApi: 'WAppShot (API Oficial de WhatsApp Business)',
      },
      rows: [
        {
          feature: 'Seguimiento de Entrega y Lectura',
          category: 'tracking',
          businessApp: 'Solo revisión manual en el teléfono; sin registros exportables',
          wappshotApi: 'Webhooks en tiempo real de Enviado, Entregado, Leído y errores',
        },
        {
          feature: 'Captura de Leads y Sincronización CRM',
          category: 'automation',
          businessApp: 'Copiar y pegar manualmente desde el móvil hacia Excel o CRM',
          wappshotApi: 'Extracción instantánea, etiquetado y sincronización CRM bidireccional',
        },
        {
          feature: 'Atribución de Anuncios Click-to-WhatsApp',
          category: 'tracking',
          businessApp: 'Sin seguimiento UTM ni mapeo de conversión por conjunto de anuncios',
          wappshotApi: 'Atribución completa por anuncio, palabra clave e ingresos cerrados',
        },
        {
          feature: 'Bandeja de Equipo Multi-Agente',
          category: 'automation',
          businessApp: 'Limitada a 1 teléfono principal + 4 dispositivos sin reglas de reparto',
          wappshotApi: 'Agentes ilimitados en 1 número con reparto automático y SLA',
        },
        {
          feature: 'Dependencia de Teléfono y Batería',
          category: 'scale',
          businessApp: 'Exige el móvil principal encendido; el QR se desconecta con frecuencia',
          wappshotApi: '100% alojado en Meta Cloud; cero dependencia de móvil, SIM o QR',
        },
        {
          feature: 'Capacidad de Difusión Saliente',
          category: 'scale',
          businessApp: 'Límite estricto de 256 contactos y deben guardar tu número',
          wappshotApi: 'Difusiones ilimitadas con plantillas aprobadas por Meta',
        },
        {
          feature: 'Cumplimiento y Tick Verde Oficial',
          category: 'scale',
          businessApp: 'Alto riesgo de bloqueo por envíos masivos; sin insignia oficial',
          wappshotApi: 'Cumplimiento oficial de Meta Business y elegibilidad al Tick Verde',
        },
        {
          feature: 'Respuestas Automáticas y Calificación',
          category: 'automation',
          businessApp: 'Solo mensaje estático de ausencia sin lógica condicional',
          wappshotApi: 'Flujos interactivos con botones, listas y enrutamiento inteligente',
        },
      ],
    },
    faq: {
      kicker: 'Preguntas Frecuentes · API, Integración y Precios',
      title: 'Preguntas frecuentes',
      subtitle:
        'Respuestas claras sobre cómo migrar tu número actual, integrar tu CRM y entender las tarifas de conversación de Meta con WAppShot.',
      filters: {
        all: 'Todas',
        api: 'WhatsApp API',
        integration: 'Integración',
        pricing: 'Precios',
      },
      escalationPrompt: '¿Tienes una consulta específica sobre volumen o cumplimiento?',
      escalationLink: 'Pregúntanos directamente en WhatsApp',
      escalationGreeting:
        'Hola equipo de WAppShot, tengo una pregunta sobre la configuración y precios de la API de WhatsApp Business.',
      items: [
        {
          id: 'keep-number',
          category: 'api',
          categoryLabel: 'WhatsApp API',
          question: '¿Podemos conservar nuestro número actual al pasar a WAppShot?',
          answer:
            'Sí. Puedes migrar tu número actual de WhatsApp Business App directamente a la API Oficial a través de WAppShot, o conectar un número fijo, gratuito o móvil dedicado. Te guiamos en el registro integrado de 10 minutos con interrupción mínima.',
        },
        {
          id: 'anti-ban',
          category: 'api',
          categoryLabel: 'WhatsApp API',
          question: '¿La API Oficial protege nuestro número contra bloqueos en campañas?',
          answer:
            'Sí. Las herramientas no oficiales y los envíos masivos desde la app móvil suelen provocar bloqueos automáticos. WAppShot opera exclusivamente sobre la API Oficial de Meta Cloud con plantillas aprobadas y control de opt-in.',
        },
        {
          id: 'green-tick',
          category: 'api',
          categoryLabel: 'WhatsApp API',
          question: '¿Cómo funciona la verificación oficial del Tick Verde?',
          answer:
            'Solo las empresas en la API Oficial de WhatsApp Business pueden solicitar la insignia verificada (Tick Verde). Una vez verificado tu Meta Business Manager y activo tu perfil en WAppShot, nuestro equipo te ayuda a presentar la solicitud ante Meta.',
        },
        {
          id: 'setup-time',
          category: 'integration',
          categoryLabel: 'Integración',
          question: '¿Cuánto tarda conectar WAppShot y empezar a rastrear mensajes?',
          answer:
            'La mayoría de los equipos conectan su cuenta de Meta Business en 15 a 30 minutos mediante Embedded Signup y comienzan a rastrear mensajes al instante. La verificación completa de empresa en Meta suele completarse en 1 a 3 días hábiles.',
        },
        {
          id: 'crm-sync',
          category: 'integration',
          categoryLabel: 'Integración',
          question: '¿Con qué CRM y herramientas podemos integrar WAppShot?',
          answer:
            'WAppShot incluye conectores nativos para HubSpot, Salesforce, Pipedrive, Zoho CRM y Google Sheets, además de webhooks JSON firmados y API REST para sincronizar entregas, lecturas y atribución publicitaria.',
        },
        {
          id: 'multi-agent',
          category: 'integration',
          categoryLabel: 'Integración',
          question: '¿Pueden varios agentes de ventas y soporte usar el mismo número a la vez?',
          answer:
            'Sí. A diferencia de la app móvil que limita los dispositivos vinculados, WAppShot admite agentes ilimitados sobre un único número verificado con reparto automático de leads, notas internas y control de colisión.',
        },
        {
          id: 'pricing-structure',
          category: 'pricing',
          categoryLabel: 'Precios',
          question: '¿Cómo se separa la suscripción de WAppShot de las tarifas de Meta?',
          answer:
            'Tu suscripción en WAppShot cubre el acceso a la plataforma, asientos, conectores CRM y capacidad de webhooks con tarifa fija mensual o anual. Meta factura aparte los envíos mediante plantillas según la categoría y el país de destino.',
        },
        {
          id: 'service-window',
          category: 'pricing',
          categoryLabel: 'Precios',
          question: '¿Pagamos comisiones de Meta al responder a clientes que nos escriben?',
          answer:
            'Según las reglas vigentes de Meta Cloud API, las respuestas de atención dentro de la ventana de 24 horas iniciada por el cliente —y los chats originados en anuncios Click-to-WhatsApp— no generan costo por mensaje.',
        },
        {
          id: 'contracts',
          category: 'pricing',
          categoryLabel: 'Precios',
          question: '¿Existen contratos anuales forzosos o podemos ampliar asientos luego?',
          answer:
            'No exigimos permanencia anual. Puedes pagar mes a mes o elegir facturación anual para ahorrar 20%, sumando usuarios en Pro ($49/usuario/mes) o escalando a Enterprise cuando crezca tu operación.',
        },
      ],
    },
    proofCta: {
      kicker: 'Onboarding Directo · Chatea en Vivo por WhatsApp',
      title: '¿Listo para dar el salto a la API Oficial de WhatsApp Business?',
      subtitle:
        'Elige lo que deseas configurar, personaliza tu mensaje inicial e inicia una conversación real por WhatsApp con nuestro especialista.',
      topicPrompt: '1. Selecciona tu flujo prioritario',
      topics: [
        'Seguimiento y Analítica de Mensajes',
        'Gestión Automatizada de Leads',
        'Migrar desde WhatsApp Business App',
        'Integración CRM y Webhooks',
      ],
      previewLabel: 'Vista previa del mensaje en WhatsApp',
      buildPreviewMessage: (name, company, topic) =>
        `¡Hola! Soy ${name.trim() || 'un interesado en WAppShot'}${
          company.trim() ? ` de ${company.trim()}` : ''
        }. Quiero hablar sobre ${topic} usando la API Oficial de WhatsApp Business.`,
      primaryCta: 'Chatea Conmigo en WhatsApp',
      ctaHint: 'Abre WhatsApp con el tema seleccionado prellenado',
      formTitle: 'O solicita nuestra guía de migración',
      formSubtitle:
        'Déjanos tus datos para recibir la guía de verificación de Meta y un plan de implementación.',
      nameLabel: 'Tu Nombre',
      namePlaceholder: 'ej. Laura Gómez',
      companyLabel: 'Empresa (Opcional)',
      companyPlaceholder: 'ej. Logística Horizonte',
      emailLabel: 'Correo Corporativo',
      emailPlaceholder: 'laura@empresa.com',
      sendViaWhatsAppCta: 'Enviar Datos por WhatsApp',
      whatsappConfirmationCta: 'Enviar También por WhatsApp',
      buildChecklistWhatsAppMessage: (name, company, email, topic) =>
        `¡Hola WAppShot! Solicito la guía de migración a la API Oficial de WhatsApp Business.\nNombre: ${
          name.trim() || 'No especificado'
        }${company.trim() ? `\nEmpresa: ${company.trim()}` : ''}${
          email.trim() ? `\nCorreo: ${email.trim()}` : ''
        }\nTema prioritario: ${topic}`,
      errorMissingName: 'Por favor ingresa tu nombre para poder dirigirnos a ti.',
      errorInvalidEmail: 'Por favor ingresa un correo corporativo válido.',
      submittedTitle: (name) => `Solicitud recibida para ${name}`,
      submittedBodyBeforeEmail: 'Enviamos la guía de implementación de WAppShot API a ',
      submittedBodyAfterEmail:
        '. También puedes enviar una copia directa a nuestro equipo por WhatsApp abajo.',
      submitAnother: 'Enviar otra consulta',
    },
    footer: {
      byText: 'por',
      brandBy: 'Vibe Hub',
      tagline:
        'API Oficial de WhatsApp Business para seguimiento de mensajes y gestión automatizada de leads.',
      rights: 'WAppShot. Todos los derechos reservados.',
    },
    floatingChat: {
      label: 'Chatea con nosotros',
      greeting:
        '¡Hola equipo de WAppShot! Estoy visitando su sitio y me gustaría chatear sobre la API Oficial de WhatsApp Business.',
      ariaLabel: 'Chatea con nosotros en WhatsApp',
    },
    trust: {
      gdpr: 'Cumple con GDPR',
      iso: 'ISO 27001',
      securityLabel: 'Seguridad y Cumplimiento Empresarial',
    },
  },

  ar: {
    seo: {
      title: 'WAppShot – واجهة واتساب للأعمال الرسمية وتتبع العملاء',
      description:
        'تتبّع كل رسالة واتساب، وأتمت تأهيل العملاء المحتملين، واربط نظام CRM مع WAppShot عبر واجهة برمجة تطبيقات واتساب للأعمال الرسمية. تواصل معنا اليوم.',
    },
    nav: {
      capabilities: 'الإمكانيات',
      compare: 'المقارنة',
      pricing: 'الأسعار',
      faq: 'الأسئلة الشائعة',
      contact: 'تواصل معنا',
      chatCta: 'تواصل عبر واتساب',
      chatGreeting:
        'مرحباً فريق WAppShot، أود معرفة المزيد عن تتبع الرسائل وأتمتة إدارة العملاء عبر واجهة واتساب للأعمال الرسمية.',
      languageAria: 'اختر اللغة',
      openMenuAria: 'فتح قائمة التنقل',
      closeMenuAria: 'إغلاق قائمة التنقل',
      toggleThemeToDarkAria: 'التبديل إلى الوضع الداكن',
      toggleThemeToLightAria: 'التبديل إلى الوضع الفاتح',
    },
    hero: {
      kickerParts: ['واجهة Meta السحابية الرسمية', 'تتبع الرسائل', 'إدارة العملاء تلقائياً'],
      headline: 'تتبّع كل رسالة واتساب وأتمت إدارة كل عميل محتمل.',
      subheadline:
        'يربط WAppShot نشاطك التجاري مباشرة بواجهة واتساب للأعمال الرسمية (WhatsApp Business API). راقب حالات التسليم والقراءة لحظياً، ووزّع العملاء المحتملين تلقائياً على فريق المبيعات، وزامن كل محادثة مع نظام CRM دون الاعتماد على هاتف متصل.',
      primaryCta: 'تحدث معي عبر واتساب',
      secondaryCta: 'المقارنة مع تطبيق الأعمال',
      heroChatGreeting:
        'مرحباً! اطلعت على WAppShot وأرغب في البدء باستخدام واجهة واتساب للأعمال الرسمية لتتبع الرسائل وأتمتة العملاء.',
      imageAlt:
        'مساحة عمل WAppShot تعرض تحليلات رسائل واجهة واتساب للأعمال الرسمية وسلاسل المحادثات',
      fallbackTitle: 'مساحة تحكم WAppShot API',
      fallbackSubtitle: 'تتبع فوري لحالات التسليم وتوزيع المحادثات على الفريق.',
      kpis: [
        { metric: '99.94%', description: 'دقة تتبع تسليم الرسائل عبر إشعارات Meta Cloud' },
        { metric: '< 1.8s', description: 'سرعة التقاط العميل وتعيينه في نظام CRM' },
        { metric: 'غير محدود', description: 'عدد موظفي المبيعات والدعم على رقم واحد' },
        { metric: '0%', description: 'اعتماد على بطارية الهاتف أو جلسات QR' },
      ],
    },
    whatIsApi: {
      kicker: 'البنية التحتية الرسمية · Meta Cloud API',
      title: 'ما هي واجهة برمجة تطبيقات واتساب للأعمال (API)؟',
      subtitle:
        'واجهة WhatsApp Business API هي المنصة البرمجية الرسمية من Meta المصممة لربط واتساب مباشرة بأنظمة الشركات. يقدّم لك WAppShot هذه الواجهة الرسمية جاهزة لتتبع الرسائل وإدارة العملاء المحتملين.',
      pillars: [
        {
          number: '01.',
          title: 'بروتوكول سحابي بالكامل، وليس تطبيق هاتف',
          body: 'على عكس تطبيق WhatsApp Business المجاني الذي يعمل من هاتف واحد، تعمل الواجهة الرسمية مباشرة على خوادم Meta السحابية. يظل رقم شركتك متصلاً على مدار الساعة دون انقطاع بطارية أو شريحة SIM أو فصل QR.',
        },
        {
          number: '02.',
          title: 'تتبع دقيق لكل رسالة عبر Webhooks',
          body: 'كل حملة صادرة وكل رد وارد يولّد حدثاً موثقاً —مقبول، مرسل، مستلم، مقروء، أو متعذر— ليحصل فريقك على سجل تدقيق واضح ومؤشرات سرعة الاستجابة SLA.',
        },
        {
          number: '03.',
          title: 'هوية موثقة وتوسع آمن دون حظر',
          body: 'مصممة للشركات التي تتجاوز حدود 256 جهة اتصال. أرسل قوالب معتمدة من Meta لآلاف العملاء المشتركين مع حماية سمعة الرقم والتأهل للحصول على علامة التوثيق الخضراء الرسمية.',
        },
      ],
      imageAlt: 'رسم معماري لعقد التوجيه السحابية في واجهة واتساب الرسمية',
      fallbackTitle: 'طبقة توجيه Meta Cloud API',
      fallbackSubtitle: 'استقبال مباشر لأحداث Webhooks ومزامنة نظام CRM.',
      inspectorTitle: 'معاينة تفاعلية لأحداث Webhook',
      playFlow: 'تشغيل التدفق',
      pauseFlow: 'إيقاف التدفق',
      eventSummaries: {
        sent: 'تم الإرسال عبر خادم Meta Cloud API مع معرف تتبع القالب',
        delivered: 'تم تأكيد الاستلام على جهاز العميل مع الطابع الزمني للشبكة',
        read: 'فتح العميل المحادثة؛ تم تحديث مؤقت الاستجابة ونسبة التفاعل',
        qualified: 'تم تحليل رد العميل وتصنيفه ومزامنته مع مسار المبيعات في CRM',
      },
    },
    capabilities: {
      kicker: 'قدرات المنصة · عمليات الإيرادات',
      title: 'بماذا يساعدك WAppShot؟',
      walkthroughLink: 'اطلب جولة مباشرة',
      walkthroughGreeting:
        'مرحباً! أود رؤية عرض توضيحي مباشر لتتبع الرسائل وأتمتة العملاء في WAppShot.',
      card1Title: 'تتبع شامل للرسائل من الإرسال حتى التحويل',
      card1Body:
        'اعرف الحالة الدقيقة لكل رسالة. يسجل WAppShot حالات الإرسال والتسليم والقراءة وأسباب الفشل في سجل موحد، ويربط نقرات إعلانات Click-to-WhatsApp بالصفقات المغلقة مباشرة.',
      outboundTab: 'الحملات الصادرة',
      inboundTab: 'الدعم الوارد',
      trackingMetrics: {
        outbound: [
          { label: 'نسبة التسليم', value: '99.4%', detail: 'تأكيد موثق من المزود' },
          { label: 'نسبة قراءة القوالب', value: '74.2%', detail: 'متوسط الفتح 3د 12ث' },
          { label: 'تتبع نقرات الأزرار', value: '31.8%', detail: 'مربوط بحملات UTM' },
        ],
        inbound: [
          { label: 'زمن الاستجابة الأولى', value: '42s', detail: 'توجيه تلقائي للطابور' },
          { label: 'العملاء المؤهلون آلياً', value: '86.5%', detail: 'مزامنة قبل استلام الموظف' },
          { label: 'تغطية المحادثات', value: '100%', detail: 'صفر رسائل مهملة' },
        ],
      },
      card2Title: 'التقاط وتأهيل العملاء المحتملين تلقائياً',
      card2Body:
        'لا تخسر أي عميل خارج ساعات الدوام. يرحب WAppShot بالعملاء خلال ثانيتين، ويجمع الاسم والميزانية والخدمة المطلوبة عبر أزرار تفاعلية، ثم يصنّف العميل قبل تحويله لمندوب المبيعات.',
      card2Rows: [
        { label: 'مصدر العميل', value: 'إعلانات Meta · الويب · QR' },
        { label: 'منطق التوزيع', value: 'توزيع دوري وحسب المنطقة' },
        { label: 'المتابعة الآلية', value: 'نافذة 24 ساعة تلقائية' },
      ],
      card3Title: 'صندوق وارد مشترك لعدة موظفين',
      card3Body:
        'أدر فريق المبيعات والدعم بالكامل على رقم واتساب موثق واحد. وزّع المسؤوليات، وأضف ملاحظات داخلية خاصة، وراقب أداء كل موظف، وامنع رد موظفين على نفس العميل في وقت واحد.',
      card3Rows: [
        { label: 'مقاعد الفريق', value: 'موظفون غير محدودين' },
        { label: 'قياس الأداء', value: 'تقارير SLA لكل مندوب' },
        { label: 'منع التعارض', value: 'قفل فوري للمحادثة' },
      ],
      card4Title: 'مزامنة فورية مع أنظمة CRM و Webhooks',
      card4Body:
        'تخلص من تحديث جداول البيانات يدوياً. كل عميل مؤهل ونص محادثة وإيصال تسليم يتزامن تلقائياً مع HubSpot و Salesforce و Pipedrive و Zoho و Google Sheets أو واجهة REST الخاصة بك.',
      card4Cols: [
        {
          label: 'مزامنة الصفقات',
          title: 'تحديث ثنائي الاتجاه',
          detail: 'أطلق قوالب واتساب تلقائياً عند تغير مرحلة الصفقة في CRM.',
        },
        {
          label: 'محرك البث',
          title: 'حملات موجهة بموافقة مسبقة',
          detail: 'تتبّع نسب التسليم والردود لكل شريحة عملاء.',
        },
        {
          label: 'REST و Webhooks',
          title: 'تدفق بيانات JSON موقّع',
          detail: 'اربط تأكيدات طلبات المتاجر وتنبيهات الدفع بسهولة.',
        },
      ],
    },
    comparison: {
      kicker: 'مقارنة المزايا · التطبيق العادي مقابل الـ API الرسمي',
      title: 'WAppShot الرسمي مقابل تطبيق WhatsApp Business',
      subtitle:
        'صُمم تطبيق WhatsApp Business المجاني للمتاجر الفردية على هاتف واحد. اكتشف كيف يزيل WAppShot قيود الأجهزة ويمنح فرق المبيعات تتبعاً فعلياً.',
      filters: {
        all: 'كل المزايا',
        tracking: 'تتبع الرسائل',
        automation: 'أتمتة العملاء',
        scale: 'التوسع والامتثال',
      },
      headers: {
        capability: 'الميزة',
        businessApp: 'تطبيق WhatsApp Business (تطبيق الجوال المجاني)',
        wappshotApi: 'WAppShot (واجهة واتساب للأعمال الرسمية API)',
      },
      rows: [
        {
          feature: 'تتبع التسليم والقراءة لكل رسالة',
          category: 'tracking',
          businessApp: 'فحص يدوي من الهاتف فقط دون سجلات قابلة للتصدير',
          wappshotApi: 'إشعارات فورية للإرسال والتسليم والقراءة وأكواد الأخطاء',
        },
        {
          feature: 'التقاط العملاء والمزامنة مع CRM',
          category: 'automation',
          businessApp: 'نسخ ولصق يدوي من الجوال إلى الجداول أو الـ CRM',
          wappshotApi: 'استخراج فوري للبيانات وتصنيف ومزامنة ثنائية مع CRM',
        },
        {
          feature: 'قياس نتائج إعلانات Click-to-WhatsApp',
          category: 'tracking',
          businessApp: 'لا يوجد تتبع UTM أو ربط مباشر بحملات الإعلانات',
          wappshotApi: 'ربط كامل لكل عميل بالحملة الإعلانية والمبيعات الفعلية',
        },
        {
          feature: 'صندوق مشترك لفرق العمل',
          category: 'automation',
          businessApp: 'محدود بهاتف رئيسي + 4 أجهزة دون قواعد توزيع',
          wappshotApi: 'عدد غير محدود من الموظفين على رقم واحد مع توزيع دوري',
        },
        {
          feature: 'الاعتماد على الهاتف والبطارية',
          category: 'scale',
          businessApp: 'يتطلب بقاء الهاتف متصلاً وتنقطع جلسات QR باستمرار',
          wappshotApi: 'استضافة سحابية 100% عبر Meta دون أي اعتماد على هاتف',
        },
        {
          feature: 'سعة الرسائل الجماعية (Broadcast)',
          category: 'scale',
          businessApp: 'بحد أقصى 256 جهة اتصال وبشرط حفظهم لرقمك مسبقاً',
          wappshotApi: 'إرسال غير محدود للمشتركين عبر قوالب Meta المعتمدة',
        },
        {
          feature: 'حماية الرقم والعلامة الخضراء',
          category: 'scale',
          businessApp: 'خطر مرتفع لحظر الرقم عند الإرسال المكثف ودون توثيق',
          wappshotApi: 'امتثال رسمي لسياسات Meta وتأهيل لعلامة التوثيق الخضراء',
        },
        {
          feature: 'الردود الآلية ومسارات التأهيل',
          category: 'automation',
          businessApp: 'رسالة ترحيب أو غياب ثابتة فقط دون مسارات ذكية',
          wappshotApi: 'تدفقات تفاعلية بأزرار وقوائم مع توجيه شرطي ذكي',
        },
      ],
    },
    faq: {
      kicker: 'الأسئلة الشائعة · الواجهة والربط والتسعير',
      title: 'الأسئلة الشائعة',
      subtitle:
        'إجابات واضحة حول نقل رقمك الحالي، والربط مع أنظمة CRM، وآلية تسعير محادثات Meta مع WAppShot.',
      filters: {
        all: 'كل الأسئلة',
        api: 'WhatsApp API',
        integration: 'الربط والتكامل',
        pricing: 'التسعير',
      },
      escalationPrompt: 'هل لديك استفسار خاص حول الامتثال أو حجم الإرسال؟',
      escalationLink: 'اسألنا مباشرة عبر واتساب',
      escalationGreeting:
        'مرحباً فريق WAppShot، لدي سؤال حول إعداد وتسعير واجهة واتساب للأعمال لفريقي.',
      items: [
        {
          id: 'keep-number',
          category: 'api',
          categoryLabel: 'WhatsApp API',
          question: 'هل يمكننا الاحتفاظ برقم العمل الحالي عند الانتقال إلى WAppShot؟',
          answer:
            'نعم. يمكنك ترحيل رقم تطبيق WhatsApp Business الحالي مباشرة إلى الواجهة الرسمية عبر WAppShot، أو ربط خط أرضي أو رقم موحد أو جوال مخصص. نرافقك في خطوة التسجيل السريع خلال 10 دقائق بأقل توقف ممكن.',
        },
        {
          id: 'anti-ban',
          category: 'api',
          categoryLabel: 'WhatsApp API',
          question: 'هل يحمي استخدام الـ API الرسمي رقمنا من الحظر أثناء الحملات؟',
          answer:
            'نعم. أدوات الإرسال غير الرسمية والحملات المكثفة من التطبيق المجاني تؤدي غالباً إلى حظر الرقم. يعمل WAppShot حصرياً عبر واجهة Meta السحابية الرسمية باستخدام قوالب معتمدة وتوثيق موافقة العملاء.',
        },
        {
          id: 'green-tick',
          category: 'api',
          categoryLabel: 'WhatsApp API',
          question: 'كيف نحصل على علامة التوثيق الخضراء الرسمية في واتساب؟',
          answer:
            'فقط الشركات المسجلة في WhatsApp Business API الرسمي مؤهلة لطلب الشارة الخضراء. بمجرد توثيق حساب Meta Business Manager وتفعيل ملفك في WAppShot، يساعدك فريقنا في تجهيز وتقديم طلب التوثيق الرسمي لـ Meta.',
        },
        {
          id: 'setup-time',
          category: 'integration',
          categoryLabel: 'الربط والتكامل',
          question: 'كم من الوقت يستغرق ربط WAppShot والبدء بتتبع الرسائل؟',
          answer:
            'تربط معظم الفرق حساب Meta Business وتبدأ تتبع الرسائل خلال 15 إلى 30 دقيقة عبر التسجيل المدمج (Embedded Signup). كما يكتمل توثيق النشاط التجاري في Meta لرفع حدود الإرسال خلال 1 إلى 3 أيام عمل.',
        },
        {
          id: 'crm-sync',
          category: 'integration',
          categoryLabel: 'الربط والتكامل',
          question: 'ما أنظمة CRM والأدوات التي يمكن ربطها مع WAppShot؟',
          answer:
            'يوفر WAppShot ربطاً جاهزاً مع HubSpot و Salesforce و Pipedrive و Zoho CRM و Google Sheets، بالإضافة إلى Webhooks موقّعة و REST API لمزامنة حالات التسليم والقراءة ومصادر الإعلانات تلقائياً.',
        },
        {
          id: 'multi-agent',
          category: 'integration',
          categoryLabel: 'الربط والتكامل',
          question: 'هل يستطيع عدة موظفي مبيعات ودعم استخدام نفس الرقم في آنٍ واحد؟',
          answer:
            'نعم. بخلاف تطبيق الهاتف المحدود بعدد قليل من الأجهزة، يدعم WAppShot عدداً غير محدود من الموظفين على رقم موثق واحد مع توزيع تلقائي للعملاء وملاحظات داخلية ومنع تداخل الردود.',
        },
        {
          id: 'pricing-structure',
          category: 'pricing',
          categoryLabel: 'التسعير',
          question: 'كيف ينفصل اشتراك WAppShot عن رسوم قوالب Meta الرسمية؟',
          answer:
            'يغطي اشتراك WAppShot مساحة العمل والمقاعد وربط أنظمة CRM وحجم الـ Webhooks برسم شهري أو سنوي ثابت، بينما تُحتسب رسوم قوالب Meta بشكل منفصل حسب فئة الرسالة ودولة المستلم.',
        },
        {
          id: 'service-window',
          category: 'pricing',
          categoryLabel: 'التسعير',
          question: 'هل ندفع رسوماً لـ Meta عند الرد على العملاء الذين يراسلوننا؟',
          answer:
            'وفق قواعد Meta Cloud API الحالية، فإن الردود المباشرة خلال نافذة الـ 24 ساعة التي يفتحها العميل —وكذلك المحادثات القادمة من إعلانات Click-to-WhatsApp— لا تترتب عليها رسوم لكل رسالة.',
        },
        {
          id: 'contracts',
          category: 'pricing',
          categoryLabel: 'التسعير',
          question: 'هل العقود السنوية إلزامية أم يمكننا ترقية المقاعد لاحقاً؟',
          answer:
            'لا توجد عقود إلزامية؛ يمكنك البدء بالاشتراك الشهري أو توفير 20% بالاشتراك السنوي، مع إمكانية إضافة مقاعد لباقة Pro ($49/مستخدم/شهر) أو الترقية إلى Enterprise في أي وقت.',
        },
      ],
    },
    proofCta: {
      kicker: 'تفعيل مباشر · تواصل الآن عبر واتساب',
      title: 'هل أنت مستعد للانتقال إلى واجهة واتساب للأعمال الرسمية؟',
      subtitle:
        'اختر المسار الذي تريد تفعيله، وخصص رسالتك التمهيدية، وابدأ محادثة واتساب مباشرة مع مختص التفعيل لدينا.',
      topicPrompt: '1. اختر أولوية عملك',
      topics: [
        'تتبع وتحليل الرسائل',
        'أتمتة إدارة العملاء',
        'الانتقال من تطبيق الأعمال المجاني',
        'ربط CRM و Webhooks',
      ],
      previewLabel: 'معاينة رسالة واتساب الجاهزة',
      buildPreviewMessage: (name, company, topic) =>
        `مرحباً! أنا ${name.trim() || 'مهتم بمنصة WAppShot'}${
          company.trim() ? ` من شركة ${company.trim()}` : ''
        }. أود مناقشة ${topic} باستخدام واجهة واتساب للأعمال الرسمية.`,
      primaryCta: 'تحدث معي عبر واتساب',
      ctaHint: 'يفتح تطبيق واتساب مع تعبئة الموضوع المختار تلقائياً',
      formTitle: 'أو اطلب قائمة خطوات التفعيل',
      formSubtitle:
        'اترك بياناتك لتصلك خطوات توثيق Meta وخطة إعداد WAppShot المخصصة لنشاطك.',
      nameLabel: 'الاسم الكامل',
      namePlaceholder: 'مثال: سارة أحمد',
      companyLabel: 'اسم الشركة (اختياري)',
      companyPlaceholder: 'مثال: الأفق للخدمات اللوجستية',
      emailLabel: 'البريد الإلكتروني للعمل',
      emailPlaceholder: 'sara@company.com',
      sendViaWhatsAppCta: 'إرسال البيانات عبر واتساب',
      whatsappConfirmationCta: 'إرسال نسخة عبر واتساب أيضاً',
      buildChecklistWhatsAppMessage: (name, company, email, topic) =>
        `مرحباً WAppShot! أرغب في الحصول على قائمة خطوات الانتقال إلى واجهة واتساب للأعمال الرسمية.\nالاسم: ${
          name.trim() || 'غير محدد'
        }${company.trim() ? `\nالشركة: ${company.trim()}` : ''}${
          email.trim() ? `\nالبريد الإلكتروني: ${email.trim()}` : ''
        }\nالأولوية: ${topic}`,
      errorMissingName: 'يرجى إدخال اسمك لنتمكن من مخاطبتك بشكل صحيح.',
      errorInvalidEmail: 'يرجى إدخال بريد إلكتروني صحيح للعمل.',
      submittedTitle: (name) => `تم استلام طلبك بنجاح يا ${name}`,
      submittedBodyBeforeEmail: 'أرسلنا دليل إعداد WAppShot API إلى ',
      submittedBodyAfterEmail:
        '. يمكنك أيضاً إرسال نسخة مباشرة لفريقنا عبر واتساب أدناه.',
      submitAnother: 'إرسال استفسار آخر',
    },
    footer: {
      byText: 'من',
      brandBy: 'Vibe Hub',
      tagline: 'واجهة واتساب للأعمال الرسمية لتتبع الرسائل وأتمتة إدارة العملاء المحتملين.',
      rights: 'WAppShot. جميع الحقوق محفوظة.',
    },
    floatingChat: {
      label: 'تحدث معنا',
      greeting:
        'مرحباً فريق WAppShot! أتصفح موقعكم الآن وأرغب في التحدث حول واجهة واتساب للأعمال الرسمية.',
      ariaLabel: 'تحدث معنا عبر واتساب',
    },
    trust: {
      gdpr: 'متوافق مع GDPR',
      iso: 'ISO 27001',
      securityLabel: 'أمان وامتثال بمستوى المؤسسات',
    },
  },

  it: {
    seo: {
      title: 'WAppShot – API Ufficiale WhatsApp Business e Lead Tracking',
      description:
        'Traccia ogni messaggio WhatsApp, automatizza la qualificazione dei lead e sincronizza il tuo CRM con WAppShot tramite API Ufficiale WhatsApp Business.',
    },
    nav: {
      capabilities: 'Funzionalità',
      compare: 'Confronto',
      pricing: 'Prezzi',
      faq: 'FAQ',
      contact: 'Contatti',
      chatCta: 'Chatta su WhatsApp',
      chatGreeting:
        'Ciao team WAppShot, vorrei saperne di più sul tracciamento messaggi e l’automazione dei lead con l’API Ufficiale di WhatsApp Business.',
      languageAria: 'Seleziona lingua',
      openMenuAria: 'Apri menu di navigazione',
      closeMenuAria: 'Chiudi menu di navigazione',
      toggleThemeToDarkAria: 'Passa alla modalità scura',
      toggleThemeToLightAria: 'Passa alla modalità chiara',
    },
    hero: {
      kickerParts: [
        'API Ufficiale Meta Cloud',
        'Tracciamento Messaggi',
        'Gestione Lead Automatizzata',
      ],
      headline: 'Traccia ogni messaggio WhatsApp e automatizza ogni lead.',
      subheadline:
        'WAppShot collega la tua azienda direttamente all’API Ufficiale di WhatsApp Business. Monitora conferme di consegna e lettura in tempo reale, assegna i contatti al team vendite in automatico e sincronizza ogni chat con il CRM—senza dipendere da uno smartphone.',
      primaryCta: 'Chatta con Me su WhatsApp',
      secondaryCta: 'Confronta con Business App',
      heroChatGreeting:
        'Ciao! Ho visto WAppShot e vorrei attivare l’API Ufficiale di WhatsApp Business per tracciamento messaggi e gestione lead.',
      imageAlt:
        'Postazione operativa WAppShot con analisi dei messaggi e flussi conversazione API WhatsApp Business',
      fallbackTitle: 'Area Operativa WAppShot API',
      fallbackSubtitle: 'Telemetria di consegna in tempo reale e instradamento multi-agente.',
      kpis: [
        { metric: '99.94%', description: 'Tracciamento consegne tramite webhook Meta Cloud' },
        { metric: '< 1.8s', description: 'Latenza dall’acquisizione lead all’assegnazione CRM' },
        { metric: 'Illimitati', description: 'Operatori vendite e supporto simultanei su un numero' },
        { metric: '0%', description: 'Dipendenza da batteria smartphone o sessioni QR' },
      ],
    },
    whatIsApi: {
      kicker: 'Infrastruttura Ufficiale · Meta Cloud API',
      title: 'Cos’è l’API di WhatsApp Business?',
      subtitle:
        'La WhatsApp Business API è l’interfaccia aziendale di Meta progettata per collegare WhatsApp direttamente ai software aziendali. WAppShot trasforma quell’API ufficiale in una piattaforma pronta per tracciamento e automazione lead.',
      pillars: [
        {
          number: '01.',
          title: 'Protocollo in Cloud, Non un’App Mobile',
          body: 'A differenza dell’app gratuita WhatsApp Business che gira su un singolo telefono, l’API Ufficiale opera direttamente sui server Meta Cloud. Il tuo numero aziendale resta online 24/7 senza problemi di batteria, SIM o disconnessioni QR.',
        },
        {
          number: '02.',
          title: 'Webhook di Tracciamento Basati su Eventi',
          body: 'Ogni campagna in uscita e ogni risposta in entrata genera eventi verificabili—accettato, inviato, consegnato, letto ed eventuale errore—offrendo al team report precisi su consegna e tempi di risposta SLA.',
        },
        {
          number: '03.',
          title: 'Identità Verificata e Scala Conforme',
          body: 'Pensata per aziende che superano il limite dei 256 contatti broadcast. Invia template approvati da Meta a migliaia di lead con consenso opt-in, proteggendo la reputazione del numero e candidandoti alla Spunta Verde ufficiale.',
        },
      ],
      imageAlt: 'Schema architettonico isometrico dei nodi di instradamento WhatsApp Cloud API',
      fallbackTitle: 'Livello di Routing Meta Cloud API',
      fallbackSubtitle: 'Acquisizione diretta webhook per tracciamento e sync CRM.',
      inspectorTitle: 'Anteprima Interattiva Eventi Webhook',
      playFlow: 'Avvia Flusso',
      pauseFlow: 'Pausa Flusso',
      eventSummaries: {
        sent: 'Inviato tramite nodo Meta Cloud API con ID di tracciamento template',
        delivered: 'Ricezione confermata sul dispositivo del contatto con timestamp operatore',
        read: 'Il contatto ha aperto la chat; timer SLA e attribuzione aggiornati',
        qualified: 'Risposta analizzata, etichettata e sincronizzata nella pipeline CRM',
      },
    },
    capabilities: {
      kicker: 'Funzionalità della Piattaforma · Revenue Operations',
      title: 'In cosa può aiutarti WAppShot?',
      walkthroughLink: 'Richiedi una demo dal vivo',
      walkthroughGreeting:
        'Ciao! Vorrei vedere una demo dal vivo del tracciamento messaggi e automazione lead su WAppShot.',
      card1Title: 'Tracciamento Messaggi End-to-End',
      card1Body:
        'Conosci lo stato esatto di ogni interazione. WAppShot registra invio, consegna, lettura e codici di errore in un’unica cronologia verificabile e collega i clic dagli annunci Click-to-WhatsApp alle vendite chiuse.',
      outboundTab: 'Campagne Outbound',
      inboundTab: 'Supporto Inbound',
      trackingMetrics: {
        outbound: [
          { label: 'Tasso di Consegna', value: '99.4%', detail: 'Conferma verificata operatore' },
          { label: 'Tasso di Lettura', value: '74.2%', detail: 'Mediana 3m 12s all’apertura' },
          { label: 'Attribuzione Clic CTA', value: '31.8%', detail: 'Collegata a campagna UTM' },
        ],
        inbound: [
          { label: 'SLA Prima Risposta', value: '42s', detail: 'Smistamento automatico coda' },
          { label: 'Lead Auto-Qualificati', value: '86.5%', detail: 'Sincronizzati prima dell’agente' },
          { label: 'Copertura Richieste', value: '100%', detail: 'Zero conversazioni perse' },
        ],
      },
      card2Title: 'Acquisizione e Qualificazione Automatica Lead',
      card2Body:
        'Smetti di perdere contatti fuori orario. WAppShot risponde entro due secondi, raccoglie nome, budget e interesse tramite pulsanti interattivi e assegna un punteggio prima dell’intervento umano.',
      card2Rows: [
        { label: 'Acquisizione fonte', value: 'Meta Ads · Web · QR' },
        { label: 'Logica di assegnazione', value: 'Round-robin e area' },
        { label: 'Follow-up automatico', value: 'Finestra 24 ore' },
      ],
      card3Title: 'Inbox Condivisa Multi-Agente',
      card3Body:
        'Gestisci l’intero reparto vendite e assistenza su un unico numero WhatsApp verificato. Assegna responsabili, aggiungi note interne private, monitora gli SLA e previeni risposte doppie sullo stesso lead.',
      card3Rows: [
        { label: 'Postazioni team', value: 'Agenti illimitati' },
        { label: 'Responsabilità agente', value: 'Report SLA per operatore' },
        { label: 'Blocco collisioni', value: 'Lock in tempo reale' },
      ],
      card4Title: 'Sincronizzazione CRM, Ordini e Webhook in Tempo Reale',
      card4Body:
        'Elimina gli aggiornamenti manuali su fogli di calcolo. Ogni lead qualificato, trascrizione e ricevuta di consegna si sincronizza automaticamente con HubSpot, Salesforce, Pipedrive, Zoho, Google Sheets o il tuo endpoint REST.',
      card4Cols: [
        {
          label: 'Sync Pipeline',
          title: 'Fasi trattativa bidirezionali',
          detail: 'Attiva template WhatsApp quando un deal cambia fase nel CRM.',
        },
        {
          label: 'Motore Broadcast',
          title: 'Invii segmentati opt-in',
          detail: 'Monitora consegna e tasso di risposta per ogni segmento.',
        },
        {
          label: 'REST & Webhook',
          title: 'Stream JSON firmato',
          detail: 'Collega conferme ordine ERP e promemoria di pagamento.',
        },
      ],
    },
    comparison: {
      kicker: 'Confronto Funzionalità · App vs. API Ufficiale',
      title: 'WAppShot API Ufficiale vs. WhatsApp Business App',
      subtitle:
        'L’app gratuita WhatsApp Business nasce per piccole attività su un solo smartphone. Scopri come WAppShot elimina i limiti di dispositivo e porta misurazione reale alle vendite.',
      filters: {
        all: 'Tutte le Funzioni',
        tracking: 'Tracciamento Messaggi',
        automation: 'Automazione Lead',
        scale: 'Scala e Conformità',
      },
      headers: {
        capability: 'Funzionalità',
        businessApp: 'WhatsApp Business App (App Mobile Gratuita)',
        wappshotApi: 'WAppShot (API Ufficiale WhatsApp Business)',
      },
      rows: [
        {
          feature: 'Tracciamento Consegna e Lettura',
          category: 'tracking',
          businessApp: 'Solo controllo manuale sul telefono; nessun log esportabile',
          wappshotApi: 'Webhook in tempo reale su Inviato, Consegnato, Letto ed errori',
        },
        {
          feature: 'Acquisizione Lead e Sync CRM',
          category: 'automation',
          businessApp: 'Copia-incolla manuale dalle chat verso fogli di calcolo o CRM',
          wappshotApi: 'Estrazione immediata, tag intenti e sync bidirezionale con CRM',
        },
        {
          feature: 'Attribuzione Annunci Click-to-WhatsApp',
          category: 'tracking',
          businessApp: 'Nessun tracciamento UTM né mappatura conversioni Meta Ads',
          wappshotApi: 'Attribuzione completa per inserzione, parola chiave e fatturato',
        },
        {
          feature: 'Inbox Condivisa Multi-Agente',
          category: 'automation',
          businessApp: 'Limite di 1 telefono principale + 4 dispositivi senza regole',
          wappshotApi: 'Postazioni illimitate su 1 numero con routing e timer SLA',
        },
        {
          feature: 'Dipendenza da Telefono e Batteria',
          category: 'scale',
          businessApp: 'Richiede telefono principale acceso; le sessioni QR si scollegano',
          wappshotApi: '100% su Meta Cloud; zero dipendenza da smartphone, SIM o QR',
        },
        {
          feature: 'Capacità di Invio Broadcast',
          category: 'scale',
          businessApp: 'Limite massimo di 256 contatti con numero salvato in rubrica',
          wappshotApi: 'Invii opt-in illimitati tramite template approvati da Meta',
        },
        {
          feature: 'Conformità Account e Spunta Verde',
          category: 'scale',
          businessApp: 'Alto rischio di blocco numero su volumi elevati; nessun badge',
          wappshotApi: 'Conformità ufficiale Meta Business ed idoneità alla Spunta Verde',
        },
        {
          feature: 'Risposte Automatiche e Flussi Lead',
          category: 'automation',
          businessApp: 'Solo messaggio statico di assenza senza logica condizionale',
          wappshotApi: 'Flussi interattivi con pulsanti, liste e routing condizionale',
        },
      ],
    },
    faq: {
      kicker: 'Domande Frequenti · API, Integrazione e Prezzi',
      title: 'Domande frequenti',
      subtitle:
        'Risposte chiare sulla migrazione del tuo numero attuale, sull’integrazione CRM e sui costi delle conversazioni Meta con WAppShot.',
      filters: {
        all: 'Tutte',
        api: 'WhatsApp API',
        integration: 'Integrazione',
        pricing: 'Prezzi',
      },
      escalationPrompt: 'Hai esigenze specifiche di conformità o volumi elevati?',
      escalationLink: 'Chiedici direttamente su WhatsApp',
      escalationGreeting:
        'Ciao team WAppShot, ho una domanda su configurazione e prezzi dell’API WhatsApp Business per il mio team.',
      items: [
        {
          id: 'keep-number',
          category: 'api',
          categoryLabel: 'WhatsApp API',
          question: 'Possiamo mantenere il nostro numero aziendale attuale passando a WAppShot?',
          answer:
            'Sì. Puoi migrare il tuo numero WhatsApp Business App direttamente sull’API Ufficiale tramite WAppShot, oppure collegare un numero fisso, verde o mobile dedicato. Ti guidiamo nella procedura Embedded Signup da 10 minuti con interruzione minima.',
        },
        {
          id: 'anti-ban',
          category: 'api',
          categoryLabel: 'WhatsApp API',
          question: 'L’API Ufficiale protegge il nostro numero dai blocchi durante le campagne?',
          answer:
            'Sì. Gli strumenti non ufficiali e gli invii massivi dall’app mobile provocano spesso blocchi automatici. WAppShot opera esclusivamente su Meta Cloud API ufficiale con template approvati e tracciamento opt-in.',
        },
        {
          id: 'green-tick',
          category: 'api',
          categoryLabel: 'WhatsApp API',
          question: 'Come funziona la verifica ufficiale con la Spunta Verde WhatsApp?',
          answer:
            'Solo le aziende sull’API Ufficiale di WhatsApp Business possono richiedere il badge verificato (Spunta Verde). Verificato il tuo Meta Business Manager e attivato il profilo WAppShot, il nostro team ti supporta nell’invio della richiesta a Meta.',
        },
        {
          id: 'setup-time',
          category: 'integration',
          categoryLabel: 'Integrazione',
          question: 'Quanto tempo serve per collegare WAppShot e iniziare a tracciare i messaggi?',
          answer:
            'La maggior parte dei team collega il proprio account Meta Business in 15–30 minuti tramite Embedded Signup e avvia subito il tracciamento. La verifica completa Meta Business per sbloccare volumi superiori richiede in genere 1–3 giorni lavorativi.',
        },
        {
          id: 'crm-sync',
          category: 'integration',
          categoryLabel: 'Integrazione',
          question: 'Quali CRM e software aziendali possiamo integrare con WAppShot?',
          answer:
            'WAppShot include connettori nativi per HubSpot, Salesforce, Pipedrive, Zoho CRM e Google Sheets, oltre a webhook JSON firmati e API REST per sincronizzare consegne, letture e attribuzione campagne.',
        },
        {
          id: 'multi-agent',
          category: 'integration',
          categoryLabel: 'Integrazione',
          question: 'Più operatori vendite e supporto possono usare lo stesso numero insieme?',
          answer:
            'Sì. A differenza dell’app mobile limitata a pochi dispositivi, WAppShot supporta postazioni illimitate su un unico numero verificato con assegnazione round-robin, note interne e blocco collisioni.',
        },
        {
          id: 'pricing-structure',
          category: 'pricing',
          categoryLabel: 'Prezzi',
          question: 'Come si distingue il piano WAppShot dalle tariffe template di Meta?',
          answer:
            'L’abbonamento WAppShot copre piattaforma, postazioni, connettori CRM e capacità webhook a tariffa fissa mensile o annuale. Meta addebita separatamente i messaggi template in base alla categoria e al Paese di destinazione.',
        },
        {
          id: 'service-window',
          category: 'pricing',
          categoryLabel: 'Prezzi',
          question: 'Paghiamo tariffe Meta quando rispondiamo ai clienti che ci scrivono?',
          answer:
            'Secondo le regole Meta Cloud API, le risposte inviate entro la finestra di 24 ore aperta dal cliente—così come le chat avviate da inserzioni Click-to-WhatsApp—non comportano costi per messaggio.',
        },
        {
          id: 'contracts',
          category: 'pricing',
          categoryLabel: 'Prezzi',
          question: 'Ci sono vincoli annuali obbligatori o possiamo aggiungere utenti in seguito?',
          answer:
            'Nessun vincolo annuale obbligatorio: scegli la fatturazione mensile o risparmia il 20% con quella annuale, aggiungendo utenti su Pro ($49/utente/mese) o passando a Enterprise quando il team cresce.',
        },
      ],
    },
    proofCta: {
      kicker: 'Onboarding Diretto · Chatta dal Vivo su WhatsApp',
      title: 'Pronto a passare all’API Ufficiale di WhatsApp Business?',
      subtitle:
        'Scegli cosa vuoi configurare, personalizza il tuo messaggio iniziale e avvia una conversazione reale su WhatsApp con il nostro specialista.',
      topicPrompt: '1. Seleziona la tua priorità',
      topics: [
        'Tracciamento e Analisi Messaggi',
        'Gestione Lead Automatizzata',
        'Migrazione da WhatsApp Business App',
        'Integrazione CRM e Webhook',
      ],
      previewLabel: 'Anteprima messaggio WhatsApp precompilato',
      buildPreviewMessage: (name, company, topic) =>
        `Ciao! Sono ${name.trim() || 'interessato a WAppShot'}${
          company.trim() ? ` di ${company.trim()}` : ''
        }. Vorrei approfondire ${topic} con l’API Ufficiale di WhatsApp Business.`,
      primaryCta: 'Chatta con Me su WhatsApp',
      ctaHint: 'Apre WhatsApp con il tema scelto già precompilato',
      formTitle: 'Oppure richiedi la checklist di migrazione',
      formSubtitle:
        'Lascia i tuoi recapiti per ricevere la guida alla verifica Meta e un piano di configurazione su misura.',
      nameLabel: 'Il Tuo Nome',
      namePlaceholder: 'es. Giulia Conti',
      companyLabel: 'Nome Azienda (Opzionale)',
      companyPlaceholder: 'es. Horizon Logistics',
      emailLabel: 'Email Aziendale',
      emailPlaceholder: 'giulia@azienda.it',
      sendViaWhatsAppCta: 'Invia Dati su WhatsApp',
      whatsappConfirmationCta: 'Invia Anche su WhatsApp',
      buildChecklistWhatsAppMessage: (name, company, email, topic) =>
        `Ciao WAppShot! Vorrei ricevere la checklist di migrazione all'API Ufficiale WhatsApp Business.\nNome: ${
          name.trim() || 'Non specificato'
        }${company.trim() ? `\nAzienda: ${company.trim()}` : ''}${
          email.trim() ? `\nEmail aziendale: ${email.trim()}` : ''
        }\nPriorità: ${topic}`,
      errorMissingName: 'Inserisci il tuo nome per poterci rivolgere a te.',
      errorInvalidEmail: 'Inserisci un indirizzo email aziendale valido.',
      submittedTitle: (name) => `Richiesta ricevuta per ${name}`,
      submittedBodyBeforeEmail: 'Abbiamo inviato la guida WAppShot API a ',
      submittedBodyAfterEmail:
        '. Puoi inviare subito una copia anche su WhatsApp usando il pulsante qui sotto.',
      submitAnother: 'Invia un’altra richiesta',
    },
    footer: {
      byText: 'di',
      brandBy: 'Vibe Hub',
      tagline:
        'API Ufficiale di WhatsApp Business per tracciamento messaggi e gestione lead automatizzata.',
      rights: 'WAppShot. Tutti i diritti riservati.',
    },
    floatingChat: {
      label: 'Chatta con noi',
      greeting:
        'Ciao team WAppShot! Sto visitando il vostro sito e vorrei parlare dell’API Ufficiale di WhatsApp Business.',
      ariaLabel: 'Chatta con noi su WhatsApp',
    },
    trust: {
      gdpr: 'Conforme al GDPR',
      iso: 'ISO 27001',
      securityLabel: 'Sicurezza e Conformità Enterprise',
    },
  },
};
