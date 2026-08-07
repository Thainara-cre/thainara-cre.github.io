import { Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const links = [
  ['Início', 'home'], ['Sobre', 'about'], ['Skills', 'skills'], ['Projetos', 'projects'], ['Contato', 'contact'],
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(true)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('light', !dark)
  }, [dark])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'border-b border-white/10 bg-slate-950/75 backdrop-blur-xl light:bg-white/80' : ''}`}>
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="text-lg font-black tracking-tight text-white light:text-slate-950">THAINARA<span className="text-violet-400">.</span></a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map(([label, id]) => <a key={id} className="nav-link" href={`#${id}`}>{label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <button aria-label="Alternar tema" onClick={() => setDark(v => !v)} className="icon-button">{dark ? <Sun size={18}/> : <Moon size={18}/>}</button>
          <button aria-label="Abrir menu" onClick={() => setOpen(v => !v)} className="icon-button md:hidden">{open ? <X size={19}/> : <Menu size={19}/>}</button>
        </div>
      </div>
      {open && <div className="mx-4 mb-4 rounded-2xl border border-white/10 bg-slate-900/95 p-4 shadow-2xl md:hidden light:bg-white">{links.map(([label,id]) => <a onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-slate-200 hover:bg-white/5 light:text-slate-700" key={id} href={`#${id}`}>{label}</a>)}</div>}
    </header>
  )
}
