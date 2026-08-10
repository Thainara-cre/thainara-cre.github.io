import { motion } from 'framer-motion'
import { BriefcaseBusiness, CheckCircle2 } from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa'
import { SectionTitle } from '../components/SectionTitle'
import { experiences } from '../data/experience'
import { siteConfig } from '../data/site'
import { useLanguage } from '../i18n/LanguageContext'
import { revealWithDelay } from '../lib/motion'

export function ExperienceSection() {
  const { t } = useLanguage()

  return (
    <section id="experience" aria-labelledby="experience-title" className="section-shell bg-white/[.02] light:bg-slate-100/70">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle eyebrow={t.experience.eyebrow} title={t.experience.title} titleId="experience-title" text={t.experience.description} />
          <a className="secondary-button mb-10 w-fit whitespace-nowrap" href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={18} aria-hidden="true" /> {t.experience.linkedinCta}
          </a>
        </div>

        <ol className="mx-auto max-w-5xl" role="list">
          {experiences.map((experience, index) => {
            const copy = t.experience.items[experience.key]
            const isLast = index === experiences.length - 1

            return (
              <motion.li {...revealWithDelay(index * 0.07)} key={experience.key} className="relative grid gap-4 pb-8 pl-10 sm:grid-cols-[10rem_1fr] sm:gap-8 sm:pl-12">
                <span aria-hidden="true" className="absolute left-0 top-1 grid h-8 w-8 place-items-center rounded-full border border-violet-400/30 bg-slate-950 text-violet-300 shadow-[0_0_24px_rgba(139,92,246,.18)] light:bg-white light:text-violet-700">
                  <BriefcaseBusiness size={16} />
                </span>
                {!isLast && <span aria-hidden="true" className="absolute left-[15px] top-9 h-[calc(100%-1.25rem)] w-px bg-gradient-to-b from-violet-400/40 to-white/5 light:to-slate-200" />}

                <div className="pt-1">
                  <p className="text-sm font-bold text-violet-300 light:text-violet-700">{copy.period}</p>
                  {experience.current && (
                    <span className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-xs font-bold text-emerald-300 light:text-emerald-700">
                      <CheckCircle2 size={13} aria-hidden="true" /> {t.experience.currentBadge}
                    </span>
                  )}
                </div>

                <article className="glass-card p-6 sm:p-7">
                  <p className="text-sm font-semibold text-slate-400 light:text-slate-600">{copy.company}</p>
                  <h3 className="mt-1 text-xl font-black text-white sm:text-2xl light:text-slate-950">{copy.role}</h3>
                  <p className="mt-4 leading-7 text-slate-400 light:text-slate-600">{copy.summary}</p>

                  <ul className="mt-5 space-y-3" role="list">
                    {copy.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm leading-6 text-slate-300 light:text-slate-700">
                        <CheckCircle2 className="mt-1 shrink-0 text-violet-400" size={16} aria-hidden="true" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${t.accessibility.technologiesFor} ${copy.company}`}>
                    {experience.tags.map((tag) => <li key={tag} className="tag">{tag}</li>)}
                  </ul>
                </article>
              </motion.li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
