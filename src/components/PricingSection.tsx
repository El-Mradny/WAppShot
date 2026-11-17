import { useState } from 'react';
import { Check, Minus, ArrowRight, MessageSquare } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { buildWhatsAppUrl } from '../data/wappshotData';
import { useLanguage } from '../i18n/LanguageContext';
import { PRICING_DATA, type BillingCycle } from '../i18n/pricingData';

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function PricingSection() {
  const { lang, isRtl } = useLanguage();
  const copy = PRICING_DATA[lang];
  const [billing, setBilling] = useState<BillingCycle>('annual');

  return (
    <section
      id="pricing"
      className="border-b border-slate-200 bg-[#F8FAFC] py-16 dark:border-slate-800 dark:bg-slate-950 sm:py-20 transition-colors duration-150"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header & Billing Cycle Toggle */}
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

          {/* Segmented Billing Cycle Switch */}
          <div className="flex items-center gap-3 self-start lg:self-auto">
            <div
              role="group"
              aria-label="Billing cycle"
              className="inline-flex items-center gap-1 rounded-lg bg-slate-200/75 p-1 dark:bg-slate-800"
            >
              {(
                [
                  { id: 'monthly', label: copy.monthlyLabel },
                  { id: 'annual', label: copy.annualLabel },
                ] as const
              ).map((option) => {
                const isSelected = billing === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setBilling(option.id)}
                    className={`relative rounded-md px-3.5 py-1.5 text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#047857] ${
                      isSelected
                        ? 'text-slate-900 dark:text-white'
                        : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                    }`}
                  >
                    {isSelected && (
                      <motion.span
                        layoutId="pricing-billing-indicator"
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

            <span className="text-xs font-semibold text-[#047857] dark:text-emerald-400 whitespace-nowrap">
              {copy.annualSavingsLabel}
            </span>
          </div>
        </motion.div>

        {/* 3-Column Pricing Tier Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-stretch">
          {copy.tiers.map((tier, idx) => {
            const displayedPrice =
              billing === 'annual' ? tier.annualPrice : tier.monthlyPrice;
            const whatsappMessage =
              billing === 'annual'
                ? tier.whatsappMessageAnnual
                : tier.whatsappMessageMonthly;
            const whatsappUrl = buildWhatsAppUrl(whatsappMessage);

            return (
              <motion.article
                key={tier.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.3, delay: idx * 0.05, ease: EASE_OUT_EXPO }}
                whileHover={{ y: -2 }}
                className={`relative flex flex-col justify-between overflow-hidden rounded-xl border bg-white p-6 transition-colors duration-150 dark:bg-slate-900 sm:p-8 ${
                  tier.highlighted
                    ? 'border-[#047857] shadow-md shadow-emerald-950/5 dark:border-emerald-500 dark:shadow-emerald-950/30'
                    : 'border-slate-200 hover:border-slate-300 dark:border-slate-800 dark:hover:border-slate-700'
                }`}
              >
                {tier.highlighted && (
                  <div
                    className="absolute inset-x-0 top-0 h-1 bg-[#047857] dark:bg-emerald-500"
                    aria-hidden="true"
                  />
                )}

                <div>
                  <div className="min-h-[20px]">
                    {tier.kicker ? (
                      <p className="text-xs font-semibold text-[#047857] dark:text-emerald-400">
                        {tier.kicker}
                      </p>
                    ) : (
                      <p className="font-mono text-xs font-medium text-slate-500 dark:text-slate-400 tabular-nums">
                        {tier.id === 'starter' ? '01' : '03'}
                      </p>
                    )}
                  </div>

                  <h3 className="font-display mt-2 text-2xl font-bold text-slate-900 dark:text-slate-50">
                    {tier.name}
                  </h3>
                  <p className="mt-2 min-h-[44px] text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {tier.description}
                  </p>

                  {/* Price & Structured Capacity Specs */}
                  <div className="mt-6 border-t border-slate-200 pt-5 dark:border-slate-800">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${tier.id}-${billing}`}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.15, ease: EASE_OUT_EXPO }}
                        className="flex items-baseline gap-1.5"
                      >
                        <span className="font-mono text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 tabular-nums sm:text-4xl">
                          {displayedPrice}
                        </span>
                        {tier.periodLabel && (
                          <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                            {tier.periodLabel}
                          </span>
                        )}
                      </motion.div>
                    </AnimatePresence>

                    <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">
                      {billing === 'annual' && tier.annualNote
                        ? tier.annualNote
                        : tier.id === 'enterprise'
                        ? tier.annualNote
                        : copy.monthlyLabel}
                    </p>

                    <dl className="mt-5 divide-y divide-slate-200 border-y border-slate-200 text-xs dark:divide-slate-800 dark:border-slate-800">
                      <div className="flex items-center justify-between gap-4 py-2.5">
                        <dt className="font-medium text-slate-500 dark:text-slate-400">
                          {copy.usersLabel}
                        </dt>
                        <dd className="font-mono font-semibold text-slate-900 dark:text-slate-100 tabular-nums text-end">
                          {tier.usersSpec}
                        </dd>
                      </div>
                      <div className="flex items-center justify-between gap-4 py-2.5">
                        <dt className="font-medium text-slate-500 dark:text-slate-400">
                          {copy.webhooksLabel}
                        </dt>
                        <dd
                          className={`font-mono font-semibold text-end ${
                            tier.id === 'starter'
                              ? 'text-slate-500 dark:text-slate-400'
                              : 'text-[#047857] dark:text-emerald-400'
                          }`}
                        >
                          {tier.webhooksSpec}
                        </dd>
                      </div>
                    </dl>
                  </div>

                  {/* Unique Capabilities List */}
                  <p className="mt-5 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {copy.includedHeading}
                  </p>
                  <ul className="mt-3 space-y-3 text-sm">
                    {tier.features.map((feature) => (
                      <li key={feature.text} className="flex items-start gap-2.5">
                        {feature.included ? (
                          <span
                            className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                              tier.highlighted
                                ? 'bg-[#047857] text-white'
                                : 'bg-emerald-50 text-[#047857] dark:bg-emerald-950/70 dark:text-emerald-400'
                            }`}
                            aria-hidden="true"
                          >
                            <Check className="h-3.5 w-3.5" />
                          </span>
                        ) : (
                          <span
                            className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400"
                            aria-hidden="true"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </span>
                        )}
                        <span
                          className={`leading-snug ${
                            feature.included
                              ? 'text-slate-700 dark:text-slate-200'
                              : 'text-slate-500 dark:text-slate-400'
                          }`}
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tier Conversion CTA */}
                <div className="mt-8 pt-2">
                  <motion.a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.985 }}
                    transition={{ duration: 0.15 }}
                    className={`group flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 ${
                      tier.highlighted
                        ? 'bg-[#047857] text-white hover:bg-[#065F46] focus-visible:outline-[#047857]'
                        : 'border border-slate-300 bg-white text-slate-900 hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:border-slate-600 dark:hover:bg-slate-800 focus-visible:outline-slate-900 dark:focus-visible:outline-slate-200'
                    }`}
                  >
                    <MessageSquare className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>{tier.ctaLabel}</span>
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
              </motion.article>
            );
          })}
        </div>

        {/* Template Message Text Disclaimer */}
        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-slate-600 dark:text-slate-400 sm:text-sm">
          <strong className="font-semibold text-slate-900 dark:text-slate-100">
            {copy.notePrefix}
          </strong>{' '}
          {copy.noteBody}
        </p>
      </div>
    </section>
  );
}
