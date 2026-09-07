import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, MessageSquareText } from 'lucide-react'
import SectionTitle from './SectionTitle'

const projectAreas=['Computer Vision','Object Detection','Image Segmentation','Video Analytics','OCR Systems','Python Automation']

export default function Contact(){return <section id="contact" className="contact-section section-pad"><div className="section-shell contact-simple"><motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}}><SectionTitle eyebrow="11 / START A CONVERSATION" title="Let’s build something intelligent."/><p className="contact-copy">Need a custom vision system, YOLO model, annotation workflow, intelligent video pipeline, OCR solution, or data automation? Tell me what the system needs to see — and what decision it should help you make.</p><div className="contact-areas">{projectAreas.map(area=><span key={area}>{area}</span>)}</div><a className="contact-email" href="mailto:faisalshakeel445@gmail.com?subject=Computer%20Vision%20Project%20Inquiry"><Mail/> <span>Start by email<small>faisalshakeel445@gmail.com</small></span><ArrowUpRight/></a><p className="contact-note"><MessageSquareText size={16}/> Share your goal, available data, and expected output. I’ll reply with the best next step.</p></motion.div></div></section>}
