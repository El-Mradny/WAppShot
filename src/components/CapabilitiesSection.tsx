import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { buildWhatsAppUrl } from '../data/wappshotData';
import { useLanguage } from '../i18n/LanguageContext';

type TrackingView = 'outbound' | 'inbound';
const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function CapabilitiesSection() {
  const { t } = useLanguage();
  const [trackingView, setTrackingView] = useState<TrackingView>('outbound');
  const metrics = t.capabilities.trackingMetrics[trackingView];

  return (
    <section
      id="capabilities"
      className="border-b border-slate-200 bg-[#F8FAFC] py-16 dark:border-slate-800 dark:bg-slate-950 sm:py-20 transition-colors duration-150"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.28, ease: EASE_OUT_EXPO }}
          className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-medium text-[#047857] dark:text-emerald-400">
              {t.capabilities.kicker}
            </p>
            <h2
              className="font-display mt-2 font-bold tracking-tight text-slate-900 dark:text-slate-50"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.35rem)', textWrap: 'balance' }}
            >
              {t.capabilities.title}
            </h2>
          </div>

          <a
            href={buildWhatsAppUrl(t.capabilities.walkthroughGreeting)}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#047857] hover:text-[#065F46] dark:text-emerald-400 dark:hover:text-emerald-300 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#047857]"
          >
            <span>{t.capabilities.walkthroughLink}</span>
            <ArrowUpRight
              className="h-4 w-4 shrink-0 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </motion.div>

        {/* Asymmetric Bento Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* 01. Marquee Wide Card (2 cols) */}
          <motion.article
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
            whileHover={{ y: -2 }}
            className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 transition-colors duration-150 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700 sm:p-8 lg:col-span-2"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-slate-100">
                  <span className="font-mono me-2 text-sm font-medium text-[#047857] dark:text-emerald-400 tabular-nums">
                    01.
                  </span>
                  {t.capabilities.card1Title}
                </h3>

                <div
                  role="group"
                  aria-label="Toggle tracking metric view"
                  className="inline-flex items-center gap-1 rounded-lg bg-slate-100 p-1 dark:bg-slate-800"
                >
                  {(
                    [
                      { id: 'outbound', label: t.capabilities.outboundTab },
                      { id: 'inbound', label: t.capabilities.inboundTab },
                    ] as const
                  ).map((mode) => {
                    const active = trackingView === mode.id;
                    return (
                      <button
                        key={mode.id}
                        type="button"
                        onClick={() => setTrackingView(mode.id)}
                        className={`relative rounded-md px-3 py-1.5 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#047857] ${
                          active
                            ? 'text-slate-900 dark:text-white'
                            : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                        }`}
                      >
                        {active && (
                          <motion.span
                            layoutId="tracking-mode-indicator"
                            transition={{ duration: 0.2, ease: EASE_OUT_EXPO }}
                            className="absolute inset-0 rounded-md bg-white shadow-xs dark:bg-slate-950"
                            aria-hidden="true"
                          />
                        )}
                        <span className="relative z-10">{mode.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {t.capabilities.card1Body}
              </p>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${trackingView}-${metrics[0].label}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.16, ease: EASE_OUT_EXPO }}
                className="mt-8 grid grid-cols-1 gap-6 border-t border-slate-200 pt-6 dark:border-slate-800 sm:grid-cols-3"
              >
                {metrics.map((item) => (
                  <div key={item.label}>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      {item.label}
                    </p>
                    <p className="font-mono mt-1 text-2xl font-medium text-slate-900 dark:text-slate-50 tabular-nums">
                      {item.value}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-400">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.article>

          {/* 02. Automated Lead Qualification (1 col) */}
          <motion.article
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.3, delay: 0.05, ease: EASE_OUT_EXPO }}
            whileHover={{ y: -2 }}
            className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 transition-colors duration-150 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700 sm:p-8 lg:col-span-1"
          >
            <div>
              <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-slate-100">
                <span className="font-mono me-2 text-sm font-medium text-[#047857] dark:text-emerald-400 tabular-nums">
                  02.
                </span>
                {t.capabilities.card2Title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {t.capabilities.card2Body}
              </p>
            </div>

            <dl className="mt-8 space-y-3 border-t border-slate-200 pt-5 text-xs dark:border-slate-800">
              {t.capabilities.card2Rows.map((row) => (
                <div key={row.label} className="flex items-center justify-between gap-4">
                  <dt className="text-slate-500 dark:text-slate-400">{row.label}</dt>
                  <dd className="font-mono font-medium text-slate-900 dark:text-slate-100">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.article>

          {/* 03. Shared Multi-Agent Inbox (1 col) */}
          <motion.article
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.3, delay: 0.08, ease: EASE_OUT_EXPO }}
            whileHover={{ y: -2 }}
            className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 transition-colors duration-150 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700 sm:p-8 lg:col-span-1"
          >
            <div>
              <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-slate-100">
                <span className="font-mono me-2 text-sm font-medium text-[#047857] dark:text-emerald-400 tabular-nums">
                  03.
                </span>
                {t.capabilities.card3Title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {t.capabilities.card3Body}
              </p>
            </div>

            <dl className="mt-8 space-y-3 border-t border-slate-200 pt-5 text-xs dark:border-slate-800">
              {t.capabilities.card3Rows.map((row) => (
                <div key={row.label} className="flex items-center justify-between gap-4">
                  <dt className="text-slate-500 dark:text-slate-400">{row.label}</dt>
                  <dd className="font-mono font-medium text-slate-900 dark:text-slate-100">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.article>

          {/* 04. CRM & Webhook Sync Wide Card (2 cols) */}
          <motion.article
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.3, delay: 0.12, ease: EASE_OUT_EXPO }}
            whileHover={{ y: -2 }}
            className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 transition-colors duration-150 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700 sm:p-8 lg:col-span-2"
          >
            <div>
              <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-slate-100">
                <span className="font-mono me-2 text-sm font-medium text-[#047857] dark:text-emerald-400 tabular-nums">
                  04.
                </span>
                {t.capabilities.card4Title}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {t.capabilities.card4Body}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 border-t border-slate-200 pt-6 dark:border-slate-800 sm:grid-cols-3">
              {t.capabilities.card4Cols.map((col) => (
                <div key={col.label}>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {col.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {col.title}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-400">{col.detail}</p>
                </div>
              ))}
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
