import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, Download, Link2, Mail } from 'lucide-react'
import DetectionOverlay from './DetectionOverlay'
import { rotatingTitles, socials } from '../data/portfolio'

export default function Hero() {
  const [title,setTitle] = useState(0)
  useEffect(() => { const timer = window.setInterval(() => setTitle(v => (v+1)%rotatingTitles.length), 2600); return () => clearInterval(timer) },[])
  return <section id="home" className="hero section-shell">
    <div className="hero-copy">
      <motion.div className="status-pill" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}}><span/> Available for AI & Computer Vision projects</motion.div>
      <motion.p className="hero-kicker" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.15}}>MUHAMMAD</motion.p>
      <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:.22}}>Faisal<br/><em>Shakeel.</em></motion.h1>
      <motion.div className="hero-role" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.35}}><strong>Computer Vision & AI Engineer</strong><span>{rotatingTitles[title]}</span></motion.div>
      <motion.p className="hero-intro" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{delay:.45}}>I build intelligent systems that transform images, videos, and real-world data into actionable insight — from detection and segmentation to tracking, GIS, analytics, and deployment.</motion.p>
      <motion.div className="hero-actions" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{delay:.55}}>
        <a className="button primary" href="#projects">View my work <ArrowDownRight size={18}/></a><a className="button ghost" href="#contact">Start a project <ArrowUpRight size={18}/></a><a className="icon-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Download résumé"><Download size={19}/></a>
      </motion.div>
      <motion.div className="social-row" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.7}}><span>CONNECT</span><i/>
        <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Link2 size={17}/></a><a href={socials.email} aria-label="Email"><Mail size={17}/></a>
      </motion.div>
    </div>
    <motion.div className="hero-visual" initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{delay:.3,duration:.8}}><DetectionOverlay/></motion.div>
    <div className="hero-index"><span>01</span><i/><span>PORTFOLIO / 2026</span></div>
  </section>
}
