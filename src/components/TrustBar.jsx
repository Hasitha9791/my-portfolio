import { motion } from 'framer-motion'
import { FiCreditCard, FiDollarSign, FiTrendingUp, FiBarChart2, FiSettings } from 'react-icons/fi'
import styles from './TrustBar.module.css'

const companies = [
  {
    name: 'FINAP',
    fullName: 'Fintechnology Asia Pacific',
    role: 'Product Owner / Technical Owner',
    icon: <FiCreditCard size={15} color="#38bdf8" />,
  },
  {
    name: 'LB Finance PLC',
    fullName: 'LB Finance PLC (CIM Wallet & Digital Channels)',
    role: 'System Support Engineer – Digital Channel',
    icon: <FiDollarSign size={15} color="#38bdf8" />,
  },
  {
    name: 'AxentraTech',
    fullName: 'Axentra Technologies',
    role: 'CEO & Founder',
    icon: <FiTrendingUp size={15} color="#38bdf8" />,
  },
  {
    name: 'Bimputh Finance PLC',
    fullName: 'Bimputh Finance PLC',
    role: 'Executive – Leasing',
    icon: <FiBarChart2 size={15} color="#38bdf8" />,
  },
  {
    name: 'Sarasa Soft Solution',
    fullName: 'Sarasa Soft Solution',
    role: 'Implementation Specialist',
    icon: <FiSettings size={15} color="#38bdf8" />,
  },
]

export default function TrustBar() {
  return (
    <section className={styles.trustSection}>
      <div className="container">
        <div className={styles.inner}>
          <p className={styles.heading}>Companies &amp; Financial Platforms Experience</p>
          <div className={styles.logoGrid}>
            {companies.map((c, i) => (
              <motion.div
                key={c.name}
                className={styles.companyCard}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <span className={styles.companyIcon}>{c.icon}</span>
                <div>
                  <span className={styles.companyName}>{c.name}</span>
                  <span className={styles.companyRole}> &bull; {c.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
