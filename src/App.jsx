import { Routes, Route } from 'react-router-dom'
import PillNav from './components/layout/PillNav'
import Footer from './components/layout/Footer'
import PageBackdrop from './components/layout/PageBackdrop'
import SiteFrame from './components/layout/SiteFrame'
import Home from './pages/Home'
import About from './pages/About'
import CaseStudy from './pages/CaseStudy'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <div className="relative flex min-h-dvh flex-col">
      <PageBackdrop />
      <SiteFrame />
      <PillNav />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects/:slug" element={<CaseStudy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
