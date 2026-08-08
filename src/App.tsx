import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { AboutSection } from './sections/AboutSection'
import { ContactSection } from './sections/ContactSection'
import { HeroSection } from './sections/HeroSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { SkillsSection } from './sections/SkillsSection'

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-slate-100 transition-colors light:bg-[#f8fafc] light:text-slate-900">
      <a className="skip-link" href="#main-content">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
