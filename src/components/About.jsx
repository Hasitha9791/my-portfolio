import { motion } from 'framer-motion'
import { FiAward, FiUsers, FiPackage, FiTrendingUp, FiCreditCard, FiCpu, FiCloud, FiGitBranch, FiCheckSquare } from 'react-icons/fi'
import styles from './About.module.css'

const stats = [
  { icon: <FiTrendingUp />, value: '9+', label: 'Years Experience' },
  { icon: <FiUsers />,      value: '7',  label: 'Team Members Led' },
  { icon: <FiPackage />,    value: '5+', label: 'SaaS Products Built' },
  { icon: <FiAward />,      value: '2',  label: 'Azure Certifications' },
]

const highlights = [
  { icon: <FiCreditCard size={18} color="#38bdf8" />, text: 'Deep fintech domain expertise — core banking, leasing, BNPL, loan origination, digital wallets, and microfinance platforms' },
  { icon: <FiCpu size={18} color="#38bdf8" />, text: 'Pioneer in Vibe Coding — independently delivered Rabbit Desk (SaaS Help Desk) and iPayLater (BNPL platform) using AI-assisted development pipelines' },
  { icon: <FiCloud size={18} color="#38bdf8" />, text: 'Microsoft Azure certified (AZ-900 & AZ-104) — cloud operations, DevOps, App Services, SQL, monitoring, IAM, and CI/CD' },
  { icon: <FiGitBranch size={18} color="#38bdf8" />, text: 'Proven bridge between business requirements and technical delivery — translating market insights into BPDs, user stories, and software solutions' },
  { icon: <FiTrendingUp size={18} color="#38bdf8" />, text: 'CEO & Founder of AxentraTech — Sri Lanka-based custom software company delivering web, mobile & enterprise solutions' },
  { icon: <FiCheckSquare size={18} color="#38bdf8" />, text: 'ISO 9001 & ISO 27001 compliant — experienced in audit support, incident management, RPA automation, and SLA-driven environments' },
]

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <p className="section-title">Professional <span>Summary</span></p>
        <p className="section-subtitle">Who I am, what I do, and the value I bring</p>

        {/* Stats row */}
        <div className={styles.statsRow}>
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className={styles.statCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <span className={styles.statIcon}>{s.icon}</span>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Summary paragraphs */}
        <motion.div
          className={styles.summaryBlock}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className={styles.para}>
            A results-driven <strong>Technical &amp; Business Owner / Product Owner</strong> with over{' '}
            <strong>9 years of progressive experience</strong> in fintech software applications, core banking
            systems, application support, and SaaS product development. Currently leading a cross-functional
            team of <strong>7 members</strong> (3 Software Engineers &amp; 4 Support Staff) at{' '}
            <strong>FINAP – Fintechnology Asia Pacific Lanka (Pvt) Ltd</strong>, driving end-to-end product
            ownership, market analysis, business process design, and new system development for fintech solutions.
          </p>
          <p className={styles.para}>
            Possesses <strong>deep finance domain expertise</strong> across core banking, leasing, BNPL, loan
            origination, digital wallets, and microfinance platforms. Proven ability to bridge the gap between
            business requirements and technical delivery — translating market insights into structured BPDs,
            user stories, and software solutions that align with organizational goals.
          </p>
          <p className={styles.para}>
            A pioneer in <strong>Vibe Coding and AI-assisted development</strong>, independently designing and
            delivering fully functional SaaS products including a Help Desk Ticketing System (Rabbit Desk) and
            a BNPL platform (iPayLater), while actively building a USA Client Loan Origination System, HR
            Management System, and Leasing Frontend — using cutting-edge AI tools including{' '}
            <strong>GitHub Copilot Agent, Cursor IDE, Windsurf (Antigravity) IDE, and VS Code</strong>.
          </p>
          <p className={styles.para}>
            Holds strong technical expertise in <strong>.NET application support &amp; debugging</strong>,
            Microsoft Azure cloud operations, Azure DevOps, SQL Server, RPA automation, and ISO 9001 &amp;
            ISO 27001 compliance. Certified in Microsoft Azure (<strong>AZ-900 &amp; AZ-104</strong>) with
            additional qualifications in React JS, Digital Marketing, ITIL Fundamentals, and MySQL. A proactive
            leader with a strong track record in project management, resource planning, stakeholder engagement,
            and delivering high-quality fintech software solutions in fast-paced, SLA-driven environments.
          </p>
        </motion.div>

        {/* Highlights grid */}
        <div className={styles.highlightsGrid}>
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              className={styles.highlightCard}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <span className={styles.highlightIcon}>{h.icon}</span>
              <p className={styles.highlightText}>{h.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
