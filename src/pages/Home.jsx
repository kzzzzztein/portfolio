import Hero from '../components/Hero'
import Capabilities from '../components/Capabilities'
import FeaturedProjects from '../components/FeaturedProjects'
import Services from '../components/Services'
import About from '../components/About'
import Process from '../components/Process'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Capabilities />
      <FeaturedProjects />
      <Services />
      <About />
      <Process />
      <Contact />
    </>
  )
}
