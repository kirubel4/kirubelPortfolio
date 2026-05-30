'use client'
import Cursor from '../components/Cursor'
import Particles from '../components/Particles'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ProjectsSection from '../components/ProjectsSection'
import SkillsSection from '../components/SkillsSection'
import ContactSection from '../components/ContactSection'

export default function Home() {
  return (
    <>
      <Cursor />
      <Particles />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <footer style={{
        padding: '20px 5%',
        borderTop: '1px solid #ffffff06',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        position: 'relative', zIndex: 1,
      }}>
        <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 13, color: '#333355' }}>
          <span style={{ color: '#00f5d4' }}>&lt;</span>kirubel<span style={{ color: '#00f5d4' }}> /&gt;</span>
        </span>
      </footer>
    </>
  )
}
