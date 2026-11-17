import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import { METRICS_DATA, type MetricItem } from '../i18n/metricsData';

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

function AnimatedCounter({
  item,
  shouldAnimate,
}: {
  item: MetricItem;
  shouldAnimate: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState<number>(() =>
    prefersReducedMotion ? item.target : 0,
  );

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayValue(item.target);
      return;
    }

    if (!shouldAnimate) return;

    let frameId = 0;
    const duration = 1100;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(item.target * eased);

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      } else {
        setDisplayValue(item.target);
      }
    }

    frameId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frameId);
  }, [item.target, prefersReducedMotion, shouldAnimate]);

  const formatted =
    item.decimals > 0
      ? displayValue.toFixed(item.decimals)
      : Math.round(displayValue).toLocaleString('en-US');

  return (
    <span dir="ltr" className="inline-block">
      {item.prefix ?? ''}
      {formatted}
      {item.suffix}
    </span>
  );
}

export function KeyMetrics() {
  const { lang } = useLanguage();
  const copy = METRICS_DATA[lang];
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.25 });

  return (
    <section
      id="metrics"
      aria-label={copy.title}
      className="border-b border-slate-200 bg-white py-16 dark:border-slate-800 dark:bg-slate-900 sm:py-20 transition-colors duration-150"
    >
      <div ref={containerRef} className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.28, ease: EASE_OUT_EXPO }}
          className="max-w-2xl"
        >
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
        </motion.div>

        {/* 4-Column Quantitative Proof Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {copy.items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.3, delay: idx * 0.05, ease: EASE_OUT_EXPO }}
              whileHover={{ y: -2 }}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-[#F8FAFC] p-6 transition-colors duration-150 hover:border-[#047857]/50 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-emerald-500/50"
            >
              <div>
                <p className="font-mono text-xs font-medium text-slate-500 dark:text-slate-400 tabular-nums">
                  {String(idx + 1).padStart(2, '0')}
                </p>
                <p className="font-mono mt-4 text-3xl font-bold tracking-tight text-[#047857] dark:text-emerald-400 tabular-nums sm:text-4xl">
                  <AnimatedCounter item={item} shouldAnimate={isInView} />
                </p>
              </div>

              <div className="mt-6 border-t border-slate-200 pt-4 dark:border-slate-800">
                <h3 className="font-display text-base font-semibold text-slate-900 dark:text-slate-100">
                  {item.label}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  {item.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
