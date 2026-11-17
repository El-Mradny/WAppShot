import { useState } from 'react';
import { Check, Minus } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import type { ComparisonCategory } from '../data/wappshotData';
import { useLanguage } from '../i18n/LanguageContext';

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function ComparisonSection() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<ComparisonCategory>('all');

  const filterOptions: { id: ComparisonCategory; label: string }[] = [
    { id: 'all', label: t.comparison.filters.all },
    { id: 'tracking', label: t.comparison.filters.tracking },
    { id: 'automation', label: t.comparison.filters.automation },
    { id: 'scale', label: t.comparison.filters.scale },
  ];

  const visibleRows =
    activeFilter === 'all'
      ? t.comparison.rows
      : t.comparison.rows.filter((row) => row.category === activeFilter);

  return (
    <section
      id="compare"
      className="border-b border-slate-200 bg-white py-16 dark:border-slate-800 dark:bg-slate-900 sm:py-20 transition-colors duration-150"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.28, ease: EASE_OUT_EXPO }}
          className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-medium text-[#047857] dark:text-emerald-400">
              {t.comparison.kicker}
            </p>
            <h2
              className="font-display mt-2 font-bold tracking-tight text-slate-900 dark:text-slate-50"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.35rem)', textWrap: 'balance' }}
            >
              {t.comparison.title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {t.comparison.subtitle}
            </p>
          </div>

          {/* Functional Segmented Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter comparison features"
            className="inline-flex flex-wrap items-center gap-1 self-start rounded-lg bg-slate-100 p-1 dark:bg-slate-800 lg:self-auto"
          >
            {filterOptions.map((option) => {
              const isSelected = activeFilter === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveFilter(option.id)}
                  className={`relative rounded-md px-3 py-1.5 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#047857] ${
                    isSelected
                      ? 'text-slate-900 dark:text-white'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="compare-filter-indicator"
                      transition={{ duration: 0.2, ease: EASE_OUT_EXPO }}
                      className="absolute inset-0 rounded-md bg-white shadow-xs dark:bg-slate-950"
                      aria-hidden="true"
                    />
                  )}
                  <span className="relative z-10">{option.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
          className="mt-10 overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] border-collapse text-start">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
                  <th
                    scope="col"
                    className="w-[28%] px-6 py-4 text-xs font-semibold text-slate-600 dark:text-slate-300"
                  >
                    {t.comparison.headers.capability}
                  </th>
                  <th
                    scope="col"
                    className="w-[34%] px-6 py-4 text-xs font-semibold text-slate-600 dark:text-slate-300"
                  >
                    {t.comparison.headers.businessApp}
                  </th>
                  <th
                    scope="col"
                    className="w-[38%] bg-[#ECFDF5] px-6 py-4 text-xs font-semibold text-[#065F46] dark:bg-emerald-950/60 dark:text-emerald-300"
                  >
                    {t.comparison.headers.wappshotApi}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm dark:divide-slate-800">
                <AnimatePresence mode="popLayout">
                  {visibleRows.map((row) => (
                    <motion.tr
                      key={row.feature}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.16, ease: EASE_OUT_EXPO }}
                      className="align-top transition-colors duration-150 hover:bg-slate-50/70 dark:hover:bg-slate-900/60"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4.5 font-semibold text-slate-900 dark:text-slate-100"
                      >
                        {row.feature}
                      </th>
                      <td className="px-6 py-4.5 text-slate-600 dark:text-slate-400">
                        <div className="flex items-start gap-2.5">
                          <span
                            className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400"
                            aria-label="Limited or unsupported"
                          >
                            <Minus className="h-3.5 w-3.5" aria-hidden="true" />
                          </span>
                          <span className="leading-relaxed">{row.businessApp}</span>
                        </div>
                      </td>
                      <td className="bg-[#ECFDF5]/45 px-6 py-4.5 text-slate-900 dark:bg-emerald-950/25 dark:text-slate-100">
                        <div className="flex items-start gap-2.5">
                          <span
                            className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#047857] text-white"
                            aria-label="Included"
                          >
                            <Check className="h-3.5 w-3.5" aria-hidden="true" />
                          </span>
                          <span className="font-medium leading-relaxed">{row.wappshotApi}</span>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
