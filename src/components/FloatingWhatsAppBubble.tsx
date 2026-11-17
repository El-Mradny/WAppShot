import { motion } from 'motion/react';
import { buildWhatsAppUrl } from '../data/wappshotData';
import { useLanguage } from '../i18n/LanguageContext';

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function FloatingWhatsAppBubble() {
  const { t } = useLanguage();
  const whatsappUrl = buildWhatsAppUrl(t.floatingChat.greeting);

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.floatingChat.ariaLabel}
      initial={{ opacity: 0, y: 12, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.28, delay: 0.15, ease: EASE_OUT_EXPO }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className="fixed bottom-4 right-4 z-40 inline-flex min-h-[44px] items-center gap-2.5 rounded-full border border-white/20 bg-[#047857] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 hover:bg-[#065F46] dark:border-emerald-400/30 dark:shadow-black/40 transition-colors duration-150 whitespace-nowrap shrink-0 sm:bottom-6 sm:right-6 sm:px-5 sm:py-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#047857]"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="h-5 w-5 shrink-0"
      >
        <path d="M12.03 2C6.51 2 2.04 6.47 2.04 11.99c0 1.76.46 3.48 1.33 4.99L2 22l5.15-1.35a9.95 9.95 0 0 0 4.88 1.27h.01c5.52 0 9.99-4.47 9.99-9.99A9.93 9.93 0 0 0 12.03 2zm5.82 14.17c-.24.68-1.41 1.3-1.95 1.38-.5.08-1.14.11-1.84-.11-.43-.14-.98-.32-1.69-.63-2.97-1.28-4.91-4.29-5.06-4.49-.15-.2-1.21-1.61-1.21-3.07s.76-2.18 1.04-2.48c.27-.3.59-.37.79-.37.2 0 .4 0 .57.01.18.01.43-.07.67.51.24.59.84 2.04.91 2.19.08.15.13.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.38-.44.51-.15.15-.3.31-.13.61.17.3.77 1.27 1.66 2.06 1.14 1.01 2.1 1.33 2.4 1.48.3.15.47.12.64-.08.18-.2.74-.86.94-1.16.2-.3.4-.25.67-.15.27.1 1.73.81 2.02.96.3.15.5.22.57.35.08.12.08.71-.16 1.39z" />
      </svg>
      <span>{t.floatingChat.label}</span>
    </motion.a>
  );
}
