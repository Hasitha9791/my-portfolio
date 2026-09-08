import { motion } from 'framer-motion'
import { FiLinkedin, FiStar } from 'react-icons/fi'
import styles from './Testimonials.module.css'

const testimonials = [
  {
    quote: "Hasitha possesses a rare combination of deep financial domain expertise and practical software execution. As a Product Owner, his Business Process Documents (BPDs) and user story breakdowns bridge business logic with developer implementation seamlessly. His adoption of AI-assisted engineering has noticeably accelerated our release sprints.",
    name: "Engineering Lead",
    role: "Senior Software Engineer / Tech Lead",
    company: "Fintech & Banking Solutions",
    initials: "TL",
  },
  {
    quote: "During our high-volume digital wallet and core banking migrations, Hasitha was invaluable in ensuring 99.9% system availability and stringent SLA compliance. His methodical root-cause debugging, SQL analysis, and compliance audit readiness (ISO 9001/27001) gave our stakeholders total peace of mind.",
    name: "Operations & Delivery Head",
    role: "Head of Application Support & Implementation",
    company: "Financial Services Partner",
    initials: "OD",
  },
  {
    quote: "Working with Hasitha and AxentraTech on our custom software portal was a breeze. He translated our operational requirements into an intuitive, production-ready system in a fraction of the time quoted by other agencies. Transparent communication, high technical standards, and genuine ownership.",
    name: "Enterprise Client",
    role: "Managing Director / Business Client",
    company: "Commercial SaaS Client",
    initials: "EC",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container">
        <p className="section-title">Endorsements &amp; <span>Recommendations</span></p>
        <p className="section-subtitle">What engineering leads, stakeholders, and clients say about my leadership and delivery</p>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className={styles.card}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, starIdx) => (
                    <FiStar key={starIdx} size={14} style={{ fill: '#fbbf24', color: '#fbbf24' }} />
                  ))}
                </div>
                <span className={styles.linkedInBadge}>
                  <FiLinkedin size={12} /> Recommendation
                </span>
              </div>

              <p className={styles.quote}>{t.quote}</p>

              <div className={styles.author}>
                <div className={styles.avatar}>{t.initials}</div>
                <div className={styles.authorInfo}>
                  <span className={styles.authorName}>{t.name}</span>
                  <span className={styles.authorRole}>{t.role}</span>
                  <span className={styles.authorCompany}>{t.company}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
