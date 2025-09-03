import { GiDrumKit } from 'react-icons/gi'
import AboutMeMain from './components/aboutMeSection/AboutMeMain'
import HeroGradient from './components/heroSection/HeroGradient'
import HeroMain from './components/heroSection/HeroMain'
import SubHeroSection from './components/heroSection/SubHeroSection'
import NavbarMain from './components/navbar/NavbarMain'
import SkillsMain from './components/skillSection/SkillsMain'
import SubSkill from './components/skillSection/SubSkill'
import ExperienceMain from './components/experienceSection/ExperienceMain'
import ProjectsMain from './components/projectSection/ProjectsMain'
import ContactMeMain from './components/contactMeSection/ContactMeMain'
import FooterMain from './components/footer/FooterMain'

function App() {

  return (
    <main className='font-josefin '>

      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMeMain />
      <SkillsMain />
      <SubSkill />
      <ExperienceMain />
      <ProjectsMain/>
      <ContactMeMain />
      <FooterMain />

    </main>
  )
}

export default App
