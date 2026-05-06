import { Link } from 'react-scroll'
import { FiDownload, FiMail, FiMapPin, FiPhone, FiLinkedin, FiExternalLink, FiGithub } from 'react-icons/fi'
import { motion } from 'framer-motion'
import photo from '../assets/profile.jpeg'
import styles from './Hero.module.css'

const cv = '/Hasitha_Weerasinghe_CV.pdf'

export default function Hero() {
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
          <span className="badge">👋 Hi, I'm Hasitha</span>
          <h1 className={styles.name}>
            Hasitha<br />
            <span>Weerasinghe</span>
          </h1>
          <p className={styles.role}>
            Technical &amp; Business Owner &nbsp;|&nbsp; Product Owner – Fintech
            <br />
            <span className={styles.roleAccent}>CEO &amp; Founder – AxentraTech</span>
          </p>

          <a
            href="https://www.axentratech.com"
            target="_blank"
            rel="noreferrer"
            className={styles.axentraBadge}
          >
            🚀 axentratech.com <FiExternalLink size={12} />
          </a>

          <p className={styles.summary}>
            Product Owner &amp; Tech Entrepreneur leading fintech SaaS teams, building AI-assisted
            software, and founding <strong>AxentraTech</strong> — with <strong>9+ years</strong> turning
            complex business problems into elegant, scalable digital solutions.
          </p>

          <div className={styles.meta}>
            <span><FiMapPin size={14}/> Pannipitiya, Colombo, Sri Lanka</span>
            <span><FiPhone size={14}/> +94 77 494 7440</span>
            <a href="mailto:hasithasandaruwan1993@gmail.com"><FiMail size={14}/> hasithasandaruwan1993@gmail.com</a>
            <a href="https://www.linkedin.com/in/hasitha-weerasinghe-8654031b7" target="_blank" rel="noreferrer">
              <FiLinkedin size={14}/> LinkedIn Profile
            </a>
            <a href="https://github.com/Hasitha9791" target="_blank" rel="noreferrer">
              <FiGithub size={14}/> GitHub Profile
            </a>
            <a href={cv} target="_blank" rel="noreferrer">
              <FiDownload size={14}/> View CV Online
            </a>
          </div>

          <div className={styles.actions}>
            <a href={cv} download="Hasitha_Weerasinghe_CV.pdf" className="btn btn-primary">
              <FiDownload /> Download CV
            </a>
            <Link to="contact" smooth duration={500} offset={-70} className="btn btn-outline">
              <FiMail /> Contact Me
            </Link>
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
    </section>
  )
}
