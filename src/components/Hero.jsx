import { useState } from 'react'
import { Link } from 'react-scroll'
import { FiDownload, FiMail, FiMapPin, FiPhone, FiLinkedin, FiExternalLink, FiGithub, FiEye, FiSmile, FiBriefcase, FiTarget, FiTrendingUp, FiGlobe, FiLayers, FiFileText } from 'react-icons/fi'
import { motion } from 'framer-motion'
import photo from '../assets/profile.jpeg'
import styles from './Hero.module.css'
import CvModal from './CvModal'

const cvPdf = '/Hasitha_Weerasinghe_CV.pdf'
const cvDocx = '/Hasitha_Weerasinghe_CV.docx'

export default function Hero() {
  const [isCvOpen, setIsCvOpen] = useState(false)

  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        {/* Text side */}
        <motion.div
          className={styles.text}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="badge"><FiSmile size={14} /> Hi, I'm Hasitha</span>
          <h1 className={styles.name}>
            Hasitha<br />
            <span>Weerasinghe</span>
          </h1>

          {/* 3 Clear Professional Titles */}
          <div className={styles.role}>
            <span className={styles.roleBadge}><FiBriefcase size={13} /> Technical &amp; Business Owner</span>
            <span className={styles.roleBadge}><FiTarget size={13} /> Product Owner – Fintech</span>
            <span className={`${styles.roleBadge} ${styles.roleAccent}`}><FiTrendingUp size={13} /> CEO &amp; Founder – AxentraTech</span>
          </div>

          <a
            href="https://www.axentratech.com"
            target="_blank"
            rel="noreferrer"
            className={styles.axentraBadge}
          >
            <FiGlobe size={13} /> axentratech.com <FiExternalLink size={12} />
          </a>

          {/* Quantified Scale Summary */}
          <p className={styles.summary}>
            Leading cross-functional engineering and support teams across <strong>9+ years in fintech SaaS</strong> — spanning core banking, leasing, BNPL, loan origination, and cloud architecture (Azure). Founder of <strong>AxentraTech</strong>, delivering enterprise-grade digital systems <strong>3x faster</strong> through modern AI-assisted engineering pipelines.
          </p>

          {/* Primary Action CTAs */}
          <div className={styles.actions}>
            <Link to="projects" smooth duration={500} offset={-70} className="btn btn-primary">
              <FiLayers size={15} /> Explore Projects (12)
            </Link>
            <button
              type="button"
              onClick={() => setIsCvOpen(true)}
              className="btn btn-outline"
            >
              <FiEye /> Preview CV (PDF)
            </button>
            <a href={cvPdf} download="Hasitha_Weerasinghe_CV.pdf" className="btn btn-outline" title="Download CV as PDF">
              <FiDownload /> Download PDF
            </a>
            <a href={cvDocx} download="Hasitha_Weerasinghe_CV.docx" className="btn btn-outline" title="Download CV as Word (.docx)">
              <FiFileText /> Word (.docx)
            </a>
            <Link to="contact" smooth duration={500} offset={-70} className="btn btn-outline">
              <FiMail /> Book a Call
            </Link>
          </div>

          {/* Streamlined Quick Connect & Metadata Badges */}
          <div className={styles.metaWrap}>
            <span className={styles.locationPill}>
              <FiMapPin size={14} color="#38bdf8" /> Pannipitiya, Colombo, Sri Lanka
            </span>

            <div className={styles.metaIcons}>
              <a href="mailto:hasithasandaruwan1993@gmail.com" className={styles.iconBadge} title="Send Email">
                <FiMail /> Email
              </a>
              <a href="tel:+94774947440" className={styles.iconBadge} title="Call Phone">
                <FiPhone /> +94 77 494 7440
              </a>
              <a href="https://www.linkedin.com/in/hasitha-weerasinghe-8654031b7" target="_blank" rel="noreferrer" className={styles.iconBadge} title="LinkedIn Profile">
                <FiLinkedin /> LinkedIn
              </a>
              <a href="https://github.com/Hasitha9791" target="_blank" rel="noreferrer" className={styles.iconBadge} title="GitHub Profile">
                <FiGithub /> GitHub
              </a>
              <a href="https://hasitha.online" target="_blank" rel="noreferrer" className={styles.iconBadge} title="Personal Domain">
                <FiExternalLink /> hasitha.online
              </a>
              <button
                type="button"
                onClick={() => setIsCvOpen(true)}
                className={styles.iconBadge}
                style={{ background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.3)', cursor: 'pointer' }}
                title="Preview PDF CV in Modal"
              >
                <FiEye /> View CV
              </button>
              <a href={cvDocx} download="Hasitha_Weerasinghe_CV.docx" className={styles.iconBadge} title="Download Word (.docx) CV">
                <FiFileText /> Word CV
              </a>
            </div>
          </div>
        </motion.div>

        {/* Photo side */}
        <motion.div
          className={styles.photoWrap}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Decorative ring */}
          <div className={styles.ring1} />
          <div className={styles.ring2} />

          {/* Portrait mode: blurred bg + sharp face */}
          <div className={styles.photoCutout}>
            {/* Blurred background layer — same image, darkened */}
            <div className={styles.photoBg} style={{ backgroundImage: `url(${photo})` }} />
            {/* Sharp face on top */}
            <img src={photo} alt="Hasitha Weerasinghe" className={styles.photo} />
          </div>

        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollDown}>
        <Link to="skills" smooth duration={500} offset={-70}>
          <span />
        </Link>
      </div>

      {/* Interactive In-Browser PDF CV Modal */}
      <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
    </section>
  )
}
