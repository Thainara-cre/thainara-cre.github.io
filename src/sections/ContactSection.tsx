import { motion } from 'framer-motion'
import { Mail, MapPin, MessageCircle } from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa'
import { siteConfig } from '../data/site'
import { useLanguage } from '../i18n/LanguageContext'
import { reveal } from '../lib/motion'

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" aria-labelledby="contact-title" className="section-shell">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div {...reveal} className="relative overflow-hidden rounded-[2rem] border border-violet-400/20 bg-gradient-to-br from-violet-500/15 via-slate-900 to-cyan-500/10 px-6 py-12 sm:px-12 light:via-white">
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[.22em] text-violet-400">{t.contact.eyebrow}</p>
              <h2 id="contact-title" className="max-w-2xl text-3xl font-black tracking-tight text-white sm:text-5xl light:text-slate-950">{t.contact.title}</h2>
              <p className="mt-5 max-w-xl leading-7 text-slate-400 light:text-slate-600">{t.contact.description}</p>
            </div>

            <a className="primary-button whitespace-nowrap" href={`mailto:${siteConfig.email}`}>
              {t.contact.emailCta} <Mail size={18} aria-hidden="true" />
            </a>
          </div>

          <div className="relative z-10 mt-10 flex flex-wrap gap-x-7 gap-y-4 text-sm text-slate-400 light:text-slate-600">
            <span className="flex items-center gap-2"><MapPin size={17} aria-hidden="true" /> {t.contact.location}</span>
            <a className="flex items-center gap-2 transition hover:text-white light:hover:text-slate-950" href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={17} aria-hidden="true" /> WhatsApp</a>
            <a className="flex items-center gap-2 transition hover:text-white light:hover:text-slate-950" href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin size={17} aria-hidden="true" /> LinkedIn</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
