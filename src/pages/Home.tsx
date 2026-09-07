import { lazy, Suspense, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Workflow from '../components/Workflow'
import Services from '../components/Services'
import TechStack from '../components/TechStack'
import Credentials from '../components/Credentials'
import WhyMe from '../components/WhyMe'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Metrics = lazy(() => import('../components/Metrics'))

export default function Home() {
  useEffect(() => {
    if (!window.location.hash) return
    const scrollToHash = () => {
      const target = document.querySelector(window.location.hash)
      if (!target) return
      document.documentElement.style.scrollBehavior = 'auto'
      target.scrollIntoView()
      requestAnimationFrame(() => document.documentElement.style.removeProperty('scroll-behavior'))
    }
    const frame = requestAnimationFrame(scrollToHash)
    const settle = window.setTimeout(scrollToHash, 600)
    return () => { cancelAnimationFrame(frame); window.clearTimeout(settle) }
  }, [])
  return <><Navbar/><main><Hero/><About/><Skills/><Experience/><Projects/><Suspense fallback={<div className="section-shell section-pad">Loading metrics…</div>}><Metrics/></Suspense><Workflow/><Services/><TechStack/><Credentials/><WhyMe/><Contact/></main><Footer/></>
}
