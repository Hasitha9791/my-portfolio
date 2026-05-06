import { motion } from 'framer-motion'
import styles from './Education.module.css'

const education = [
  {
    icon: '🎓',
    degree: 'Higher Diploma in Software Engineering',
    institution: 'Java Institute for Advanced Technology',
    authority: 'Scottish Qualifications Authority (SQA – UK) | Equivalent to B.Sc.',
  },
  {
    icon: '🏫',
    degree: 'G.C.E. Advanced Level – Bio Stream',
    institution: 'Badulla Central College',
    authority: 'Chemistry: S | Biology: S | Physics: S',
  },
]

const certifications = [
  { icon: '☁️', name: 'AZ-900: Microsoft Azure Fundamentals', issuer: 'Microsoft' },
  { icon: '☁️', name: 'AZ-104: Microsoft Azure Administrator', issuer: 'Microsoft' },
  { icon: '🗄️', name: 'Relational Database Management Systems (RDBMS)', issuer: 'Professional Certification' },
  { icon: '⚛️', name: 'Web Development – React JS (Foundational)', issuer: 'Professional Certification' },
  { icon: '☁️', name: 'Azure Cloud Architecture – Core Concepts', issuer: 'LinkedIn Learning' },
  { icon: '📊', name: 'MySQL for Data Analysis', issuer: 'LinkedIn Learning' },
  { icon: '🔧', name: 'ITIL Fundamentals', issuer: 'LinkedIn Learning' },
  { icon: '📣', name: 'Digital Marketing Fundamentals (Google SEO, Social Media)', issuer: 'Professional Certification' },
]

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <p className="section-title"><span>Education</span> & Certifications</p>
        <p className="section-subtitle">Academic background and professional qualifications</p>

        <div className={styles.columns}>
          {/* Education */}
          <div>
            <h3 className={styles.colTitle}>Education</h3>
            <div className={styles.eduList}>
              {education.map((e, i) => (
                <motion.div
                  key={i}
                  className={styles.eduCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className={styles.eduIcon}>{e.icon}</span>
                  <div>
                    <h4 className={styles.degree}>{e.degree}</h4>
                    <p className={styles.institution}>{e.institution}</p>
                    <p className={styles.authority}>{e.authority}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className={styles.colTitle}>Certifications</h3>
            <div className={styles.certList}>
              {certifications.map((c, i) => (
                <motion.div
                  key={i}
                  className={styles.certCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <span className={styles.certIcon}>{c.icon}</span>
                  <div>
                    <p className={styles.certName}>{c.name}</p>
                    <p className={styles.certIssuer}>{c.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
