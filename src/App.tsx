import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, Github, Linkedin, Mail, MapPin, MessageCircle, Sparkles } from 'lucide-react'
import { Header } from './components/Header'
import { SectionTitle } from './components/SectionTitle'
import { highlights, projects, skills } from './data/portfolio'

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: .15 }, transition: { duration: .6 } }

function App() {
  return <div className="min-h-screen overflow-hidden bg-slate-950 text-slate-100 transition-colors light:bg-[#f8fafc] light:text-slate-900">
    <Header />
    <main>
      <section id="home" className="relative flex min-h-screen items-center pt-24">
        <div className="orb left-[8%] top-[12%] h-80 w-80 bg-violet-600/25" />
        <div className="orb bottom-[8%] right-[8%] h-96 w-96 bg-cyan-500/15" />
        <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 py-16 lg:grid-cols-[1.1fr_.9fr]">
          <motion.div {...fade}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-sm font-semibold text-violet-300 light:text-violet-700"><Sparkles size={15}/> Disponível para novos desafios</div>
            <p className="mb-3 font-semibold text-slate-400 light:text-slate-600">Olá, eu sou</p>
            <h1 className="max-w-3xl text-5xl font-black leading-[.98] tracking-[-.055em] text-white sm:text-6xl lg:text-7xl light:text-slate-950">Thainara<br/><span className="gradient-text">Gomes</span></h1>
            <h2 className="mt-6 text-xl font-bold text-slate-200 sm:text-2xl light:text-slate-700">Desenvolvedora Full Stack</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-400 sm:text-lg light:text-slate-600">Construo soluções robustas combinando <strong className="text-slate-200 light:text-slate-800">Java, Spring Boot, React, Cloud e Inteligência Artificial</strong>.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="primary-button" href="#projects">Ver projetos <ArrowRight size={18}/></a>
              <a className="secondary-button" href="#contact">Falar comigo</a>
            </div>
            <div className="mt-9 flex gap-3">
              <a className="social-button" aria-label="GitHub" href="https://github.com/Thainara-cre" target="_blank" rel="noreferrer"><Github size={19}/></a>
              <a className="social-button" aria-label="LinkedIn" href="https://www.linkedin.com/in/thainara-da-silva-gomes/" target="_blank" rel="noreferrer"><Linkedin size={19}/></a>
              <a className="social-button" aria-label="E-mail" href="mailto:thainaracaracol@gmail.com"><Mail size={19}/></a>
            </div>
          </motion.div>
          <motion.div {...fade} transition={{ duration: .7, delay: .1 }} className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-5 rounded-[2.7rem] bg-gradient-to-br from-violet-500/20 to-cyan-400/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-white/5 p-3 shadow-glow light:border-slate-200 light:bg-white">
              <div className="overflow-hidden rounded-[2rem] bg-gradient-to-b from-violet-500/10 to-slate-900/20"><img className="aspect-[4/5] w-full object-cover object-top" src="/images/eu1.png" alt="Thainara Gomes"/></div>
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-slate-900/85 px-5 py-4 backdrop-blur-xl light:bg-white/90"><p className="text-xs font-bold uppercase tracking-widest text-slate-500">Stack</p><p className="mt-1 font-bold">Java • React • IA</p></div>
          </motion.div>
        </div>
        <a href="#about" aria-label="Ir para sobre" className="absolute bottom-7 left-1/2 -translate-x-1/2 animate-bounce text-slate-500"><ArrowDown size={20}/></a>
      </section>

      <section id="about" className="section-shell">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle eyebrow="Sobre mim" title="Tecnologia que resolve problemas reais." />
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
            <motion.div {...fade} className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 light:border-slate-200 light:bg-white"><img className="h-full min-h-[360px] w-full object-cover object-top" src="/images/eu2.png" alt="Thainara Gomes"/></motion.div>
            <motion.div {...fade} className="flex flex-col justify-center">
              <p className="text-lg leading-8 text-slate-300 light:text-slate-700">Sou desenvolvedora Full Stack com atuação em aplicações corporativas, integrações e experiências web. No backend, trabalho principalmente com <strong>Java e Spring Boot</strong>; no frontend, com <strong>React e TypeScript</strong>.</p>
              <p className="mt-5 leading-8 text-slate-400 light:text-slate-600">Também tenho experiência com mensageria, cloud, bancos de dados e soluções que incorporam Inteligência Artificial, conectando engenharia de software a automações e experiências conversacionais.</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">{highlights.map(item => <div key={item.value} className="glass-card p-5"><p className="font-black text-violet-300 light:text-violet-700">{item.value}</p><p className="mt-1 text-sm text-slate-500">{item.label}</p></div>)}</div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="skills" className="section-shell bg-white/[.02] light:bg-slate-100/70">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle eyebrow="Tecnologias" title="Minha stack principal" text="Ferramentas que uso para construir produtos do backend à interface, passando por cloud, dados e IA." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{skills.map(({name, icon: Icon}, i) => <motion.div {...fade} transition={{ duration: .45, delay: i * .04 }} key={name} className="skill-card group"><div className="mb-5 inline-flex rounded-2xl bg-violet-400/10 p-3 text-violet-300 transition group-hover:scale-110 light:text-violet-700"><Icon size={24}/></div><h3 className="font-bold text-white light:text-slate-900">{name}</h3></motion.div>)}</div>
        </div>
      </section>

      <section id="projects" className="section-shell">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle eyebrow="Projetos & experiência" title="Onde código encontra impacto." text="Algumas frentes que representam minha experiência técnica. Os cards evitam expor detalhes confidenciais de projetos corporativos." />
          <div className="grid gap-5 lg:grid-cols-3">{projects.map((project, i) => <motion.article {...fade} transition={{ duration: .5, delay: i * .08 }} key={project.title} className="project-card"><p className="text-xs font-bold uppercase tracking-[.18em] text-violet-400">{project.eyebrow}</p><h3 className="mt-4 text-2xl font-black text-white light:text-slate-950">{project.title}</h3><p className="mt-4 min-h-24 leading-7 text-slate-400 light:text-slate-600">{project.description}</p><div className="mt-6 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}</div></motion.article>)}</div>
        </div>
      </section>

      <section id="contact" className="section-shell">
        <div className="mx-auto max-w-6xl px-5">
          <motion.div {...fade} className="relative overflow-hidden rounded-[2rem] border border-violet-400/20 bg-gradient-to-br from-violet-500/15 via-slate-900 to-cyan-500/10 px-6 py-12 sm:px-12 light:via-white">
            <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div><p className="mb-3 text-sm font-bold uppercase tracking-[.22em] text-violet-400">Contato</p><h2 className="max-w-2xl text-3xl font-black tracking-tight text-white sm:text-5xl light:text-slate-950">Vamos construir algo interessante?</h2><p className="mt-5 max-w-xl leading-7 text-slate-400 light:text-slate-600">Estou aberta a conversar sobre oportunidades, produtos, engenharia de software e projetos de tecnologia.</p></div>
              <a className="primary-button whitespace-nowrap" href="mailto:thainaracaracol@gmail.com">Enviar e-mail <Mail size={18}/></a>
            </div>
            <div className="relative z-10 mt-10 flex flex-wrap gap-x-7 gap-y-4 text-sm text-slate-400 light:text-slate-600"><span className="flex items-center gap-2"><MapPin size={17}/> São Paulo, Brasil</span><a className="flex items-center gap-2 hover:text-white light:hover:text-slate-950" href="https://wa.me/5511967247265" target="_blank" rel="noreferrer"><MessageCircle size={17}/> WhatsApp</a><a className="flex items-center gap-2 hover:text-white light:hover:text-slate-950" href="https://www.linkedin.com/in/thainara-da-silva-gomes/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a></div>
          </motion.div>
        </div>
      </section>
    </main>
    <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500 light:border-slate-200">© {new Date().getFullYear()} Thainara Gomes. Feito com React, TypeScript e muito café.</footer>
  </div>
}

export default App
