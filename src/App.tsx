import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

const ProjectDetails = lazy(() => import('./pages/ProjectDetails'))

export default function App() {
  return <Suspense fallback={<div className="route-loading">Loading case study…</div>}><Routes><Route path="/" element={<Home />} /><Route path="/projects/:slug" element={<ProjectDetails />} /><Route path="*" element={<Home />} /></Routes></Suspense>
}
