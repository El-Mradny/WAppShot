import { useState } from 'react';
import { ArrowRight, MessageSquare, BarChart3, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { buildWhatsAppUrl } from '../data/wappshotData';
import { useLanguage } from '../i18n/LanguageContext';

const HERO_IMAGE_PATH = '/src/assets/images/hero_wappshot_workspace_1794895326381.jpg';
const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function HeroSection() {
  const { t, isRtl } = useLanguage();
  const [imageError, setImageError] = useState(false);

  const heroWhatsAppUrl = buildWhatsAppUrl(t.hero.heroChatGreeting);

  return (
    <section className="border-b border-slate-200 bg-[#F8FAFC] dark:border-slate-800 dark:bg-slate-950 transition-colors duration-150">
      <div className="mx-auto max-w-6xl px-4 pt-12 pb-12 sm:px-6 lg:px-8 lg:pt-16 lg:pb-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-12">
          {/* Left Column: Value Proposition & Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.32, ease: EASE_OUT_EXPO }}
            className="flex flex-col justify-between lg:col-span-6"
          >
            <div>
              <p className="text-xs font-medium tracking-normal text-slate-600 dark:text-slate-400">
                {t.hero.kickerParts[0]}
                <span className="mx-2 text-slate-300 dark:text-slate-700" aria-hidden="true">
                  ·
                </span>
                {t.hero.kickerParts[1]}
                <span className="mx-2 text-slate-300 dark:text-slate-700" aria-hidden="true">
                  ·
                </span>
                {t.hero.kickerParts[2]}
              </p>

              <h1
                className="font-display mt-5 font-bold tracking-tight text-slate-900 dark:text-slate-50"
                style={{
                  fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
                  lineHeight: 1.12,
                  textWrap: 'balance',
                }}
              >
                {t.hero.headline}
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
                {t.hero.subheadline}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <motion.a
                href={heroWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.985 }}
                transition={{ duration: 0.15 }}
                className="group inline-flex min-h-[44px] items-center justify-center gap-2.5 rounded-lg bg-[#047857] px-6 py-3 text-sm font-semibold text-white hover:bg-[#065F46] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#047857]"
              >
                <MessageSquare className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{t.hero.primaryCta}</span>
                <ArrowRight
                  className={`h-4 w-4 shrink-0 transition-transform duration-150 ${
                    isRtl
                      ? 'rotate-180 group-hover:-translate-x-0.5'
                      : 'group-hover:translate-x-0.5'
                  }`}
                  aria-hidden="true"
                />
              </motion.a>

              <motion.a
                href="#compare"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.985 }}
                transition={{ duration: 0.15 }}
                className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-600 dark:hover:bg-slate-800 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 dark:focus-visible:outline-slate-200"
              >
                <span>{t.hero.secondaryCta}</span>
                <ArrowRight
                  className={`h-4 w-4 shrink-0 text-slate-500 dark:text-slate-400 ${
                    isRtl ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </motion.a>
            </div>

            <div
              aria-label={t.trust.securityLabel}
              className="mt-6 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-medium text-slate-600 dark:text-slate-400"
            >
              <ShieldCheck
                className="h-4 w-4 shrink-0 text-[#047857] dark:text-emerald-400"
                aria-hidden="true"
              />
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {t.trust.gdpr}
              </span>
              <span className="text-slate-300 dark:text-slate-700" aria-hidden="true">
                ·
              </span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {t.trust.iso}
              </span>
              <span className="text-slate-300 dark:text-slate-700" aria-hidden="true">
                ·
              </span>
              <span>{t.trust.securityLabel}</span>
            </div>
          </motion.div>

          {/* Right Column: Editorial Workspace Visual */}
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.38, delay: 0.06, ease: EASE_OUT_EXPO }}
            className="lg:col-span-6"
          >
            <div className="relative h-full min-h-[280px] overflow-hidden rounded-xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900">
              {!imageError ? (
                <img
                  src={HERO_IMAGE_PATH}
                  alt={t.hero.imageAlt}
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.015] lg:h-full"
                />
              ) : (
                <div className="flex h-full min-h-[300px] w-full flex-col items-center justify-center bg-gradient-to-br from-slate-100 via-slate-50 to-emerald-50 dark:from-slate-900 dark:via-slate-950 dark:to-emerald-950/30 p-8 text-center">
                  <BarChart3
                    className="h-10 w-10 text-[#047857] dark:text-emerald-400"
                    aria-hidden="true"
                  />
                  <p className="font-display mt-3 text-lg font-semibold text-slate-900 dark:text-slate-100">
                    {t.hero.fallbackTitle}
                  </p>
                  <p className="mt-1 max-w-xs text-sm text-slate-600 dark:text-slate-400">
                    {t.hero.fallbackSubtitle}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Full-Width 4-Column Benchmark Strip */}
        <div className="mt-12 grid grid-cols-1 gap-6 border-t border-slate-200 pt-8 dark:border-slate-800 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {t.hero.kpis.map((item, idx) => (
            <motion.div
              key={`${item.metric}-${idx}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28, delay: 0.1 + idx * 0.05, ease: EASE_OUT_EXPO }}
              className="flex flex-col"
            >
              <span className="font-mono text-2xl font-medium tracking-tight text-slate-900 dark:text-slate-50 tabular-nums sm:text-3xl">
                {item.metric}
              </span>
              <span className="mt-1.5 text-sm leading-snug text-slate-600 dark:text-slate-400">
                {item.description}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
