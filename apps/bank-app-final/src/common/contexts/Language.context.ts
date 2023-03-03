import { createContext } from 'react';

export type Lang = 'pl' | 'en';

export const DEFAULT_LANG: Lang = 'en';

export const LanguageContext = createContext<Lang>(DEFAULT_LANG);

export const LanguageContextProvider = LanguageContext.Provider;
