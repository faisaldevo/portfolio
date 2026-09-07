import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { workflow } from '../data/portfolio'

export default function Workflow(){return <section id="workflow" className="workflow-section section-pad"><div className="section-shell"><SectionTitle eyebrow="06 / DELIVERY SYSTEM" title="From raw data to deployed intelligence."/><div className="workflow-track">{workflow.map((step,i)=><motion.div key={step} initial={{opacity:0,x:-12}} whileInView={{opacity:1,x:0}} transition={{delay:i*.07}} viewport={{once:true}}><span>{String(i+1).padStart(2,'0')}</span><strong>{step}</strong>{i<workflow.length-1&&<i/>}</motion.div>)}</div></div></section>}
