import { ShieldCheck } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { PRIVACY_DATA } from '../i18n/privacyData';

interface FooterProps {
  onOpenPrivacy: () => void;
}

export function Footer({ onOpenPrivacy }: FooterProps) {
  const { lang, t } = useLanguage();
  const privacyLabel = PRIVACY_DATA[lang].linkLabel;

  return (
    <footer className="border-t border-slate-200 bg-white py-10 dark:border-slate-800 dark:bg-slate-900 transition-colors duration-150">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="inline-flex items-center gap-2 font-display text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#047857]"
            >
              <img
                src="/assets/aistudio/WAppShot_fb0f63b4.png"
                alt="WAppShot logo"
                width={28}
                height={28}
                className="h-7 w-7 rounded-md object-cover shrink-0"
              />
              <span>WAppShot</span>
            </a>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              <i>{t.footer.byText}</i> <strong>{t.footer.brandBy}</strong>
            </span>
          </div>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{t.footer.tagline}</p>
        </div>

        <div className="flex flex-col items-start gap-2.5 sm:items-end">
          <div
            aria-label={t.trust.securityLabel}
            className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-[#F8FAFC] px-3 py-1.5 text-xs text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
          >
            <ShieldCheck
              className="h-4 w-4 shrink-0 text-[#047857] dark:text-emerald-400"
              aria-hidden="true"
            />
            <span className="font-semibold text-slate-900 dark:text-slate-100">
              {t.trust.gdpr}
            </span>
            <span className="text-slate-300 dark:text-slate-700" aria-hidden="true">
              ·
            </span>
            <span className="font-semibold text-slate-900 dark:text-slate-100">
              {t.trust.iso}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-500 dark:text-slate-400">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="font-medium text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-[#047857] hover:decoration-[#047857] dark:text-slate-300 dark:decoration-slate-700 dark:hover:text-emerald-400 dark:hover:decoration-emerald-400 transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#047857]"
            >
              {privacyLabel}
            </button>
            <span className="text-slate-300 dark:text-slate-700" aria-hidden="true">
              ·
            </span>
            <p className="whitespace-nowrap">
              © {new Date().getFullYear()} {t.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
