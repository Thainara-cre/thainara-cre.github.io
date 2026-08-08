import { useLanguage } from '../i18n/LanguageContext'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-500 light:border-slate-200">
      © {new Date().getFullYear()} Thainara Gomes. {t.footer}
    </footer>
  )
}
