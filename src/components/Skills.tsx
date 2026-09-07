import { motion } from 'framer-motion'
import { BrainCircuit, Braces, DatabaseZap, MapPinned, ScanSearch, Tags, Workflow } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { skillGroups } from '../data/portfolio'

const icons=[ScanSearch,BrainCircuit,Workflow,Braces,MapPinned,Tags,DatabaseZap]
export default function Skills(){return <section id="skills" className="skills-section section-pad"><div className="section-shell"><SectionTitle eyebrow="02 / CAPABILITIES" title="A complete vision engineering toolkit." copy="From raw footage to reliable data products, I work across the full technical pipeline."/><div className="skills-grid">{skillGroups.map((group,i)=>{const Icon=icons[i];return <motion.article key={group.title} initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} transition={{delay:(i%3)*.08}} viewport={{once:true}} whileHover={{y:-5}}><div className="skill-head"><Icon/><span>0{i+1}</span></div><h3>{group.title}</h3><div className="tag-cloud">{group.items.map(item=><span key={item}>{item}</span>)}</div></motion.article>})}</div></div></section>}
