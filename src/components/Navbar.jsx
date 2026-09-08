import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'
import logo from '../assets/logo.svg'
import logoLight from '../assets/logo-light.svg'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'About',        to: 'hero' },
  { label: 'Summary',      to: 'about' },
  { label: 'Skills',       to: 'skills' },
  { label: 'Projects',     to: 'projects' },
  { label: 'Experience',   to: 'experience' },
  { label: 'Endorsements', to: 'testimonials' },
  { label: 'Education',    to: 'education' },
  { label: 'Contact',      to: 'contact' },
]

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
}

export default function Navbar() {
  const [scrolled, setScrolled]         = useState(false)
  const [open, setOpen]                 = useState(false)
  const [dark, setDark]                 = useState(true)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light')
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>

        {/* Logo — slides in from left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <Link to="hero" smooth duration={500} className={styles.logoWrap}>
            <img src={dark ? logo : logoLight} alt="Hasitha Weerasinghe" className={styles.logo} />
          </Link>
        </motion.div>

        {/* Nav links — stagger drop-in */}
        <motion.ul
          className={`${styles.links} ${open ? styles.open : ''}`}
          variants={listVariants}
          initial="hidden"
          animate="visible"
        >
          {navLinks.map(l => (
            <motion.li key={l.to} variants={itemVariants} className={styles.linkItem}>
              <Link
                to={l.to}
                smooth
                duration={500}
                offset={-70}
                onClick={() => setOpen(false)}
                className={styles.link}
                activeClass={styles.active}
                spy
                onSetActive={() => setActiveSection(l.to)}
              >
                {l.label}
              </Link>
              {activeSection === l.to && (
                <motion.span
                  className={styles.indicator}
                  layoutId="navIndicator"
                  transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                />
              )}
            </motion.li>
          ))}
        </motion.ul>

        {/* Theme toggle — fades in last */}
        <motion.button
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label="Toggle theme"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, delay: 0.85 }}
        >
          {dark ? <FiSun size={18} /> : <FiMoon size={18} />}
        </motion.button>

        <button className={styles.hamburger} onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </nav>
  )
}
