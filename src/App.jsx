import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import CaseStudy from './pages/CaseStudy'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <div className="flex min-h-dvh flex-col bg-paper">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<CaseStudy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
