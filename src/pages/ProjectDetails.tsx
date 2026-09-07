import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { projects } from '../data/portfolio'
import ThemeToggle from '../components/ThemeToggle'

export default function ProjectDetails() {
  const { slug } = useParams(); const project = projects.find(p => p.slug === slug)
  if (!project) return <main className="detail-page"><h1>Project not found</h1><Link to="/">Return home</Link></main>
  return <main className="detail-page"><div className="detail-controls"><ThemeToggle/></div><Link className="back-link" to="/#projects"><ArrowLeft size={18}/> Back to projects</Link><p className="eyebrow">CASE STUDY / {project.category}</p><h1>{project.title}</h1><p className="detail-lead">{project.summary}</p><div className="detail-grid"><article><span>01 / PROBLEM</span><h2>The challenge</h2><p>{project.challenge}</p></article><article><span>02 / APPROACH</span><h2>The solution</h2><p>{project.solution}</p></article><article><span>03 / OUTCOME</span><h2>The result</h2><p>{project.results}</p></article></div><section className="pipeline"><h2>System pipeline</h2><div>{project.pipeline.map((step,i)=><span key={step}>{String(i+1).padStart(2,'0')} · {step}</span>)}</div></section><section className="detail-tech"><h2>Technology stack</h2><div>{project.technologies.map(t=><span key={t}>{t}</span>)}</div></section></main>
}
