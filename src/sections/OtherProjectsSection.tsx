import { FaGithub } from 'react-icons/fa'
import { ProjectShowcaseCard } from '../components/ProjectShowcaseCard'
import { SectionTitle } from '../components/SectionTitle'
import { otherProjects } from '../data/portfolio'
import { siteConfig } from '../data/site'
import { useLanguage } from '../i18n/LanguageContext'

export function OtherProjectsSection() {
  const { t } = useLanguage()

  return (
    <section id="other-projects" aria-labelledby="other-projects-title" className="section-shell bg-white/[.02] light:bg-slate-100/70">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle
            eyebrow={t.otherProjects.eyebrow}
            title={t.otherProjects.title}
            titleId="other-projects-title"
            text={t.otherProjects.description}
          />
          <a className="secondary-button mb-10 w-fit whitespace-nowrap" href={siteConfig.github} target="_blank" rel="noopener noreferrer">
            <FaGithub size={18} aria-hidden="true" /> {t.otherProjects.allProjectsCta}
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {otherProjects.map((project, index) => (
            <ProjectShowcaseCard
              key={project.key}
              project={project}
              copy={t.otherProjects.items[project.key]}
              index={index}
              labels={{
                publicBadge: t.otherProjects.publicBadge,
                repositoryCta: t.otherProjects.repositoryCta,
                referenceCta: t.otherProjects.referenceCta,
                technologiesFor: t.accessibility.technologiesFor,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
