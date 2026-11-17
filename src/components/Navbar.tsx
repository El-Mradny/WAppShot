import { useEffect, useRef, useState } from 'react';
import { Menu, X, MessageSquare, Globe, ChevronDown, Check, Sun, Moon } from 'lucide-react';
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react';
import { buildWhatsAppUrl } from '../data/wappshotData';
import { useLanguage } from '../i18n/LanguageContext';
import { LANGUAGE_OPTIONS, type LanguageCode } from '../i18n/translations';
import { useTheme } from '../theme/ThemeContext';

export function Navbar() {
  const { lang, setLang, t, currentOption } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 32,
    restDelta: 0.001,
  });

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target as Node)
      ) {
        setLangMenuOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setLangMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const navLinks = [
    { label: t.nav.capabilities, href: '#capabilities' },
    { label: t.nav.compare, href: '#compare' },
    { label: t.nav.pricing, href: '#pricing' },
    { label: t.nav.faq, href: '#faq' },
    { label: t.nav.contact, href: '#whatsapp-cta' },
  ];

  const directChatUrl = buildWhatsAppUrl(t.nav.chatGreeting);

  function handleSelectLanguage(code: LanguageCode) {
    setLang(code);
    setLangMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/95 transition-colors duration-150">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6 lg:gap-8 lg:px-8">
        {/* Zone 1: Brand Mark & Wordmark */}
        <a
          href="#"
          className="inline-flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#047857]"
        >
          <img
            src="/assets/aistudio/WAppShot_fb0f63b4.png"
            alt="WAppShot logo"
            width={32}
            height={32}
            className="h-8 w-8 rounded-lg object-cover shrink-0"
          />
          <span>WAppShot</span>
        </a>

        {/* Zone 2: 5 concise single-line nav links */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-slate-900 hover:text-slate-900 dark:hover:border-emerald-400 dark:hover:text-white transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#047857]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Theme Toggle + Language Switcher + Primary CTA */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Global Dark / Light Mode Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-pressed={isDark}
            aria-label={isDark ? t.nav.toggleThemeToLightAria : t.nav.toggleThemeToDarkAria}
            title={isDark ? t.nav.toggleThemeToLightAria : t.nav.toggleThemeToDarkAria}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:bg-slate-800 transition-colors duration-150 shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#047857]"
          >
            {isDark ? (
              <Sun className="h-4 w-4 text-amber-400" aria-hidden="true" />
            ) : (
              <Moon className="h-4 w-4 text-slate-700" aria-hidden="true" />
            )}
          </button>

          {/* Language Dropdown Toggle */}
          <div ref={langDropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setLangMenuOpen((prev) => !prev)}
              aria-haspopup="listbox"
              aria-expanded={langMenuOpen}
              aria-label={t.nav.languageAria}
              className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 text-xs font-semibold text-slate-700 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:bg-slate-800 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#047857]"
            >
              <Globe
                className="h-3.5 w-3.5 shrink-0 text-[#047857] dark:text-emerald-400"
                aria-hidden="true"
              />
              <span>{currentOption.shortLabel}</span>
              <ChevronDown
                className={`h-3.5 w-3.5 shrink-0 text-slate-500 dark:text-slate-400 transition-transform duration-150 ${
                  langMenuOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>

            <AnimatePresence>
              {langMenuOpen && (
                <motion.div
                  role="listbox"
                  aria-label={t.nav.languageAria}
                  initial={{ opacity: 0, y: 4, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.98 }}
                  transition={{ duration: 0.14, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute end-0 mt-2 w-40 overflow-hidden rounded-xl border border-slate-200 bg-white p-1 shadow-lg dark:border-slate-800 dark:bg-slate-900"
                >
                  {LANGUAGE_OPTIONS.map((option) => {
                    const selected = option.code === lang;
                    return (
                      <button
                        key={option.code}
                        type="button"
                        role="option"
                        aria-selected={selected}
                        onClick={() => handleSelectLanguage(option.code)}
                        className={`flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-xs font-medium transition-colors duration-150 whitespace-nowrap ${
                          selected
                            ? 'bg-[#ECFDF5] text-[#065F46] font-semibold dark:bg-emerald-950/70 dark:text-emerald-300'
                            : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span className="font-mono text-[11px] text-slate-400 dark:text-slate-500">
                            {option.shortLabel}
                          </span>
                          <span>{option.nativeLabel}</span>
                        </span>
                        {selected && (
                          <Check
                            className="h-3.5 w-3.5 shrink-0 text-[#047857] dark:text-emerald-400"
                            aria-hidden="true"
                          />
                        )}
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.a
            href={directChatUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="hidden sm:inline-flex h-9 items-center gap-2 rounded-lg bg-[#047857] px-4 text-xs font-semibold text-white hover:bg-[#065F46] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#047857]"
          >
            <MessageSquare className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span>{t.nav.chatCta}</span>
          </motion.a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? t.nav.closeMenuAria : t.nav.openMenuAria}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-800 lg:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#047857]"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Scroll reading indicator (compositor transform only) */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX }}
        className="h-[2px] w-full origin-left bg-[#047857] dark:bg-emerald-500"
      />

      {/* Mobile navigation drawer */}
      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-slate-200 bg-white px-4 py-4 dark:border-slate-800 dark:bg-slate-950 lg:hidden"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-2 text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={directChatUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-lg bg-[#047857] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#065F46]"
              >
                <MessageSquare className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{t.nav.chatCta}</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
