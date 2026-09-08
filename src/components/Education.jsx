import { motion } from 'framer-motion'
import { FiExternalLink, FiCheckCircle, FiBookOpen, FiAward, FiCloud, FiDatabase, FiCode, FiBarChart2, FiTool, FiShare2 } from 'react-icons/fi'
import styles from './Education.module.css'

const education = [
  {
    icon: <FiBookOpen size={22} color="#38bdf8" />,
    degree: 'Higher Diploma in Software Engineering',
    institution: 'Java Institute for Advanced Technology',
    authority: 'Scottish Qualifications Authority (SQA – UK) | Equivalent to B.Sc.',
  },
  {
    icon: <FiAward size={22} color="#38bdf8" />,
    degree: 'G.C.E. Advanced Level – Bio Stream',
    institution: 'Badulla Central College',
    authority: 'Chemistry: S | Biology: S | Physics: S',
  },
]

const certifications = [
  {
    icon: <FiCloud size={18} color="#38bdf8" />,
    name: 'Microsoft Certified: Azure Administrator Associate (AZ-104)',
    issuer: 'Microsoft Certified Credential',
    verifyUrl: 'https://learn.microsoft.com/en-us/users/hasithaweerasinghe/credentials',
    featured: true,
  },
  {
    icon: <FiCloud size={18} color="#38bdf8" />,
    name: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft Certified Credential',
    verifyUrl: 'https://learn.microsoft.com/en-us/users/hasithaweerasinghe/credentials',
    featured: true,
  },
  {
    icon: <FiDatabase size={18} color="#38bdf8" />,
    name: 'Relational Database Management Systems (RDBMS)',
    issuer: 'Java Institute / SQA UK',
  },
  {
    icon: <FiCode size={18} color="#38bdf8" />,
    name: 'Web Development – React JS (Foundational)',
    issuer: 'Professional Certification',
  },
  {
    icon: <FiCloud size={18} color="#38bdf8" />,
    name: 'Azure Cloud Architecture – Core Concepts',
    issuer: 'LinkedIn Learning',
  },
  {
    icon: <FiBarChart2 size={18} color="#38bdf8" />,
    name: 'MySQL for Data Analysis',
    issuer: 'LinkedIn Learning',
  },
  {
    icon: <FiTool size={18} color="#38bdf8" />,
    name: 'ITIL Fundamentals & Service Management',
    issuer: 'LinkedIn Learning',
  },
  {
    icon: <FiShare2 size={18} color="#38bdf8" />,
    name: 'Digital Marketing Fundamentals (Google SEO & Social Media)',
    issuer: 'Professional Certification',
  },
]

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <p className="section-title"><span>Education</span> &amp; Certifications</p>
        <p className="section-subtitle">Academic background and verified professional credentials</p>

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
            <h3 className={styles.colTitle}>Verified Certifications</h3>
            <div className={styles.certList}>
              {certifications.map((c, i) => (
                <motion.div
                  key={i}
                  className={`${styles.certCard} ${c.featured ? styles.featuredCert : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <div className={styles.certLeft}>
                    <span className={styles.certIcon}>{c.icon}</span>
                    <div>
                      <p className={styles.certName}>{c.name}</p>
                      <p className={styles.certIssuer}>{c.issuer}</p>
                    </div>
                  </div>

                  {c.verifyUrl && (
                    <a
                      href={c.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.verifyBtn}
                      title="Verify official Microsoft credential"
                    >
                      <FiCheckCircle size={12} color="#4ade80" /> Verify Credential <FiExternalLink size={11} />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

