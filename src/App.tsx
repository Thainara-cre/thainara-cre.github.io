import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { LanguageProvider, useLanguage } from './i18n/LanguageContext'
import { AboutSection } from './sections/AboutSection'
import { ContactSection } from './sections/ContactSection'
import { EducationSection } from './sections/EducationSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { HeroSection } from './sections/HeroSection'
import { OtherProjectsSection } from './sections/OtherProjectsSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { SkillsSection } from './sections/SkillsSection'

function Portfolio() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-slate-100 transition-colors light:bg-[#f8fafc] light:text-slate-900">
      <a className="skip-link" href="#main-content">
        {t.accessibility.skipToContent}
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <OtherProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <Portfolio />
    </LanguageProvider>
  )
}

export default App
