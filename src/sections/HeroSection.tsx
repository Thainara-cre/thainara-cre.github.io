import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, FileText, Mail, Sparkles } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { siteConfig } from '../data/site'
import { useLanguage } from '../i18n/LanguageContext'
import { reveal, revealWithDelay } from '../lib/motion'

export function HeroSection() {
  const { locale, t } = useLanguage()

  return (
    <section id="home" aria-labelledby="hero-title" className="relative flex min-h-screen items-center pt-24">
      <div aria-hidden="true" className="orb left-[8%] top-[12%] h-80 w-80 bg-violet-600/25" />
      <div aria-hidden="true" className="orb bottom-[8%] right-[8%] h-96 w-96 bg-cyan-500/15" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 py-16 lg:grid-cols-[1.1fr_.9fr]">
        <motion.div {...reveal}>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-sm font-semibold text-violet-300 light:text-violet-700">
            <Sparkles size={15} aria-hidden="true" /> {t.hero.availability}
          </span>
          <p className="mb-3 font-semibold text-slate-400 light:text-slate-600">{t.hero.greeting}</p>
          <h1 id="hero-title" className="max-w-3xl text-5xl font-black leading-[.98] tracking-[-.055em] text-white sm:text-6xl lg:text-7xl light:text-slate-950">
            Thainara<br /><span className="gradient-text">Gomes</span>
          </h1>
          <h2 className="mt-6 text-xl font-bold text-slate-200 sm:text-2xl light:text-slate-700">{t.hero.role}</h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-slate-400 sm:text-lg light:text-slate-600">{t.hero.description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a className="primary-button" href="#other-projects">{t.hero.projectsCta} <ArrowRight size={18} aria-hidden="true" /></a>
            <a className="secondary-button" href="#contact">{t.hero.contactCta}</a>
            <a className="secondary-button" href={`/curriculo.html?lang=${locale}`} target="_blank" rel="noopener noreferrer">
              <FileText size={18} aria-hidden="true" /> CV
            </a>
          </div>

          <div className="mt-9 flex gap-3" aria-label={t.accessibility.socialLinks}>
            <a className="social-button" aria-label="GitHub" href={siteConfig.github} target="_blank" rel="noopener noreferrer"><FaGithub size={19} aria-hidden="true" /></a>
            <a className="social-button" aria-label="LinkedIn" href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin size={19} aria-hidden="true" /></a>
            <a className="social-button" aria-label="E-mail" href={`mailto:${siteConfig.email}`}><Mail size={19} aria-hidden="true" /></a>
          </div>
        </motion.div>

        <motion.div {...revealWithDelay(0.1)} className="relative mx-auto w-full max-w-md">
          <div aria-hidden="true" className="absolute -inset-5 rounded-[2.7rem] bg-gradient-to-br from-violet-500/20 to-cyan-400/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-white/5 p-3 shadow-glow light:border-slate-200 light:bg-white">
            <div className="overflow-hidden rounded-[2rem] bg-gradient-to-b from-violet-500/10 to-slate-900/20">
              <img className="aspect-[4/5] w-full object-cover object-top" src="/images/eu1.png" alt={t.hero.portraitAlt} loading="eager" fetchPriority="high" decoding="async" />
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-slate-900/85 px-5 py-4 backdrop-blur-xl light:bg-white/90">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{t.hero.stackLabel}</p>
            <p className="mt-1 font-bold">{t.hero.stackValue}</p>
          </div>
        </motion.div>
      </div>

      <a href="#about" aria-label={t.accessibility.aboutLink} className="absolute bottom-7 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
        <ArrowDown size={20} aria-hidden="true" />
      </a>
    </section>
  )
}
