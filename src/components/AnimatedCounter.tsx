import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function AnimatedCounter({ value, suffix }: { value:number; suffix:string }) {
  const ref=useRef<HTMLSpanElement>(null); const visible=useInView(ref,{once:true}); const [count,setCount]=useState(0)
  useEffect(()=>{ if(!visible)return; let start=0; const duration=1300; const tick=(t:number)=>{if(!start)start=t; const p=Math.min((t-start)/duration,1); setCount(Math.floor(value*(1-Math.pow(1-p,3)))); if(p<1)requestAnimationFrame(tick)}; requestAnimationFrame(tick)},[visible,value])
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}
