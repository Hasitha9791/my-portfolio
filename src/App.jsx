import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Personal from './components/Personal'
import Contact from './components/Contact'
import Footer from './components/Footer'

/* ── Page Loader ─────────────────────────────────────────────── */
function Loader({ done }) {
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 99999,
      background: '#0a0f1e',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', gap: '1.4rem',
      opacity: done ? 0 : 1,
      pointerEvents: done ? 'none' : 'all',
      transition: 'opacity 0.6s ease',
    }}>
      {/* Logo mark */}
      <div style={{
        fontSize: '2.2rem', fontWeight: 800, letterSpacing: '-1px',
        color: '#e2e8f0', fontFamily: 'Inter, sans-serif',
      }}>
        HW<span style={{ color: '#1e6fd9' }}>.</span>
      </div>

      {/* Animated bar */}
      <div style={{
        width: '160px', height: '3px',
        background: '#1e293b', borderRadius: '99px', overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          background: 'linear-gradient(90deg, #1e6fd9, #38bdf8)',
          borderRadius: '99px',
          animation: 'loaderBar 1.1s ease forwards',
        }} />
      </div>

      <style>{`
        @keyframes loaderBar {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  )
}

/* ── Scroll Progress ─────────────────────────────────────────── */
function ScrollProgress() {
  const [pct, setPct] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      setPct((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, zIndex: 9999,
      width: `${pct}%`, height: '3px',
      background: 'linear-gradient(90deg, #1e6fd9, #38bdf8)',
      boxShadow: '0 0 8px rgba(56,189,248,0.7)',
      transition: 'width 0.1s linear',
      pointerEvents: 'none',
    }} />
  )
}

function BackToTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 999,
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        border: '2px solid rgba(30,111,217,0.6)',
        background: 'rgba(10,15,30,0.9)',
        backdropFilter: 'blur(8px)',
        color: '#38bdf8',
        fontSize: '1.2rem',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 20px rgba(30,111,217,0.35)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      ↑
    </button>
  )
}

function App() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1200)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <Loader done={loaded} />
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Personal />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <ScrollProgress />
    </>
  )
}

export default App
