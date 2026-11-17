import type { LanguageCode } from './translations';

export interface TestimonialItem {
  id: string;
  industry: string;
  shortIndustry: string;
  meta: string;
  metric: string;
  quote: string;
  challenge: string;
  workflow: string;
}

export interface TestimonialsBundle {
  kicker: string;
  title: string;
  subtitle: string;
  prevAria: string;
  nextAria: string;
  challengeLabel: string;
  workflowLabel: string;
  items: TestimonialItem[];
}

export const TESTIMONIALS_DATA: Record<LanguageCode, TestimonialsBundle> = {
  en: {
    kicker: 'Client Outcomes · Success by Industry',
    title: 'How teams across industries use WAppShot',
    subtitle:
      'Real operational results from businesses replacing disconnected mobile phones with Official WhatsApp Business API tracking and lead automation.',
    prevAria: 'Previous success story',
    nextAria: 'Next success story',
    challengeLabel: 'Previous Bottleneck',
    workflowLabel: 'WAppShot API Workflow',
    items: [
      {
        id: 'real-estate',
        industry: 'Real Estate & Property Development',
        shortIndustry: 'Real Estate',
        meta: '18 Sales Advisors · Click-to-WhatsApp Ads · Migrated in 25 mins',
        metric: '+142% Qualified Showings Booked in 90 Days',
        quote:
          'Moving our sales floor off individual phones gave us complete visibility into every buyer inquiry. High-intent property leads are qualified automatically and routed to the right district advisor in under two seconds.',
        challenge: 'Four separate business phones with untracked replies and missed weekend inquiries.',
        workflow: 'Automated budget & location qualification flow synced live to CRM deal stages.',
      },
      {
        id: 'healthcare',
        industry: 'Private Healthcare & Diagnostic Clinics',
        shortIndustry: 'Healthcare',
        meta: '6 Clinic Desks · 18,000 Monthly Updates · Official Cloud API',
        metric: '68% Faster Patient Response Time in 6 Weeks',
        quote:
          'Appointment confirmations and lab-ready alerts now go out with verifiable delivery tracking. Our front-desk team handles every patient follow-up from one shared inbox without losing thread history.',
        challenge: 'Unconfirmed manual reminders causing high no-show rates and phone queue congestion.',
        workflow: 'Webhook-triggered appointment templates with instant read receipts and desk routing.',
      },
      {
        id: 'ecommerce',
        industry: 'E-Commerce & Retail Fulfillment',
        shortIndustry: 'E-Commerce',
        meta: 'D2C Operations · Cash-on-Delivery Verification · REST Webhooks',
        metric: '3.4× Higher Order Confirmation Rate in 60 Days',
        quote:
          'Instead of calling customers who ignore unknown numbers, our automated WhatsApp template confirms delivery slots and recovers abandoned carts with one-tap interactive buttons.',
        challenge: 'High return-to-origin rates and unattributed promotional broadcasts capped at 256 contacts.',
        workflow: 'Order webhook triggers instant WhatsApp confirmation and abandoned-checkout recovery.',
      },
      {
        id: 'automotive',
        industry: 'Automotive Dealerships & After-Sales Service',
        shortIndustry: 'Automotive',
        meta: '14 Service Bays · Test-Drive & Maintenance Pipelines',
        metric: '99.6% Service Reminder Delivery Across 14 Branches',
        quote:
          'Test-drive requests from Meta ads flow directly into our showroom calendar, and service advisors track every customer approval inside one unified timeline.',
        challenge: 'Zero visibility into whether showroom reps followed up on inbound vehicle leads.',
        workflow: 'Round-robin showroom lead assignment with automated SLA escalation timers.',
      },
      {
        id: 'education',
        industry: 'Higher Education & Professional Training',
        shortIndustry: 'Education',
        meta: 'Admissions & Counseling Desk · Multi-Language Intake',
        metric: '+88% Enrolled Admissions from Ad Leads in 1 Semester',
        quote:
          'Prospective students ask questions late at night. WAppShot answers program eligibility questions immediately and books counselor calls before morning.',
        challenge: 'Slow next-day email responses causing prospective applicants to drop off.',
        workflow: '24/7 interactive program selector feeding qualified student profiles into CRM.',
      },
    ],
  },

  es: {
    kicker: 'Resultados de Clientes · Éxito por Industria',
    title: 'Cómo usan WAppShot empresas de distintos sectores',
    subtitle:
      'Resultados operativos reales de equipos que reemplazaron teléfonos desconectados por el seguimiento y la automatización de la API Oficial de WhatsApp Business.',
    prevAria: 'Historia anterior',
    nextAria: 'Siguiente historia',
    challengeLabel: 'Cuello de Botella Previo',
    workflowLabel: 'Flujo con WAppShot API',
    items: [
      {
        id: 'real-estate',
        industry: 'Sector Inmobiliario y Desarrollo de Propiedades',
        shortIndustry: 'Inmobiliaria',
        meta: '18 Asesores Comerciales · Anuncios Click-to-WhatsApp · Activo en 25 min',
        metric: '+142% Visitas Calificadas Agendadas en 90 Días',
        quote:
          'Sacar a nuestro equipo comercial de móviles individuales nos dio visibilidad total sobre cada consulta. Los leads con alta intención se califican automáticamente y se asignan al asesor adecuado en menos de dos segundos.',
        challenge: 'Cuatro teléfonos separados con respuestas sin rastrear y consultas perdidas el fin de semana.',
        workflow: 'Flujo automático de presupuesto y zona sincronizado en tiempo real con el CRM.',
      },
      {
        id: 'healthcare',
        industry: 'Salud Privada y Clínicas Diagnósticas',
        shortIndustry: 'Salud',
        meta: '6 Recepciones · 18,000 Avisos Mensuales · Cloud API Oficial',
        metric: '68% Menor Tiempo de Respuesta en 6 Semanas',
        quote:
          'Las confirmaciones de citas y avisos de resultados salen ahora con seguimiento de entrega verificable. Nuestro equipo atiende todo desde una bandeja compartida sin perder historial.',
        challenge: 'Recordatorios manuales sin confirmar que generaban inasistencias y saturación telefónica.',
        workflow: 'Plantillas disparadas por webhook con confirmación de lectura y reparto por sede.',
      },
      {
        id: 'ecommerce',
        industry: 'Comercio Electrónico y Logística Retail',
        shortIndustry: 'E-Commerce',
        meta: 'Operación D2C · Validación Contra Reembolso · Webhooks REST',
        metric: '3.4× Mayor Confirmación de Pedidos en 60 Días',
        quote:
          'En lugar de llamar a clientes que ignoran números desconocidos, nuestra plantilla automática confirma direcciones y recupera carritos abandonados con botones de un solo toque.',
        challenge: 'Altas devoluciones y difusiones limitadas a 256 contactos sin atribución.',
        workflow: 'Webhook de pedido que activa confirmación inmediata y recuperación de carritos.',
      },
      {
        id: 'automotive',
        industry: 'Concesionarios Automotrices y Posventa',
        shortIndustry: 'Automotriz',
        meta: '14 Bahías de Servicio · Pruebas de Manejo y Mantenimiento',
        metric: '99.6% de Entrega en Recordatorios de Taller',
        quote:
          'Las solicitudes de prueba de manejo desde anuncios llegan directo al calendario de sala, y los asesores rastrean cada aprobación del cliente en una sola línea temporal.',
        challenge: 'Cero control sobre si los vendedores respondían a tiempo los leads entrantes.',
        workflow: 'Asignación rotativa automática con alertas de SLA por tiempo de respuesta.',
      },
      {
        id: 'education',
        industry: 'Educación Superior y Formación Profesional',
        shortIndustry: 'Educación',
        meta: 'Mesa de Admisiones · Captación Multicanal',
        metric: '+88% Matrículas desde Anuncios en 1 Semestre',
        quote:
          'Los aspirantes consultan programas por la noche. WAppShot responde requisitos al instante y agenda llamadas con consejeros académicos antes del día siguiente.',
        challenge: 'Respuestas lentas por correo que provocaban abandono de postulantes.',
        workflow: 'Selector interactivo 24/7 que sincroniza perfiles calificados con el CRM.',
      },
    ],
  },

  ar: {
    kicker: 'نتائج العملاء · قصص نجاح حسب القطاع',
    title: 'كيف تعتمد مختلف القطاعات على WAppShot',
    subtitle:
      'نتائج تشغيلية ملموسة لأعمال استبدلت الهواتف المتفرقة بالتتبع الدقيق وأتمتة العملاء عبر واجهة واتساب للأعمال الرسمية.',
    prevAria: 'القصة السابقة',
    nextAria: 'القصة التالية',
    challengeLabel: 'التحدي السابق',
    workflowLabel: 'آلية العمل عبر WAppShot API',
    items: [
      {
        id: 'real-estate',
        industry: 'التطوير العقاري والوساطة العقارية',
        shortIndustry: 'العقارات',
        meta: '18 مستشار مبيعات · إعلانات Click-to-WhatsApp · تفعيل خلال 25 دقيقة',
        metric: '+142% معاينات عقارية مؤهلة خلال 90 يوماً',
        quote:
          'الانتقال من الهواتف الفردية إلى واجهة WAppShot منحنا رؤية كاملة لكل استفسار عقاري. يتم تأهيل المشتري وتوجيهه لمستشار المنطقة تلقائياً في أقل من ثانيتين.',
        challenge: 'أربعة هواتف منفصلة دون تتبع للردود وضياع استفسارات عطلة نهاية الأسبوع.',
        workflow: 'تدفق آلي لجمع الميزانية والمنطقة يتزامن لحظياً مع مراحل الصفقات في CRM.',
      },
      {
        id: 'healthcare',
        industry: 'الرعاية الصحية والعيادات التشخيصية',
        shortIndustry: 'الرعاية الصحية',
        meta: '6 مكاتب استقبال · 18,000 إشعار شهرياً · Cloud API الرسمي',
        metric: 'استجابة أسرع للمرضى بنسبة 68% خلال 6 أسابيع',
        quote:
          'تصل تأكيدات المواعيد وتنبيهات جاهزية التحاليل الآن مع تتبع مؤكد للتسليم، ويدير فريق الاستقبال كافة المتابعات من صندوق وارد موحد دون فقدان سجل المريض.',
        challenge: 'تذكيرات يدوية غير موثقة تسببت في ارتفاع نسب التغيب وضغط المكالمات.',
        workflow: 'قوالب مواعيد مرتبطة بـ Webhooks مع إشعارات القراءة والتوجيه حسب القسم.',
      },
      {
        id: 'ecommerce',
        industry: 'التجارة الإلكترونية والخدمات اللوجستية',
        shortIndustry: 'التجارة الإلكترونية',
        meta: 'عمليات البيع المباشر · تأكيد الدفع عند الاستلام · REST Webhooks',
        metric: 'نمو تأكيد الطلبات 3.4 أضعاف خلال 60 يوماً',
        quote:
          'بدلاً من الاتصال بعملاء يتجاهلون الأرقام الغريبة، تؤكد قوالب واتساب التلقائية موعد التوصيل وتستعيد السلات المتروكة بضغطة زر واحدة.',
        challenge: 'ارتفاع مرتجعات الشحن ومحدودية البث التقليدي عند 256 جهة اتصال.',
        workflow: 'إطلاق تأكيد الطلب فورياً عبر Webhook واستعادة السلات المتروكة تلقائياً.',
      },
      {
        id: 'automotive',
        industry: 'معارض السيارات وخدمات ما بعد البيع',
        shortIndustry: 'السيارات',
        meta: '14 مركز صيانة · حجز تجارب القيادة والمتابعة الدورية',
        metric: '99.6% نسبة تسليم تذكيرات الصيانة عبر 14 فرعاً',
        quote:
          'تصل طلبات تجربة القيادة من إعلانات Meta مباشرة إلى جدول المعرض، ويتابع مسؤولو الصيانة كل موافقة عميل في سجل زمني واحد.',
        challenge: 'غياب الرقابة على سرعة متابعة مندوبي المعرض لطلبات الشراء الواردة.',
        workflow: 'توزيع دوري تلقائي للعملاء مع مؤقتات تنبيه SLA لسرعة الاستجابة.',
      },
      {
        id: 'education',
        industry: 'التعليم العالي ومراكز التدريب المهني',
        shortIndustry: 'التعليم والتدريب',
        meta: 'مكتب القبول والتسجيل · استقبال الاستفسارات متعدد اللغات',
        metric: '+88% تسجيل فعلي من عملاء الإعلانات خلال فصل دراسي',
        quote:
          'يطرح المتقدمون أسئلتهم في ساعات المساء المتأخرة؛ يجيب WAppShot فوراً عن شروط البرامج ويحجز مكالمة المستشار الأكاديمي قبل الصباح.',
        challenge: 'بطء الردود عبر البريد الإلكتروني وتسرّب المتقدمين قبل التواصل.',
        workflow: 'مساعد تفاعلي على مدار الساعة يرسل ملفات المتقدمين المؤهلين إلى CRM.',
      },
    ],
  },

  it: {
    kicker: 'Risultati dei Clienti · Storie per Settore',
    title: 'Come aziende di diversi settori usano WAppShot',
    subtitle:
      'Risultati operativi concreti da team che hanno sostituito smartphone scollegati con tracciamento e automazione lead su API Ufficiale WhatsApp Business.',
    prevAria: 'Storia precedente',
    nextAria: 'Storia successiva',
    challengeLabel: 'Criticità Precedente',
    workflowLabel: 'Flusso WAppShot API',
    items: [
      {
        id: 'real-estate',
        industry: 'Immobiliare e Sviluppo Residenziale',
        shortIndustry: 'Immobiliare',
        meta: '18 Consulenti Vendite · Annunci Click-to-WhatsApp · Attivo in 25 min',
        metric: '+142% Visite Qualificate Prenotate in 90 Giorni',
        quote:
          'Spostare la rete vendita dai telefoni personali ci ha dato visibilità completa su ogni richiesta. I lead ad alta intenzione vengono qualificati e assegnati al consulente di zona in meno di due secondi.',
        challenge: 'Quattro telefoni separati senza tracciamento risposte e richieste perse nel weekend.',
        workflow: 'Flusso automatico su budget e zona sincronizzato in tempo reale con il CRM.',
      },
      {
        id: 'healthcare',
        industry: 'Sanità Privata e Cliniche Diagnostiche',
        shortIndustry: 'Sanità',
        meta: '6 Sportelli Accettazione · 18.000 Avvisi/Mese · Cloud API Ufficiale',
        metric: 'Tempi di Risposta Pazienti Ridotti del 68% in 6 Settimane',
        quote:
          'Conferme appuntamento e avvisi referti partono ora con tracciamento di consegna verificato. Il front-office gestisce ogni seguito da un’unica inbox condivisa senza perdere storico.',
        challenge: 'Promemoria manuali non confermati con alto tasso di assenze e code telefoniche.',
        workflow: 'Template attivati da webhook con conferme di lettura e smistamento reparto.',
      },
      {
        id: 'ecommerce',
        industry: 'E-Commerce e Logistica Retail',
        shortIndustry: 'E-Commerce',
        meta: 'Operazioni D2C · Conferma Contrassegno · Webhook REST',
        metric: 'Tasso di Conferma Ordini 3.4× più Alto in 60 Giorni',
        quote:
          'Invece di chiamare clienti che ignorano numeri sconosciuti, il nostro template automatico conferma la consegna e recupera i carrelli abbandonati con pulsanti a un clic.',
        challenge: 'Alti resi alla consegna e broadcast limitati a 256 contatti senza attribuzione.',
        workflow: 'Webhook ordine per conferma immediata e recupero automatico carrelli.',
      },
      {
        id: 'automotive',
        industry: 'Concessionarie Auto e Assistenza Post-Vendita',
        shortIndustry: 'Automotive',
        meta: '14 Ponti Officina · Pipeline Test-Drive e Tagliandi',
        metric: '99.6% Consegna Promemoria Assistenza su 14 Sedi',
        quote:
          'Le richieste di test-drive dagli annunci Meta entrano direttamente nel calendario showroom e i consulenti seguono ogni approvazione cliente in un’unica cronologia.',
        challenge: 'Nessuna visibilità sui tempi di ricontatto dei venditori sui lead in ingresso.',
        workflow: 'Assegnazione automatica a rotazione con timer SLA di risposta.',
      },
      {
        id: 'education',
        industry: 'Alta Formazione e Istituti Professionali',
        shortIndustry: 'Formazione',
        meta: 'Ufficio Ammissioni · Raccolta Lead Multicanale',
        metric: '+88% Iscrizioni da Campagne Adv in 1 Semestre',
        quote:
          'I futuri studenti chiedono informazioni la sera tardi. WAppShot risponde subito sui requisiti del corso e prenota la chiamata con l’orientatore prima del mattino.',
        challenge: 'Risposte lente via email con conseguente abbandono dei candidati.',
        workflow: 'Selettore programmi attivo 24/7 con invio profili qualificati al CRM.',
      },
    ],
  },
};
