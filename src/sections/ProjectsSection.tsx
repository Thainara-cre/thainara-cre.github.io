import { motion } from 'framer-motion'
import { SectionTitle } from '../components/SectionTitle'
import { projects } from '../data/portfolio'
import { revealWithDelay } from '../lib/motion'

export function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="section-shell">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          eyebrow="Projetos & experiência"
          title="Onde código encontra impacto."
          titleId="projects-title"
          text="Algumas frentes que representam minha experiência técnica, sem expor detalhes confidenciais de projetos corporativos."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article {...revealWithDelay(index * 0.08)} key={project.title} className="project-card">
              <p className="text-xs font-bold uppercase tracking-[.18em] text-violet-400">{project.eyebrow}</p>
              <h3 className="mt-4 text-2xl font-black text-white light:text-slate-950">{project.title}</h3>
              <p className="mt-4 min-h-24 leading-7 text-slate-400 light:text-slate-600">{project.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label={`Tecnologias de ${project.title}`}>
                {project.tags.map((tag) => (
                  <li key={tag} className="tag">{tag}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
