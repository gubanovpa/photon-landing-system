import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { PropsWithChildren } from 'react';
import i18n from '@shared/lib/i18n';
import { STORAGE_KEYS } from '@shared/lib/constants';
import { getStoredValue, setStoredValue } from '@shared/lib/storage';

type Language = 'en' | 'ru';

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: PropsWithChildren) {
  const [language, setLanguageState] = useState<Language>(() =>
    getStoredValue<Language>(STORAGE_KEYS.language, 'ru'),
  );

  useEffect(() => {
    setStoredValue(STORAGE_KEYS.language, language);
    void i18n.changeLanguage(language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage: setLanguageState,
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }

  return context;
}
