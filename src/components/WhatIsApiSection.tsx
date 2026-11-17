import { useEffect, useState } from 'react';
import { Server, Play, Pause } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { WEBHOOK_EVENTS, type WebhookEventSample } from '../data/wappshotData';
import { useLanguage } from '../i18n/LanguageContext';

const API_IMAGE_PATH = '/src/assets/images/api_cloud_routing_1794895324727.jpg';
const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function WhatIsApiSection() {
  const { t } = useLanguage();
  const [selectedEventId, setSelectedEventId] = useState<WebhookEventSample['id']>('delivered');
  const [isAutoStepping, setIsAutoStepping] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (!isAutoStepping) return;

    const timer = window.setInterval(() => {
      setSelectedEventId((current) => {
        const currentIndex = WEBHOOK_EVENTS.findIndex((e) => e.id === current);
        const nextIndex = (currentIndex + 1) % WEBHOOK_EVENTS.length;
        return WEBHOOK_EVENTS[nextIndex].id;
      });
    }, 2400);

    return () => window.clearInterval(timer);
  }, [isAutoStepping]);

  const activeEvent =
    WEBHOOK_EVENTS.find((event) => event.id === selectedEventId) ?? WEBHOOK_EVENTS[0];

  function handleSelectEvent(id: WebhookEventSample['id']) {
    setIsAutoStepping(false);
    setSelectedEventId(id);
  }

  return (
    <section
      id="what-is-api"
      className="border-b border-slate-200 bg-white py-16 dark:border-slate-800 dark:bg-slate-900 sm:py-20 transition-colors duration-150"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
          className="max-w-2xl"
        >
          <p className="text-xs font-medium text-[#047857] dark:text-emerald-400">
            {t.whatIsApi.kicker}
          </p>
          <h2
            className="font-display mt-2 font-bold tracking-tight text-slate-900 dark:text-slate-50"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.35rem)', textWrap: 'balance' }}
          >
            {t.whatIsApi.title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {t.whatIsApi.subtitle}
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
          {/* Left: Numbered Architectural Explanation */}
          <div className="divide-y divide-slate-200 border-y border-slate-200 dark:divide-slate-800 dark:border-slate-800 lg:col-span-6">
            {t.whatIsApi.pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.28, delay: idx * 0.06, ease: EASE_OUT_EXPO }}
                className="py-6 first:pt-5 last:pb-5"
              >
                <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-slate-100">
                  <span className="font-mono me-2 text-sm font-medium text-[#047857] dark:text-emerald-400 tabular-nums">
                    {pillar.number}
                  </span>
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {pillar.body}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right: Cloud Routing Visual + Interactive Webhook Event Inspector */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.32, ease: EASE_OUT_EXPO }}
            className="flex flex-col gap-5 lg:col-span-6"
          >
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
              {!imageError ? (
                <img
                  src={API_IMAGE_PATH}
                  alt={t.whatIsApi.imageAlt}
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-[1.015]"
                />
              ) : (
                <div className="flex aspect-[4/3] w-full flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-950 p-8 text-center">
                  <Server
                    className="h-10 w-10 text-[#047857] dark:text-emerald-400"
                    aria-hidden="true"
                  />
                  <p className="font-display mt-3 text-base font-semibold text-slate-900 dark:text-slate-100">
                    {t.whatIsApi.fallbackTitle}
                  </p>
                  <p className="mt-1 max-w-xs text-xs text-slate-600 dark:text-slate-400">
                    {t.whatIsApi.fallbackSubtitle}
                  </p>
                </div>
              )}
            </div>

            {/* Interactive Webhook Event Inspector */}
            <div className="rounded-xl border border-slate-200 bg-[#0F172A] p-5 text-slate-100 dark:border-slate-800 dark:bg-slate-950">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-medium text-slate-300">
                  {t.whatIsApi.inspectorTitle}
                </span>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsAutoStepping((prev) => !prev)}
                    className="inline-flex items-center gap-1.5 rounded-md border border-slate-700 bg-slate-900 px-2.5 py-1 text-xs font-medium text-slate-200 hover:border-slate-500 hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                  >
                    {isAutoStepping ? (
                      <>
                        <Pause className="h-3 w-3" aria-hidden="true" />
                        <span>{t.whatIsApi.pauseFlow}</span>
                      </>
                    ) : (
                      <>
                        <Play className="h-3 w-3" aria-hidden="true" />
                        <span>{t.whatIsApi.playFlow}</span>
                      </>
                    )}
                  </button>
                  <span className="font-mono text-xs text-slate-400 tabular-nums" dir="ltr">
                    {activeEvent.timestamp}
                  </span>
                </div>
              </div>

              <div
                role="tablist"
                aria-label="Select webhook event type"
                dir="ltr"
                className="mt-3 flex flex-wrap gap-1.5 rounded-lg border border-slate-800 bg-slate-900/90 p-1"
              >
                {WEBHOOK_EVENTS.map((event) => {
                  const isActive = event.id === activeEvent.id;
                  return (
                    <button
                      key={event.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => handleSelectEvent(event.id)}
                      className={`relative rounded-md px-2.5 py-1.5 font-mono text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 ${
                        isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="webhook-tab-indicator"
                          transition={{ duration: 0.2, ease: EASE_OUT_EXPO }}
                          className="absolute inset-0 rounded-md bg-[#047857]"
                          aria-hidden="true"
                        />
                      )}
                      <span className="relative z-10">{event.label}</span>
                    </button>
                  );
                })}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeEvent.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.16, ease: EASE_OUT_EXPO }}
                >
                  <p className="mt-3 text-xs text-slate-300">
                    {t.whatIsApi.eventSummaries[activeEvent.id]}
                  </p>
                  <pre
                    dir="ltr"
                    className="mt-3 overflow-x-auto rounded-lg border border-slate-800 bg-slate-950 dark:bg-slate-900/70 p-3.5 text-left font-mono text-xs leading-relaxed text-emerald-300 tabular-nums"
                  >
                    <code>{activeEvent.payload}</code>
                  </pre>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
