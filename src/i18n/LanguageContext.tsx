import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import {
  LANGUAGE_OPTIONS,
  TRANSLATIONS,
  type LanguageCode,
  type LanguageOption,
  type TranslationBundle,
} from './translations';

const STORAGE_KEY = 'wappshot_lang';

interface LanguageContextValue {
  lang: LanguageCode;
  setLang: (code: LanguageCode) => void;
  t: TranslationBundle;
  currentOption: LanguageOption;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLanguage(): LanguageCode {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY) as LanguageCode | null;
    if (saved && (saved === 'en' || saved === 'es' || saved === 'ar' || saved === 'it')) {
      return saved;
    }
  } catch {
    // Ignore storage access errors in restricted contexts
  }
  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LanguageCode>(getInitialLanguage);

  const currentOption =
    LANGUAGE_OPTIONS.find((item) => item.code === lang) ?? LANGUAGE_OPTIONS[0];

  useEffect(() => {
    document.documentElement.lang = currentOption.code;
    document.documentElement.dir = currentOption.dir;
    try {
      window.localStorage.setItem(STORAGE_KEY, currentOption.code);
    } catch {
      // Ignore storage access errors
    }
  }, [currentOption]);

  function setLang(code: LanguageCode) {
    setLangState(code);
  }

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        t: TRANSLATIONS[lang],
        currentOption,
        isRtl: currentOption.dir === 'rtl',
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
