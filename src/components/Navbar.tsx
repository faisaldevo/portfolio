import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import { navItems } from '../data/portfolio'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [open,setOpen] = useState(false); const [scrolled,setScrolled] = useState(false); const [active,setActive] = useState('home')
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      const sections = navItems.map(n => document.getElementById(n.toLowerCase().replace(' ','-'))).filter(Boolean) as HTMLElement[]
      const current = [...sections].reverse().find(s => s.getBoundingClientRect().top <= 140)
      if (current) setActive(current.id)
    }
    onScroll(); window.addEventListener('scroll', onScroll, { passive:true }); return () => window.removeEventListener('scroll', onScroll)
  },[])
  const go = (name:string) => { setOpen(false); document.getElementById(name.toLowerCase().replace(' ','-'))?.scrollIntoView({ behavior:'smooth' }) }
  return <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
    <a className="brand" href="#home" aria-label="Faisal Shakeel home"><span>FS</span><div>FAISAL<span>.AI</span></div></a>
    <nav className="desktop-nav" aria-label="Primary navigation">{navItems.map(item => <button className={active === item.toLowerCase().replace(' ','-') ? 'active' : ''} onClick={() => go(item)} key={item}>{item}</button>)}</nav>
    <div className="nav-actions"><ThemeToggle/><a className="resume-link" href="/resume.pdf" target="_blank" rel="noopener noreferrer"><Download size={15}/> Résumé</a><button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open} aria-controls="mobile-navigation">{open?<X/>:<Menu/>}</button></div>
    <AnimatePresence>{open && <motion.nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}}>{navItems.map(item => <button onClick={() => go(item)} key={item}>{item}</button>)}<a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download Résumé</a></motion.nav>}</AnimatePresence>
  </header>
}
