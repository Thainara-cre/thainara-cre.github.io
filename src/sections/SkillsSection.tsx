import { motion } from 'framer-motion'
import { SectionTitle } from '../components/SectionTitle'
import { skills } from '../data/portfolio'
import { useLanguage } from '../i18n/LanguageContext'
import { revealWithDelay } from '../lib/motion'

export function SkillsSection() {
  const { t } = useLanguage()

  return (
    <section id="skills" aria-labelledby="skills-title" className="section-shell bg-white/[.02] light:bg-slate-100/70">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow={t.skills.eyebrow} title={t.skills.title} titleId="skills-title" text={t.skills.description} />

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" role="list">
          {skills.map(({ key, icon: Icon }, index) => (
            <motion.li {...revealWithDelay(index * 0.04)} key={key} className="skill-card group">
              <div className="mb-5 inline-flex rounded-2xl bg-violet-400/10 p-3 text-violet-300 transition group-hover:scale-110 light:text-violet-700">
                <Icon size={24} aria-hidden="true" />
              </div>
              <h3 className="font-bold text-white light:text-slate-900">{t.skills.items[key]}</h3>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
