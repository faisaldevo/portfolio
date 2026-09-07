import { motion } from 'framer-motion'
import { ArrowUpRight, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '../data/portfolio'

export default function ProjectCard({project,index,onPreview}:{project:Project;index:number;onPreview:()=>void}){return <motion.article layout className={`project-card ${project.accent}`} initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} exit={{opacity:0,scale:.96}} transition={{duration:.35}}>
  <div className="project-visual"><div className="mini-grid"/><span className="project-num">{String(index+1).padStart(2,'0')}</span><span className="project-category">{project.category}</span><div className="project-viz"><i/><i/><i/><svg viewBox="0 0 300 100"><path d="M0 88 C58 40 93 78 132 42 S223 63 300 8"/></svg></div>{project.metrics && <div className="mini-metrics">{project.metrics.map(m=><span key={m.label}><b>{m.value}</b>{m.label}</span>)}</div>}</div>
  <div className="project-body"><h3>{project.title}</h3><p>{project.summary}</p><div className="project-tech">{project.technologies.slice(0,4).map(t=><span key={t}>{t}</span>)}</div><div className="project-actions"><button onClick={onPreview}><Eye size={16}/> Quick view</button><Link to={`/projects/${project.slug}`}>Case study <ArrowUpRight size={16}/></Link></div></div>
  </motion.article>}
