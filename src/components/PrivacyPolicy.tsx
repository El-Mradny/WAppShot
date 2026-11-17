import { useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import { PRIVACY_DATA } from '../i18n/privacyData';

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function PrivacyPolicy({ isOpen, onClose }: PrivacyPolicyProps) {
  const { lang } = useLanguage();
  const copy = PRIVACY_DATA[lang];

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-policy-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.16 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs"
            aria-hidden="true"
          />

          {/* Modal Panel */}
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.2, ease: EASE_OUT_EXPO }}
            className="relative z-10 flex max-h-[88vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-6 py-5 dark:border-slate-800">
              <div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#047857] dark:text-emerald-400">
                  <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{copy.kicker}</span>
                </div>
                <h2
                  id="privacy-policy-title"
                  className="font-display mt-1.5 text-xl font-bold text-slate-900 dark:text-slate-50 sm:text-2xl"
                >
                  {copy.title}
                </h2>
                <p className="mt-1 font-mono text-xs text-slate-500 dark:text-slate-400">
                  {copy.lastUpdated}
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label={copy.closeAria}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#047857]"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="overflow-y-auto px-6 py-5">
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {copy.intro}
              </p>

              <div className="mt-6 divide-y divide-slate-200 border-y border-slate-200 dark:divide-slate-800 dark:border-slate-800">
                {copy.sections.map((section) => (
                  <section key={section.number} className="py-4 first:pt-4 last:pb-4">
                    <h3 className="font-display text-sm font-semibold text-slate-900 dark:text-slate-100 sm:text-base">
                      <span className="font-mono me-2 text-xs font-medium text-[#047857] dark:text-emerald-400 tabular-nums">
                        {section.number}
                      </span>
                      {section.heading}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {section.body}
                    </p>
                  </section>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 bg-[#F8FAFC] px-6 py-4 dark:border-slate-800 dark:bg-slate-950">
              <p className="text-xs text-slate-600 dark:text-slate-400">
                <span>{copy.contactLabel} </span>
                <a
                  href={`mailto:${copy.contactEmail}`}
                  dir="ltr"
                  className="font-mono font-medium text-[#047857] underline underline-offset-4 hover:text-[#065F46] dark:text-emerald-400 dark:hover:text-emerald-300"
                >
                  {copy.contactEmail}
                </a>
              </p>

              <button
                type="button"
                onClick={onClose}
                className="min-h-[40px] rounded-lg bg-[#047857] px-5 py-2 text-xs font-semibold text-white hover:bg-[#065F46] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#047857]"
              >
                {copy.closeButton}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
