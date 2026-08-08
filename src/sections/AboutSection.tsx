import { motion } from 'framer-motion'
import { SectionTitle } from '../components/SectionTitle'
import { useLanguage } from '../i18n/LanguageContext'
import { reveal } from '../lib/motion'

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" aria-labelledby="about-title" className="section-shell">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow={t.about.eyebrow} title={t.about.title} titleId="about-title" />

        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <motion.div {...reveal} className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 light:border-slate-200 light:bg-white">
            <img className="h-full min-h-[360px] w-full object-cover object-top" src="/images/eu2.png" alt={t.about.portraitAlt} loading="lazy" decoding="async" />
          </motion.div>

          <motion.div {...reveal} className="flex flex-col justify-center">
            <p className="text-lg leading-8 text-slate-300 light:text-slate-700">{t.about.paragraph1}</p>
            <p className="mt-5 leading-8 text-slate-400 light:text-slate-600">{t.about.paragraph2}</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {t.about.highlights.map((item) => (
                <div key={item.value} className="glass-card p-5">
                  <p className="font-black text-violet-300 light:text-violet-700">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
