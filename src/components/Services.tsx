import { motion } from 'framer-motion'
import { ArrowUpRight, Binary, Bot, FileScan, ScanSearch, Video, Workflow } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { services } from '../data/portfolio'

const icons=[ScanSearch,Bot,FileScan,Video,Binary,Workflow]
export default function Services(){return <section id="services" className="section-shell section-pad"><SectionTitle eyebrow="07 / SERVICES" title="Technical capability, shaped around your problem." copy="Focused engagements for teams that need more than a demo: clear data, measurable output, and an integration path."/><div className="services-grid">{services.map((s,i)=>{const Icon=icons[i];return <motion.article key={s.title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} whileHover={{y:-5}}><div className="service-icon"><Icon/></div><span>0{i+1}</span><h3>{s.title}</h3><p>{s.text}</p><ul>{s.items.map(item=><li key={item}>{item}</li>)}</ul><a href="#contact">Discuss a project <ArrowUpRight size={16}/></a></motion.article>})}</div></section>}
