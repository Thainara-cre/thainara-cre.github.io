import { motion } from 'framer-motion'
import { SectionTitle } from '../components/SectionTitle'
import { featuredProjects } from '../data/portfolio'
import { useLanguage } from '../i18n/LanguageContext'
import { revealWithDelay } from '../lib/motion'

export function ProjectsSection() {
  const { t } = useLanguage()

  return (
    <section id="projects" aria-labelledby="projects-title" className="section-shell">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow={t.projects.eyebrow} title={t.projects.title} titleId="projects-title" text={t.projects.description} />

        <div className="grid gap-5 lg:grid-cols-3">
          {featuredProjects.map((project, index) => {
            const copy = t.projects.items[project.key]
            return (
              <motion.article {...revealWithDelay(index * 0.08)} key={project.key} className="project-card">
                <p className="text-xs font-bold uppercase tracking-[.18em] text-violet-400">{copy.eyebrow}</p>
                <h3 className="mt-4 text-2xl font-black text-white light:text-slate-950">{copy.title}</h3>
                <p className="mt-4 min-h-24 leading-7 text-slate-400 light:text-slate-600">{copy.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${t.accessibility.technologiesFor} ${copy.title}`}>
                  {project.tags.map((tag) => <li key={tag} className="tag">{tag}</li>)}
                </ul>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
