import { Link } from 'react-scroll'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.logo}>HW<span>.</span></span>
        <p className={styles.copy}>
          © {new Date().getFullYear()} Hasitha Sandaruwan Weerasinghe. All rights reserved.
        </p>
        <div className={styles.socials}>
          <a href="https://github.com/Hasitha9791" target="_blank" rel="noreferrer" className={styles.social} aria-label="GitHub">
            <FiGithub size={18}/>
          </a>
          <a href="https://www.linkedin.com/in/hasitha-weerasinghe-8654031b7" target="_blank" rel="noreferrer" className={styles.social} aria-label="LinkedIn">
            <FiLinkedin size={18}/>
          </a>
          <a href="mailto:hasithasandaruwan1993@gmail.com" className={styles.social} aria-label="Email">
            <FiMail size={18}/>
          </a>
        </div>
        <div className={styles.links}>
          {['hero','skills','projects','experience','education','personal','contact'].map(s => (
            <Link key={s} to={s} smooth duration={500} offset={-70} className={styles.link}>
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
