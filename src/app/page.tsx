import NavbarComponent from '@/components/NavbarComponent'
import HomeComponent from '@/components/HomeComponent'
import ProjectComponent from '@/components/ProjectComponent'
import ExperienceComponent from '@/components/ExperienceComponent'
import ContactComponent from '@/components/ContactComponent'
import FooterComponent from '@/components/FooterComponent'

export default function HomePage() {
  return (
    <>
      <NavbarComponent />
      <div id="#">
        <HomeComponent />
      </div>
      <div id="project">
        <ProjectComponent />
      </div>
      <div id="experience">
        <ExperienceComponent />
      </div>
      <div id="contact">
        <ContactComponent />
      </div>
      <FooterComponent />
    </>
  )
}