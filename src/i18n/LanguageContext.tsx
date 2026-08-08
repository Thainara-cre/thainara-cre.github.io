import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { localeOptions, translations, type Locale, type Messages } from './translations'

const STORAGE_KEY = 'portfolio-language'

interface LanguageContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Messages
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function isLocale(value: string | null): value is Locale {
  return value === 'pt' || value === 'en' || value === 'es'
}

function getInitialLocale(): Locale {
  const params = new URLSearchParams(window.location.search)
  const queryLocale = params.get('lang')
  if (isLocale(queryLocale)) return queryLocale

  const storedLocale = window.localStorage.getItem(STORAGE_KEY)
  if (isLocale(storedLocale)) return storedLocale

  const browserLanguage = window.navigator.language.toLowerCase()
  if (browserLanguage.startsWith('pt')) return 'pt'
  if (browserLanguage.startsWith('es')) return 'es'
  return 'en'
}

function updateMetaContent(selector: string, content: string) {
  const element = document.querySelector<HTMLMetaElement>(selector)
  if (element) element.content = content
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale)
  const t = translations[locale]

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale)

    const htmlLang = localeOptions.find((option) => option.code === locale)?.htmlLang ?? 'en'
    document.documentElement.lang = htmlLang
    document.title = t.meta.title
    updateMetaContent('meta[name="description"]', t.meta.description)
    updateMetaContent('meta[property="og:title"]', t.meta.title)
    updateMetaContent('meta[property="og:description"]', t.meta.description)

    const url = new URL(window.location.href)
    url.searchParams.set('lang', locale)
    window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`)
  }, [locale, t])

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, t])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}
