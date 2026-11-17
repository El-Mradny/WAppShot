import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import { TESTIMONIALS_DATA } from '../i18n/testimonialsData';

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Testimonials() {
  const { lang, isRtl } = useLanguage();
  const copy = TESTIMONIALS_DATA[lang];
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isPaused, setIsPaused] = useState(false);

  const items = copy.items;
  const currentItem = items[activeIndex] ?? items[0];

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [isPaused, items.length]);

  function goToIndex(nextIndex: number) {
    if (nextIndex === activeIndex) return;
    setDirection(nextIndex > activeIndex ? 1 : -1);
    setActiveIndex(nextIndex);
  }

  function handlePrev() {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  }

  function handleNext() {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % items.length);
  }

  const slideOffset = (isRtl ? -1 : 1) * direction * 18;

  return (
    <section
      id="testimonials"
      aria-label={copy.title}
      className="border-b border-slate-200 bg-[#F8FAFC] py-16 dark:border-slate-800 dark:bg-slate-950 sm:py-20 transition-colors duration-150"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header Row + Carousel Controls */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.28, ease: EASE_OUT_EXPO }}
          className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-medium text-[#047857] dark:text-emerald-400">
              {copy.kicker}
            </p>
            <h2
              className="font-display mt-2 font-bold tracking-tight text-slate-900 dark:text-slate-50"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.35rem)', textWrap: 'balance' }}
            >
              {copy.title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {copy.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3 self-start lg:self-auto">
            <span className="font-mono text-xs font-medium text-slate-500 dark:text-slate-400 tabular-nums">
              {String(activeIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label={copy.prevAria}
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:bg-slate-800 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#047857]"
              >
                <ChevronLeft
                  className={`h-5 w-5 ${isRtl ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label={copy.nextAria}
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:bg-slate-800 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#047857]"
              >
                <ChevronRight
                  className={`h-5 w-5 ${isRtl ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Industry Selector Tabs */}
        <div
          role="tablist"
          aria-label={copy.title}
          className="mt-8 flex w-fit max-w-full flex-wrap items-center gap-1.5 rounded-lg bg-slate-200/70 p-1 dark:bg-slate-800"
        >
          {items.map((item, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => goToIndex(idx)}
                className={`relative rounded-md px-3 py-1.5 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#047857] ${
                  isSelected
                    ? 'text-slate-900 dark:text-white'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                }`}
              >
                {isSelected && (
                  <motion.span
                    layoutId="testimonial-industry-indicator"
                    transition={{ duration: 0.2, ease: EASE_OUT_EXPO }}
                    className="absolute inset-0 rounded-md bg-white shadow-xs dark:bg-slate-950"
                    aria-hidden="true"
                  />
                )}
                <span className="relative z-10">{item.shortIndustry}</span>
              </button>
            );
          })}
        </div>

        {/* Carousel Spotlight Stage */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.article
              key={currentItem.id}
              initial={{ opacity: 0, x: slideOffset }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -slideOffset }}
              transition={{ duration: 0.2, ease: EASE_OUT_EXPO }}
              className="grid grid-cols-1 divide-y divide-slate-200 dark:divide-slate-800 lg:grid-cols-12 lg:divide-x lg:divide-y-0"
            >
              {/* Left Column: Industry Field & Quantitative Outcome */}
              <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-5">
                <div>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {currentItem.meta}
                  </p>
                  <h3 className="font-display mt-3 text-xl font-bold text-slate-900 dark:text-slate-100 sm:text-2xl">
                    {currentItem.industry}
                  </h3>
                </div>

                <div className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-800">
                  <p className="font-mono text-xl font-semibold tracking-tight text-[#047857] dark:text-emerald-400 tabular-nums sm:text-2xl">
                    {currentItem.metric}
                  </p>
                </div>
              </div>

              {/* Right Column: Quote & Operational Breakdown */}
              <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-7">
                <div>
                  <Quote
                    className="h-6 w-6 text-slate-300 dark:text-slate-700"
                    aria-hidden="true"
                  />
                  <blockquote className="mt-3 text-base leading-relaxed font-medium text-slate-900 dark:text-slate-100 sm:text-lg">
                    &ldquo;{currentItem.quote}&rdquo;
                  </blockquote>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-6 border-t border-slate-200 pt-6 dark:border-slate-800 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      {copy.challengeLabel}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {currentItem.challenge}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#047857] dark:text-emerald-400">
                      {copy.workflowLabel}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                      {currentItem.workflow}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
