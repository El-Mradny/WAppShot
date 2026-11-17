import { GitBranch, BarChart3, ShieldCheck, Webhook, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import { SPOTLIGHT_DATA } from '../i18n/spotlightData';

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function FeatureSpotlight() {
  const { lang, isRtl } = useLanguage();
  const copy = SPOTLIGHT_DATA[lang];

  return (
    <section
      id="spotlight"
      className="border-b border-slate-200 bg-white py-16 dark:border-slate-800 dark:bg-slate-900 sm:py-20 transition-colors duration-150"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.28, ease: EASE_OUT_EXPO }}
          className="max-w-2xl"
        >
          <p className="text-xs font-medium text-[#047857] dark:text-emerald-400">{copy.kicker}</p>
          <h2
            className="font-display mt-2 font-bold tracking-tight text-slate-900 dark:text-slate-50"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.35rem)', textWrap: 'balance' }}
          >
            {copy.title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {copy.subtitle}
          </p>
        </motion.div>

        {/* Asymmetric 3-Column Bento Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Tile 1: Automated Lead Routing (Wide 2-col) */}
          <motion.article
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
            whileHover={{ y: -3 }}
            className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-[#F8FAFC] p-6 transition-colors duration-150 hover:border-[#047857]/50 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-emerald-500/50 sm:p-8 lg:col-span-2"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs font-medium text-[#047857] dark:text-emerald-400">
                  {copy.routing.kicker}
                </p>
                <span className="font-mono text-xs font-medium text-slate-500 dark:text-slate-400 tabular-nums">
                  {copy.routing.latencyBadge}
                </span>
              </div>

              <div className="mt-3 flex items-center gap-2.5">
                <GitBranch
                  className="h-5 w-5 shrink-0 text-[#047857] dark:text-emerald-400 transition-transform duration-200 group-hover:scale-110"
                  aria-hidden="true"
                />
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-slate-100">
                  {copy.routing.title}
                </h3>
              </div>

              <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {copy.routing.description}
              </p>
            </div>

            {/* Hairline-divided Routing Pipeline */}
            <div className="mt-8 grid grid-cols-1 gap-4 border-t border-slate-200 pt-6 dark:border-slate-800 sm:grid-cols-3 sm:gap-6">
              {copy.routing.steps.map((step, index) => (
                <div key={step.label} className="relative flex flex-col">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-semibold text-slate-900 dark:text-slate-100 tabular-nums">
                      {step.label}
                    </span>
                    {index < copy.routing.steps.length - 1 && (
                      <ArrowRight
                        className={`hidden h-3.5 w-3.5 text-slate-400 dark:text-slate-500 transition-transform duration-200 sm:block ${
                          isRtl
                            ? 'rotate-180 group-hover:-translate-x-1'
                            : 'group-hover:translate-x-1'
                        }`}
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
          </motion.article>

          {/* Tile 2: Analytics Dashboard (1-col) */}
          <motion.article
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.3, delay: 0.05, ease: EASE_OUT_EXPO }}
            whileHover={{ y: -3 }}
            className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-[#F8FAFC] p-6 transition-colors duration-150 hover:border-[#047857]/50 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-emerald-500/50 sm:p-8 lg:col-span-1"
          >
            <div>
              <p className="text-xs font-medium text-[#047857] dark:text-emerald-400">
                {copy.analytics.kicker}
              </p>
              <div className="mt-3 flex items-center gap-2.5">
                <BarChart3
                  className="h-5 w-5 shrink-0 text-[#047857] dark:text-emerald-400 transition-transform duration-200 group-hover:scale-110"
                  aria-hidden="true"
                />
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-slate-100">
                  {copy.analytics.title}
                </h3>
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {copy.analytics.description}
              </p>
            </div>

            {/* Compositor-only bar visualization */}
            <div className="mt-7 space-y-3 border-t border-slate-200 pt-5 dark:border-slate-800">
              {copy.analytics.bars.map((bar) => (
                <div key={bar.label}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      {bar.label}
                    </span>
                    <span className="font-mono font-semibold text-slate-900 dark:text-slate-100 tabular-nums">
                      {bar.value}
                    </span>
                  </div>
                  <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                    <div
                      style={{ transform: `scaleX(${bar.ratio})` }}
                      className="h-full w-full origin-left rounded-full bg-[#047857] dark:bg-emerald-500 transition-transform duration-300 group-hover:bg-[#059669] dark:group-hover:bg-emerald-400"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.article>

          {/* Tile 3: Template Health Monitor (1-col) */}
          <motion.article
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.3, delay: 0.08, ease: EASE_OUT_EXPO }}
            whileHover={{ y: -3 }}
            className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-[#F8FAFC] p-6 transition-colors duration-150 hover:border-[#047857]/50 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-emerald-500/50 sm:p-8 lg:col-span-1"
          >
            <div>
              <p className="text-xs font-medium text-[#047857] dark:text-emerald-400">
                {copy.templates.kicker}
              </p>
              <div className="mt-3 flex items-center gap-2.5">
                <ShieldCheck
                  className="h-5 w-5 shrink-0 text-[#047857] dark:text-emerald-400 transition-transform duration-200 group-hover:scale-110"
                  aria-hidden="true"
                />
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-slate-100">
                  {copy.templates.title}
                </h3>
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {copy.templates.description}
              </p>
            </div>

            <dl className="mt-7 divide-y divide-slate-200 border-t border-slate-200 pt-2 text-xs dark:divide-slate-800 dark:border-slate-800">
              {copy.templates.rows.map((row) => (
                <div
                  key={row.category}
                  className="flex items-center justify-between gap-4 py-3 last:pb-0"
                >
                  <dt className="font-medium text-slate-700 dark:text-slate-300">
                    {row.category}
                  </dt>
                  <dd className="font-mono font-semibold text-[#047857] dark:text-emerald-400 tabular-nums">
                    {row.metric}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.article>

          {/* Tile 4: CRM & Webhook Event Stream (Wide 2-col) */}
          <motion.article
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.3, delay: 0.12, ease: EASE_OUT_EXPO }}
            whileHover={{ y: -3 }}
            className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-[#F8FAFC] p-6 transition-colors duration-150 hover:border-[#047857]/50 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-emerald-500/50 sm:p-8 lg:col-span-2"
          >
            <div>
              <p className="text-xs font-medium text-[#047857] dark:text-emerald-400">
                {copy.webhooks.kicker}
              </p>
              <div className="mt-3 flex items-center gap-2.5">
                <Webhook
                  className="h-5 w-5 shrink-0 text-[#047857] dark:text-emerald-400 transition-transform duration-200 group-hover:scale-110"
                  aria-hidden="true"
                />
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-slate-100">
                  {copy.webhooks.title}
                </h3>
              </div>
              <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {copy.webhooks.description}
              </p>
            </div>

            <div className="mt-7 divide-y divide-slate-200 border-t border-slate-200 pt-2 dark:divide-slate-800 dark:border-slate-800">
              {copy.webhooks.endpoints.map((endpoint) => (
                <div
                  key={endpoint.name}
                  className="flex flex-wrap items-center justify-between gap-3 py-3 text-xs last:pb-0"
                >
                  <span className="font-semibold text-slate-900 dark:text-slate-100">
                    {endpoint.name}
                  </span>
                  <span className="font-mono text-slate-600 dark:text-slate-400" dir="ltr">
                    {endpoint.event}
                  </span>
                  <span
                    className="font-mono font-medium text-[#047857] dark:text-emerald-400 tabular-nums"
                    dir="ltr"
                  >
                    {endpoint.latency}
                  </span>
                </div>
              ))}
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
