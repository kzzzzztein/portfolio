import Hero from '../components/hero/Hero'
import ProjectsGrid from '../components/projects/ProjectsGrid'
import WhatIBuild from '../components/home/WhatIBuild'
import Process from '../components/home/Process'
import ContactCard from '../components/contact/ContactCard'

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsGrid />
      <WhatIBuild />
      <Process />
      <ContactCard />
    </>
  )
}
