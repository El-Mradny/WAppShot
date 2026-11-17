import type { LanguageCode } from './translations';

export interface MetricItem {
  id: string;
  target: number;
  decimals: number;
  prefix?: string;
  suffix: string;
  label: string;
  detail: string;
}

export interface MetricsBundle {
  kicker: string;
  title: string;
  subtitle: string;
  items: MetricItem[];
}

export const METRICS_DATA: Record<LanguageCode, MetricsBundle> = {
  en: {
    kicker: 'Platform Scale · Verified Throughput',
    title: 'Key metrics driving WhatsApp revenue',
    subtitle:
      'Measurable reliability across high-volume sales teams, multi-agent support desks, and automated CRM pipelines.',
    items: [
      {
        id: 'businesses',
        target: 500,
        decimals: 0,
        suffix: '+',
        label: 'Businesses Active',
        detail: 'Teams operating on Official Meta Cloud API',
      },
      {
        id: 'messages',
        target: 10,
        decimals: 0,
        suffix: 'M+',
        label: 'Messages Delivered',
        detail: 'Tracked end-to-end with delivery & read webhooks',
      },
      {
        id: 'reliability',
        target: 99.94,
        decimals: 2,
        suffix: '%',
        label: 'Cloud Uptime SLA',
        detail: 'Zero smartphone battery or QR session drops',
      },
      {
        id: 'speed',
        target: 3.4,
        decimals: 1,
        suffix: 'x',
        label: 'Faster Lead Response',
        detail: 'Accelerated handoff via automated routing',
      },
    ],
  },

  es: {
    kicker: 'Escala de Plataforma · Caudal Verificado',
    title: 'Métricas clave que impulsan tus ventas en WhatsApp',
    subtitle:
      'Fiabilidad medible en equipos comerciales de alto volumen, mesas multi-agente y flujos CRM automatizados.',
    items: [
      {
        id: 'businesses',
        target: 500,
        decimals: 0,
        suffix: '+',
        label: 'Empresas Activas',
        detail: 'Equipos operando sobre la API Oficial de Meta Cloud',
      },
      {
        id: 'messages',
        target: 10,
        decimals: 0,
        suffix: 'M+',
        label: 'Mensajes Entregados',
        detail: 'Rastreados de principio a fin con webhooks en vivo',
      },
      {
        id: 'reliability',
        target: 99.94,
        decimals: 2,
        suffix: '%',
        label: 'Disponibilidad Cloud',
        detail: 'Cero caídas por batería o desconexiones QR',
      },
      {
        id: 'speed',
        target: 3.4,
        decimals: 1,
        suffix: 'x',
        label: 'Mayor Velocidad de Respuesta',
        detail: 'Asignación acelerada por enrutamiento automático',
      },
    ],
  },

  ar: {
    kicker: 'نطاق المنصة · موثوقية مُقاسة',
    title: 'أرقام ومؤشرات رئيسية تثبت كفاءة المنصة',
    subtitle:
      'اعتمادية عالية لفرق المبيعات ذات الحجم الكبير، ومكاتب الدعم متعددة الموظفين، وتدفقات CRM المؤتمتة.',
    items: [
      {
        id: 'businesses',
        target: 500,
        decimals: 0,
        suffix: '+',
        label: 'شركة نشطة',
        detail: 'تعمل عبر واجهة Meta Cloud السحابية الرسمية',
      },
      {
        id: 'messages',
        target: 10,
        decimals: 0,
        suffix: 'M+',
        label: 'رسالة تم تسليمها',
        detail: 'متتبعة لحظياً عبر إشعارات التسليم والقراءة',
      },
      {
        id: 'reliability',
        target: 99.94,
        decimals: 2,
        suffix: '%',
        label: 'جاهزية السحابة SLA',
        detail: 'دون أي انقطاع بسبب بطارية الهاتف أو جلسات QR',
      },
      {
        id: 'speed',
        target: 3.4,
        decimals: 1,
        suffix: 'x',
        label: 'استجابة أسرع للعملاء',
        detail: 'بفضل التوجيه الآلي الفوري للمحادثات الواردة',
      },
    ],
  },

  it: {
    kicker: 'Scala della Piattaforma · Volumi Verificati',
    title: 'Metriche chiave a supporto dei ricavi WhatsApp',
    subtitle:
      'Affidabilità misurabile per team commerciali ad alto volume, desk multi-agente e pipeline CRM automatizzate.',
    items: [
      {
        id: 'businesses',
        target: 500,
        decimals: 0,
        suffix: '+',
        label: 'Aziende Attive',
        detail: 'Team operativi su Meta Cloud API ufficiale',
      },
      {
        id: 'messages',
        target: 10,
        decimals: 0,
        suffix: 'M+',
        label: 'Messaggi Consegnati',
        detail: 'Tracciati end-to-end con webhook di consegna e lettura',
      },
      {
        id: 'reliability',
        target: 99.94,
        decimals: 2,
        suffix: '%',
        label: 'Uptime Cloud SLA',
        detail: 'Zero dipendenza da batteria smartphone o sessioni QR',
      },
      {
        id: 'speed',
        target: 3.4,
        decimals: 1,
        suffix: 'x',
        label: 'Risposta Lead Più Rapida',
        detail: 'Smistamento immediato tramite routing automatico',
      },
    ],
  },
};
