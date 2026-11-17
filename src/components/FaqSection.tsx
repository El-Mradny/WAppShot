import { useState } from 'react';
import { Plus, ArrowUpRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { buildWhatsAppUrl, type FaqCategory } from '../data/wappshotData';
import { useLanguage } from '../i18n/LanguageContext';

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function FaqSection() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<FaqCategory>('all');
  const [openId, setOpenId] = useState<string>(t.faq.items[0].id);

  const categoryTabs: { id: FaqCategory; label: string }[] = [
    { id: 'all', label: t.faq.filters.all },
    { id: 'api', label: t.faq.filters.api },
    { id: 'integration', label: t.faq.filters.integration },
    { id: 'pricing', label: t.faq.filters.pricing },
  ];

  const visibleItems =
    activeCategory === 'all'
      ? t.faq.items
      : t.faq.items.filter((item) => item.category === activeCategory);

  function handleCategoryChange(category: FaqCategory) {
    setActiveCategory(category);
    const nextList =
      category === 'all'
        ? t.faq.items
        : t.faq.items.filter((item) => item.category === category);

    if (nextList.length > 0 && !nextList.some((item) => item.id === openId)) {
      setOpenId(nextList[0].id);
    }
  }

  function toggleItem(id: string) {
    setOpenId((current) => (current === id ? '' : id));
  }

  const questionChatUrl = buildWhatsAppUrl(t.faq.escalationGreeting);

  return (
    <section
      id="faq"
      className="border-b border-slate-200 bg-white py-16 dark:border-slate-800 dark:bg-slate-900 sm:py-20 transition-colors duration-150"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
          {/* Left Column: Heading, Filter Controls & Direct Escalation */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.28, ease: EASE_OUT_EXPO }}
            className="lg:col-span-4 lg:sticky lg:top-24"
          >
            <p className="text-xs font-medium text-[#047857] dark:text-emerald-400">
              {t.faq.kicker}
            </p>
            <h2
              className="font-display mt-2 font-bold tracking-tight text-slate-900 dark:text-slate-50"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', textWrap: 'balance' }}
            >
              {t.faq.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {t.faq.subtitle}
            </p>

            {/* Functional Topic Filters */}
            <div
              role="tablist"
              aria-label="Filter FAQ by topic"
              className="mt-6 flex flex-wrap gap-1.5 rounded-lg bg-slate-100 p-1 dark:bg-slate-800"
            >
              {categoryTabs.map((tab) => {
                const isSelected = activeCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => handleCategoryChange(tab.id)}
                    className={`relative rounded-md px-3 py-1.5 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#047857] ${
                      isSelected
                        ? 'text-slate-900 dark:text-white'
                        : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                    }`}
                  >
                    {isSelected && (
                      <motion.span
                        layoutId="faq-filter-indicator"
                        transition={{ duration: 0.2, ease: EASE_OUT_EXPO }}
                        className="absolute inset-0 rounded-md bg-white shadow-xs dark:bg-slate-950"
                        aria-hidden="true"
                      />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-800">
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                {t.faq.escalationPrompt}
              </p>
              <a
                href={questionChatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-[#047857] hover:text-[#065F46] dark:text-emerald-400 dark:hover:text-emerald-300 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#047857]"
              >
                <span>{t.faq.escalationLink}</span>
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Accessible Accordion List */}
          <div className="divide-y divide-slate-200 border-y border-slate-200 dark:divide-slate-800 dark:border-slate-800 lg:col-span-8">
            {visibleItems.map((item, index) => {
              const isOpen = openId === item.id;
              const panelId = `faq-panel-${item.id}`;
              const buttonId = `faq-button-${item.id}`;

              return (
                <div key={item.id} className="py-5 first:pt-5 last:pb-5">
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleItem(item.id)}
                      className="group flex w-full items-start justify-between gap-6 text-start focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#047857]"
                    >
                      <div className="min-w-0">
                        <span className="block text-xs font-medium text-slate-500 dark:text-slate-400">
                          <span className="font-mono tabular-nums">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <span className="mx-1.5 text-slate-300 dark:text-slate-700" aria-hidden="true">
                            ·
                          </span>
                          <span>{item.categoryLabel}</span>
                        </span>
                        <span className="font-display mt-1 block text-base font-semibold text-slate-900 transition-colors duration-150 group-hover:text-[#047857] dark:text-slate-100 dark:group-hover:text-emerald-400 sm:text-lg">
                          {item.question}
                        </span>
                      </div>

                      <motion.span
                        aria-hidden="true"
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.18, ease: EASE_OUT_EXPO }}
                        className={`mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-colors duration-150 ${
                          isOpen
                            ? 'border-[#047857] bg-[#047857] text-white'
                            : 'border-slate-200 bg-white text-slate-600 group-hover:border-slate-300 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 dark:group-hover:border-slate-700'
                        }`}
                      >
                        <Plus className="h-4 w-4" />
                      </motion.span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.16, ease: EASE_OUT_EXPO }}
                        className="mt-3 pe-10 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
                      >
                        {item.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
