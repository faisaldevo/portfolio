import { motion } from 'framer-motion'
import { Award, Database, Map, ScanLine } from 'lucide-react'
import SectionTitle from './SectionTitle'
import AnimatedCounter from './AnimatedCounter'
import { highlights } from '../data/portfolio'

export default function About(){
  return <section id="about" className="section-shell section-pad">
    <SectionTitle eyebrow="01 / PROFILE" title="Turning visual data into operational intelligence." />
    <div className="about-grid">
      <motion.div className="about-copy reveal" initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
        <p className="lead">I’m a Computer Vision, Machine Learning, and Data Analytics professional building systems for infrastructure, sports, surveillance, OCR, and geospatial asset management.</p>
        <p>My work combines model development with practical data engineering: collecting and annotating data, training and validating models, tracking objects, extracting analytics, integrating APIs, and delivering clear GIS and reporting outputs.</p>
        <div className="about-facts"><div><ScanLine/><span>Specialization<strong>Vision AI systems</strong></span></div><div><Map/><span>Domain<strong>Transportation assets</strong></span></div><div><Database/><span>Approach<strong>Data to deployment</strong></span></div><div><Award/><span>Recognition<strong>2 professional awards</strong></span></div></div>
      </motion.div>
      <motion.aside className="profile-panel" initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
        <div className="profile-abstract"><span>FS</span><div className="profile-scan"/><i className="corner c1"/><i className="corner c2"/><i className="corner c3"/><i className="corner c4"/></div>
        <div className="profile-meta"><span>ID / CV-AI-01</span><b>FAISAL SHAKEEL</b><small>COMPUTER VISION & DATA SYSTEMS</small></div>
      </motion.aside>
    </div>
    <div className="stats-grid">{highlights.map((h,i)=><motion.article key={h.label} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:i*.08}} viewport={{once:true}}><small>0{i+1}</small><strong><AnimatedCounter value={h.value} suffix={h.suffix}/></strong><p>{h.label}</p></motion.article>)}</div>
  </section>
}
