import { technologies } from '../data/portfolio'
import SectionTitle from './SectionTitle'

export default function TechStack(){const row=[...technologies,...technologies];return <section id="tech-stack" className="tech-section section-pad"><div className="section-shell"><SectionTitle eyebrow="08 / TOOLBOX" title="Tools selected for the system, not the trend."/></div><div className="marquee"><div>{row.map((t,i)=><span key={`${t}-${i}`}><i/>{t}</span>)}</div></div><div className="marquee reverse"><div>{row.reverse().map((t,i)=><span key={`${t}-${i}`}><i/>{t}</span>)}</div></div></section>}
