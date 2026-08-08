import { Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navigation } from '../data/site'
import { useTheme } from '../hooks/useTheme'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { isDark, toggleTheme } = useTheme()

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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        isScrolled
          ? 'border-b border-white/10 bg-slate-950/75 backdrop-blur-xl light:bg-white/80'
          : ''
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5">
        <a
          href="#home"
          className="text-lg font-black tracking-tight text-white light:text-slate-950"
          aria-label="Ir para o início"
        >
          THAINARA<span className="text-violet-400">.</span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 md:flex">
          {navigation.map(({ label, id }) => (
            <a key={id} className="nav-link" href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
            title={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
            onClick={toggleTheme}
            className="icon-button"
          >
            {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>

          <button
            type="button"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((value) => !value)}
            className="icon-button md:hidden"
          >
            {isMenuOpen ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Navegação móvel"
          className="mx-4 mb-4 rounded-2xl border border-white/10 bg-slate-900/95 p-4 shadow-2xl md:hidden light:bg-white"
        >
          {navigation.map(({ label, id }) => (
            <a
              onClick={closeMenu}
              className="block rounded-xl px-4 py-3 text-slate-200 transition hover:bg-white/5 light:text-slate-700 light:hover:bg-slate-100"
              key={id}
              href={`#${id}`}
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
