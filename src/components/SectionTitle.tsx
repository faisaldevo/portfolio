import { motion } from 'framer-motion'

export default function SectionTitle({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <motion.div className="section-title" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}>
    <span className="eyebrow"><i />{eyebrow}</span>
    <h2>{title}</h2>
    {copy && <p>{copy}</p>}
  </motion.div>
}
