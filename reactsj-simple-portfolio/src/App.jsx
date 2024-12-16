import './assets/App.css'
import HeroSection from './components/HeroSection'
import NavBarSection from './components/NavBarSection'
import SkillsSection from './components/SkillsSection'
import AboutSection from './components/AboutSection'
import ProjectSection from './components/ProjectSection'
import EducationSection from './components/EducationSection'
import FooterSection from './components/FooterSection'

function App() {
  return (
    <>
      <NavBarSection />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <SkillsSection />
      <EducationSection />
      <FooterSection />
    </>
  )
}

export default App
