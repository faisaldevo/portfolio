import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '../data/portfolio'

export default function ProjectModal({project,onClose}:{project:Project|null;onClose:()=>void}){
  useEffect(()=>{const close=(e:KeyboardEvent)=>e.key==='Escape'&&onClose();document.addEventListener('keydown',close);return()=>document.removeEventListener('keydown',close)},[onClose])
  return <AnimatePresence>{project&&<motion.div className="modal-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onMouseDown={e=>e.target===e.currentTarget&&onClose()}><motion.div role="dialog" aria-modal="true" aria-label={project.title} className="project-modal" initial={{opacity:0,y:30,scale:.97}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:20,scale:.98}}><button className="modal-close" onClick={onClose} aria-label="Close"><X/></button><span className="eyebrow">PROJECT BRIEF / {project.category}</span><h2>{project.title}</h2><p className="modal-lead">{project.summary}</p><div className="modal-columns"><div><small>THE CHALLENGE</small><p>{project.challenge}</p></div><div><small>THE SOLUTION</small><p>{project.solution}</p></div></div><div className="modal-pipeline">{project.pipeline.map((p,i)=><span key={p}>{i+1}. {p}</span>)}</div><Link className="button primary" to={`/projects/${project.slug}`}>Open full case study <ArrowUpRight size={17}/></Link></motion.div></motion.div>}</AnimatePresence>
}
