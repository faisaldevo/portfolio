import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { projects, type Project } from '../data/portfolio'

const filters=['All','Computer Vision','Deep Learning','Transportation AI','Sports Analytics','OCR','Segmentation','Tracking','Data Processing']
export default function Projects(){const [filter,setFilter]=useState('All');const [selected,setSelected]=useState<Project|null>(null);const visible=filter==='All'?projects:projects.filter(p=>p.filters.includes(filter));return <section id="projects" className="projects-section section-pad"><div className="section-shell"><SectionTitle eyebrow="04 / SELECTED WORK" title="Systems designed around real-world constraints." copy="A selection of vision, analytics, infrastructure, and automation projects — each built as an end-to-end pipeline."/><div className="filters" role="group" aria-label="Filter projects">{filters.map(f=><button className={filter===f?'active':''} onClick={()=>setFilter(f)} key={f}>{f}</button>)}</div><motion.div layout className="projects-grid"><AnimatePresence mode="popLayout">{visible.map((p)=><ProjectCard key={p.slug} project={p} index={projects.indexOf(p)} onPreview={()=>setSelected(p)}/>)}</AnimatePresence></motion.div></div><ProjectModal project={selected} onClose={()=>setSelected(null)}/></section>}
