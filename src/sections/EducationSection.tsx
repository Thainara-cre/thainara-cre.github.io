import { motion } from 'framer-motion'
import { BookOpen, GraduationCap, Languages } from 'lucide-react'
import { SectionTitle } from '../components/SectionTitle'
import { courseItems, educationItems } from '../data/education'
import { useLanguage } from '../i18n/LanguageContext'
import { revealWithDelay } from '../lib/motion'

export function EducationSection() {
  const { t } = useLanguage()

  return (
    <section id="education" aria-labelledby="education-title" className="section-shell bg-white/[.02] light:bg-slate-100/70">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow={t.education.eyebrow} title={t.education.title} titleId="education-title" text={t.education.description} />

        <div className="grid gap-5 md:grid-cols-2">
          {educationItems.map((item, index) => {
            const copy = t.education.items[item.key]
            return (
              <motion.article {...revealWithDelay(index * 0.08)} key={item.key} className="glass-card p-6 sm:p-7">
                <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-violet-400/10 text-violet-300 light:text-violet-700">
                  <GraduationCap size={22} aria-hidden="true" />
                </div>
                <p className="text-sm font-bold text-violet-300 light:text-violet-700">{copy.institution}</p>
                <h3 className="mt-2 text-xl font-black text-white light:text-slate-950">{copy.degree}</h3>
                <p className="mt-3 text-sm text-slate-400 light:text-slate-600">{copy.period}</p>
              </motion.article>
            )
          })}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1.35fr_.65fr]">
          <motion.div {...revealWithDelay(0.12)} className="glass-card p-6 sm:p-7">
            <div className="mb-5 flex items-center gap-3">
              <BookOpen className="text-violet-300 light:text-violet-700" size={21} aria-hidden="true" />
              <h3 className="text-lg font-black text-white light:text-slate-950">{t.education.coursesTitle}</h3>
            </div>
            <ul className="space-y-5" role="list">
              {courseItems.map((item) => {
                const copy = t.education.courses[item.key]
                return (
                  <li key={item.key} className="border-b border-white/5 pb-5 last:border-0 last:pb-0 light:border-slate-200">
                    <p className="font-bold text-slate-100 light:text-slate-900">{copy.name}</p>
                    <p className="mt-1 text-sm text-slate-400 light:text-slate-600">{copy.provider} · {copy.duration}</p>
                  </li>
                )
              })}
            </ul>
          </motion.div>

          <motion.div {...revealWithDelay(0.18)} className="glass-card p-6 sm:p-7">
            <div className="mb-5 flex items-center gap-3">
              <Languages className="text-violet-300 light:text-violet-700" size={21} aria-hidden="true" />
              <h3 className="text-lg font-black text-white light:text-slate-950">{t.education.languagesTitle}</h3>
            </div>
            <ul className="space-y-4" role="list">
              {t.education.languages.map((language) => (
                <li key={language.name} className="flex items-center justify-between gap-4">
                  <span className="font-semibold text-slate-200 light:text-slate-800">{language.name}</span>
                  <span className="tag">{language.level}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
