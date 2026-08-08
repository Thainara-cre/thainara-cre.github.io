import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { SectionTitle } from '../components/SectionTitle'
import { otherProjects } from '../data/portfolio'
import { siteConfig } from '../data/site'
import { useLanguage } from '../i18n/LanguageContext'
import { revealWithDelay } from '../lib/motion'

export function OtherProjectsSection() {
  const { t } = useLanguage()

  return (
    <section id="other-projects" aria-labelledby="other-projects-title" className="section-shell bg-white/[.02] light:bg-slate-100/70">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle eyebrow={t.otherProjects.eyebrow} title={t.otherProjects.title} titleId="other-projects-title" text={t.otherProjects.description} />
          <a className="secondary-button mb-10 w-fit whitespace-nowrap" href={siteConfig.github} target="_blank" rel="noopener noreferrer">
            <FaGithub size={18} aria-hidden="true" /> {t.otherProjects.allProjectsCta}
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {otherProjects.map((project, index) => {
            const copy = t.otherProjects.items[project.key]
            return (
              <motion.article {...revealWithDelay(index * 0.06)} key={project.key} className="project-card flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-violet-400/10 text-violet-300 light:text-violet-700">
                    <FaGithub size={21} aria-hidden="true" />
                  </div>
                  <a className="social-button" href={project.repositoryUrl} target="_blank" rel="noopener noreferrer" aria-label={`${t.otherProjects.repositoryCta}: ${copy.title}`}>
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                </div>

                <h3 className="mt-6 text-2xl font-black text-white light:text-slate-950">{copy.title}</h3>
                <p className="mt-4 flex-1 leading-7 text-slate-400 light:text-slate-600">{copy.description}</p>

                <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${t.accessibility.technologiesFor} ${copy.title}`}>
                  {project.tags.map((tag) => <li key={tag} className="tag">{tag}</li>)}
                </ul>

                <a className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-violet-300 transition hover:text-violet-200 light:text-violet-700 light:hover:text-violet-800" href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">
                  {t.otherProjects.repositoryCta} <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
