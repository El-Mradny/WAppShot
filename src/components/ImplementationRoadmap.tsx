import { useState } from 'react';
import { ArrowRight, Check, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { buildWhatsAppUrl } from '../data/wappshotData';
import { useLanguage } from '../i18n/LanguageContext';
import { ROADMAP_DATA } from '../i18n/roadmapData';

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function ImplementationRoadmap() {
  const { lang, isRtl } = useLanguage();
  const copy = ROADMAP_DATA[lang];
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const roadmapChatUrl = buildWhatsAppUrl(copy.ctaGreeting);

  return (
    <section
      id="roadmap"
      aria-label={copy.title}
      className="border-b border-slate-200 bg-[#F8FAFC] py-16 dark:border-slate-800 dark:bg-slate-950 sm:py-20 transition-colors duration-150"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
          {/* Left Sticky Summary Column */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.28, ease: EASE_OUT_EXPO }}
            className="lg:col-span-4 lg:sticky lg:top-24"
          >
            <p className="text-xs font-medium text-[#047857] dark:text-emerald-400">
              {copy.kicker}
            </p>
            <h2
              className="font-display mt-2 font-bold tracking-tight text-slate-900 dark:text-slate-50"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', textWrap: 'balance' }}
            >
              {copy.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
              {copy.subtitle}
            </p>

            <div className="mt-6 border-t border-slate-200 pt-5 dark:border-slate-800">
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                {copy.timelineSummary}
              </p>

              <motion.a
                href={roadmapChatUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.985 }}
                transition={{ duration: 0.15 }}
                className="group mt-5 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#047857] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#065F46] transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#047857]"
              >
                <MessageSquare className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{copy.ctaLabel}</span>
                <ArrowRight
                  className={`h-4 w-4 shrink-0 transition-transform duration-150 ${
                    isRtl
                      ? 'rotate-180 group-hover:-translate-x-0.5'
                      : 'group-hover:translate-x-0.5'
                  }`}
                  aria-hidden="true"
                />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Vertical Step-Based Timeline */}
          <div className="relative lg:col-span-8">
            {/* Vertical connector rail aligned to step node center */}
            <div
              aria-hidden="true"
              className="absolute top-6 bottom-6 start-[19.5px] w-px bg-slate-200 dark:bg-slate-800"
            />

            <ol className="relative space-y-5">
              {copy.steps.map((step, idx) => {
                const isActive = idx === activeStepIndex;
                const isCompleted = idx < activeStepIndex;

                return (
                  <motion.li
                    key={step.id}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.28, delay: idx * 0.05, ease: EASE_OUT_EXPO }}
                    className="relative ps-14 sm:ps-16"
                  >
                    {/* Step Node Marker */}
                    <span
                      aria-hidden="true"
                      className={`absolute start-0 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-lg border font-mono text-xs font-semibold tabular-nums transition-colors duration-150 ${
                        isActive
                          ? 'border-[#047857] bg-[#047857] text-white dark:border-emerald-500 dark:bg-emerald-500 dark:text-slate-950'
                          : isCompleted
                          ? 'border-[#047857]/40 bg-emerald-50 text-[#047857] dark:border-emerald-500/40 dark:bg-emerald-950/60 dark:text-emerald-400'
                          : 'border-slate-200 bg-white text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300'
                      }`}
                    >
                      {isCompleted ? <Check className="h-4 w-4" /> : step.number}
                    </span>

                    {/* Step Content Card */}
                    <motion.button
                      type="button"
                      onClick={() => setActiveStepIndex(idx)}
                      aria-current={isActive ? 'step' : undefined}
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.15 }}
                      className={`w-full rounded-xl border p-6 text-start transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#047857] ${
                        isActive
                          ? 'border-[#047857]/60 bg-white shadow-xs dark:border-emerald-500/60 dark:bg-slate-900'
                          : 'border-slate-200 bg-white hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700'
                      }`}
                    >
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                        <span
                          className={`font-mono font-semibold ${
                            isActive
                              ? 'text-[#047857] dark:text-emerald-400'
                              : 'text-slate-600 dark:text-slate-300'
                          }`}
                        >
                          {step.phase}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono tabular-nums">{step.duration}</span>
                      </div>

                      <h3 className="font-display mt-1.5 text-lg font-semibold text-slate-900 dark:text-slate-100">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                        {step.summary}
                      </p>

                      <dl className="mt-5 grid grid-cols-1 gap-3 border-t border-slate-200 pt-4 text-xs dark:border-slate-800 sm:grid-cols-2">
                        <div>
                          <dt className="font-medium text-slate-500 dark:text-slate-400">
                            {step.deliverableLabel}
                          </dt>
                          <dd className="mt-0.5 font-mono font-medium text-[#047857] dark:text-emerald-400">
                            {step.deliverable}
                          </dd>
                        </div>
                        <div>
                          <dt className="font-medium text-slate-500 dark:text-slate-400">
                            {step.ownerLabel}
                          </dt>
                          <dd className="mt-0.5 font-medium text-slate-800 dark:text-slate-200">
                            {step.owner}
                          </dd>
                        </div>
                      </dl>
                    </motion.button>
                  </motion.li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
