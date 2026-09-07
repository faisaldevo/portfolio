import { motion } from 'framer-motion'

const detections = [
  { label:'PERSON', confidence:'96.4%', className:'detect detect-a' },
  { label:'ASSET', confidence:'98.7%', className:'detect detect-b' },
  { label:'DEFECT', confidence:'91.2%', className:'detect detect-c' },
]

export default function DetectionOverlay() {
  return <div className="vision-stage" aria-hidden="true">
    <div className="stage-grid" /><div className="scan-line" />
    <svg className="track-path" viewBox="0 0 600 520" fill="none"><motion.path d="M40 450 C140 350 185 405 270 285 S430 205 560 80" stroke="url(#trail)" strokeWidth="2" strokeDasharray="6 8" initial={{ pathLength:0 }} animate={{ pathLength:1 }} transition={{ duration:3, repeat:Infinity, repeatType:'reverse' }} /><defs><linearGradient id="trail"><stop stopColor="#5ee7ff"/><stop offset="1" stopColor="#8b5cf6"/></linearGradient></defs></svg>
    {detections.map((item, i) => <motion.div key={item.label} className={item.className} initial={{ opacity:0, scale:.92 }} animate={{ opacity:1, scale:1 }} transition={{ delay:.5 + i*.2 }}><span>{item.label} <b>{item.confidence}</b></span><i /><i /><i /><i /></motion.div>)}
    <div className="reticle"><span /><span /></div>
    <div className="telemetry"><span>CV_PIPELINE / LIVE</span><strong>03 OBJECTS</strong></div>
  </div>
}
