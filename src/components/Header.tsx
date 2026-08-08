import { Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navigation } from '../data/site'
import { useTheme } from '../hooks/useTheme'
import { useLanguage } from '../i18n/LanguageContext'
import { localeOptions } from '../i18n/translations'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { isDark, toggleTheme } = useTheme()
  const { locale, setLocale, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${isScrolled ? 'border-b border-white/10 bg-slate-950/75 backdrop-blur-xl light:bg-white/80' : ''}`}>
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="text-lg font-black tracking-tight text-white light:text-slate-950" aria-label={t.accessibility.goHome}>
          THAINARA<span className="text-violet-400">.</span>
        </a>

        <nav aria-label={t.accessibility.mainNavigation} className="hidden items-center gap-6 lg:flex">
          {navigation.map(({ key, id }) => (
            <a key={id} className="nav-link" href={`#${id}`}>{t.navigation[key]}</a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center rounded-full border border-white/10 bg-white/5 p-1 sm:flex light:border-slate-200 light:bg-white" role="group" aria-label={t.accessibility.languageSelector}>
            {localeOptions.map((option) => (
              <button
                key={option.code}
                type="button"
                onClick={() => setLocale(option.code)}
                aria-pressed={locale === option.code}
                className={`rounded-full px-2.5 py-1.5 text-xs font-bold transition ${locale === option.code ? 'bg-violet-600 text-white' : 'text-slate-400 hover:text-white light:text-slate-600 light:hover:text-slate-950'}`}
              >
                {option.label}
              </button>
            ))}
          </div>

          <button type="button" aria-label={isDark ? t.accessibility.lightTheme : t.accessibility.darkTheme} title={isDark ? t.accessibility.lightTheme : t.accessibility.darkTheme} onClick={toggleTheme} className="icon-button">
            {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>

          <button type="button" aria-label={isMenuOpen ? t.accessibility.closeMenu : t.accessibility.openMenu} aria-expanded={isMenuOpen} aria-controls="mobile-navigation" onClick={() => setIsMenuOpen((value) => !value)} className="icon-button lg:hidden">
            {isMenuOpen ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav id="mobile-navigation" aria-label={t.accessibility.mobileNavigation} className="mx-4 mb-4 rounded-2xl border border-white/10 bg-slate-900/95 p-4 shadow-2xl lg:hidden light:bg-white">
          <div className="mb-3 flex items-center gap-2 border-b border-white/10 px-2 pb-3 sm:hidden light:border-slate-200" role="group" aria-label={t.accessibility.languageSelector}>
            {localeOptions.map((option) => (
              <button key={option.code} type="button" onClick={() => setLocale(option.code)} aria-pressed={locale === option.code} className={`rounded-lg px-3 py-2 text-xs font-bold transition ${locale === option.code ? 'bg-violet-600 text-white' : 'text-slate-400 light:text-slate-600'}`}>
                {option.label}
              </button>
            ))}
          </div>
          {navigation.map(({ key, id }) => (
            <a onClick={closeMenu} className="block rounded-xl px-4 py-3 text-slate-200 transition hover:bg-white/5 light:text-slate-700 light:hover:bg-slate-100" key={id} href={`#${id}`}>
              {t.navigation[key]}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
