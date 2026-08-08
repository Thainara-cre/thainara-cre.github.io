import { motion } from 'framer-motion'
import { SectionTitle } from '../components/SectionTitle'
import { highlights } from '../data/portfolio'
import { reveal } from '../lib/motion'

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-shell">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow="Sobre mim" title="Tecnologia que resolve problemas reais." titleId="about-title" />

        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <motion.div {...reveal} className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 light:border-slate-200 light:bg-white">
            <img
              className="h-full min-h-[360px] w-full object-cover object-top"
              src="/images/eu2.png"
              alt="Thainara Gomes"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          <motion.div {...reveal} className="flex flex-col justify-center">
            <p className="text-lg leading-8 text-slate-300 light:text-slate-700">
              Sou desenvolvedora Full Stack com atuação em aplicações corporativas, integrações e experiências web. No backend, trabalho principalmente com <strong>Java e Spring Boot</strong>; no frontend, com <strong>React e TypeScript</strong>.
            </p>
            <p className="mt-5 leading-8 text-slate-400 light:text-slate-600">
              Também tenho experiência com mensageria, cloud, bancos de dados e soluções que incorporam Inteligência Artificial, conectando engenharia de software a automações e experiências conversacionais.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
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
