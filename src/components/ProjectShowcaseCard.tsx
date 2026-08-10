import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  BookOpenCheck,
  BrainCircuit,
  Clock3,
  Database,
  Globe2,
  Landmark,
  MonitorPlay,
  TerminalSquare,
} from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import type { OtherProject } from '../data/portfolio'
import { revealWithDelay } from '../lib/motion'

type ProjectCopy = {
  title: string
  description: string
  category: string
}

type ProjectLabels = {
  publicBadge: string
  repositoryCta: string
  referenceCta: string
  technologiesFor: string
}

interface ProjectShowcaseCardProps {
  project: OtherProject
  copy: ProjectCopy
  labels: ProjectLabels
  index: number
}

function ProjectVisual({ variant }: { variant: OtherProject['visual'] }) {
  const shell = 'relative h-48 overflow-hidden border-b border-white/10 bg-slate-950/60 light:border-slate-200 light:bg-slate-100'

  if (variant === 'ai') {
    return (
      <div className={shell} aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-transparent to-cyan-400/10" />
        <div className="relative flex h-full flex-col justify-between p-5">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-400/10 px-3 py-1 text-xs font-bold text-violet-200 light:text-violet-800">
              <BrainCircuit size={14} /> Java 23
            </span>
            <TerminalSquare className="text-slate-500" size={22} />
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-4 font-mono text-xs shadow-2xl light:bg-slate-900">
            <p className="text-slate-500">$ token_count</p>
            <p className="mt-2 text-slate-200">prompt → <span className="text-cyan-300">JTokkit</span></p>
            <p className="mt-1 text-slate-200">request → <span className="text-violet-300">OpenAI API</span></p>
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'focus') {
    return (
      <div className={shell} aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/15 via-transparent to-amber-400/10" />
        <div className="relative grid h-full place-items-center p-5">
          <div className="grid h-32 w-32 place-items-center rounded-full border-[10px] border-white/10 bg-white/5 shadow-2xl light:border-slate-200 light:bg-white">
            <div className="text-center">
              <Clock3 className="mx-auto mb-1 text-rose-300 light:text-rose-700" size={20} />
              <p className="text-3xl font-black tracking-tight text-white light:text-slate-950">25:00</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[.22em] text-slate-500">focus</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'finance') {
    return (
      <div className={shell} aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/15 via-transparent to-cyan-400/10" />
        <div className="relative h-full p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-300 light:text-slate-700">
              <Landmark size={18} /> MyFinance
            </div>
            <Database className="text-emerald-300 light:text-emerald-700" size={19} />
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-3 light:border-slate-200 light:bg-white">
              <p className="text-[10px] uppercase tracking-wider text-slate-500">receitas</p>
              <div className="mt-3 h-2 w-4/5 rounded-full bg-emerald-400/50" />
              <div className="mt-2 h-2 w-3/5 rounded-full bg-emerald-400/20" />
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3 light:border-slate-200 light:bg-white">
              <p className="text-[10px] uppercase tracking-wider text-slate-500">transações</p>
              <div className="mt-3 h-2 w-3/4 rounded-full bg-cyan-400/40" />
              <div className="mt-2 h-2 w-1/2 rounded-full bg-cyan-400/20" />
            </div>
          </div>
          <div className="mt-3 rounded-xl border border-white/10 bg-slate-950/35 p-3 light:border-slate-200 light:bg-white/70">
            <div className="flex h-10 items-end gap-2">
              {[45, 70, 52, 88, 64, 100, 76].map((height) => (
                <span key={height} className="flex-1 rounded-t bg-violet-400/35" style={{ height: `${height}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={shell} aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-transparent to-violet-400/10" />
      <div className="relative h-full p-5 font-mono text-xs">
        <div className="mb-4 flex items-center justify-between text-slate-500">
          <span>Swagger / REST API</span>
          <TerminalSquare size={18} />
        </div>
        <div className="space-y-2">
          <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 light:border-slate-200 light:bg-white"><span className="mr-3 font-black text-cyan-300 light:text-cyan-700">GET</span>/Tarefa/ObterTodos</div>
          <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 light:border-slate-200 light:bg-white"><span className="mr-3 font-black text-emerald-300 light:text-emerald-700">POST</span>/Tarefa</div>
          <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 light:border-slate-200 light:bg-white"><span className="mr-3 font-black text-amber-300 light:text-amber-700">PUT</span>/Tarefa/{'{id}'}</div>
        </div>
      </div>
    </div>
  )
}

export function ProjectShowcaseCard({ project, copy, labels, index }: ProjectShowcaseCardProps) {
  return (
    <motion.article
      {...revealWithDelay(index * 0.06)}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[.035] transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:shadow-glow light:border-slate-200 light:bg-white"
    >
      <ProjectVisual variant={project.visual} />

      <div className="flex h-[calc(100%-12rem)] flex-col p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="rounded-full bg-violet-400/10 px-3 py-1 text-xs font-bold text-violet-300 light:text-violet-700">{copy.category}</span>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500">
            <Globe2 size={14} aria-hidden="true" /> {labels.publicBadge}
          </span>
        </div>

        <h3 className="mt-5 text-2xl font-black text-white light:text-slate-950">{copy.title}</h3>
        <p className="mt-3 flex-1 leading-7 text-slate-400 light:text-slate-600">{copy.description}</p>

        <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${labels.technologiesFor} ${copy.title}`}>
          {project.tags.map((tag) => <li key={tag} className="tag">{tag}</li>)}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5 light:border-slate-200">
          {project.demoUrl && (
            <a
              className="inline-flex items-center gap-2 text-sm font-bold text-cyan-300 transition hover:text-cyan-200 light:text-cyan-700 light:hover:text-cyan-800"
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MonitorPlay size={17} aria-hidden="true" /> Demo <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          )}

          <a
            className="inline-flex items-center gap-2 text-sm font-bold text-violet-300 transition hover:text-violet-200 light:text-violet-700 light:hover:text-violet-800"
            href={project.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={17} aria-hidden="true" /> {labels.repositoryCta} <ArrowUpRight size={15} aria-hidden="true" />
          </a>

          {project.referenceUrl && (
            <a
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 transition hover:text-white light:text-slate-600 light:hover:text-slate-950"
              href={project.referenceUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BookOpenCheck size={16} aria-hidden="true" /> {labels.referenceCta}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
