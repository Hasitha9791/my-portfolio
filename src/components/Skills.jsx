import { motion } from 'framer-motion'
import { FiTool, FiTarget, FiDollarSign, FiCloud, FiCpu, FiCode, FiShield } from 'react-icons/fi'
import styles from './Skills.module.css'

/* Tech stack icons — from devicons CDN (no package needed) */
const techStack = [
  { name: 'Azure',        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
  { name: 'React',        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: '.NET Core',    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
  { name: 'SQL Server',   src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
  { name: 'MySQL',        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'JavaScript',   src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'GitHub',       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'VS Code',      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'Azure DevOps', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuredevops/azuredevops-original.svg' },
  { name: 'Git',          src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
]

const skillGroups = [
  {
    category: 'Product Strategy & Ownership',
    icon: <FiTarget size={22} />,
    skills: [
      { name: 'Product Roadmap & OKRs', badge: 'Strategic' },
      { name: 'User Stories & BPD Docs', badge: 'Core' },
      { name: 'Sprint Planning & Backlog' },
      { name: 'Requirement Gathering' },
      { name: 'Market & Competitor Analysis' },
      { name: 'UAT & Release Sign-Off', badge: 'QA' },
      { name: 'Stakeholder Alignment' },
    ],
    tools: ['Jira Software', 'Azure Boards', 'Confluence', 'Figma', 'Miro'],
  },
  {
    category: 'Fintech & Regulatory Architecture',
    icon: <FiDollarSign size={22} />,
    skills: [
      { name: 'Core Banking Workflows', badge: 'Fintech' },
      { name: 'Loan Origination (LOS)', badge: 'Lending' },
      { name: 'BNPL Multi-Tier Installments' },
      { name: 'Digital Wallets & QR Payments' },
      { name: 'Financial Leasing Systems' },
      { name: 'CRIB API Integration', badge: 'RegTech' },
      { name: 'Microfinance & Collections' },
    ],
    tools: ['CRIB API Gateway', 'Payment Webhooks', 'Navicat', 'Banking APIs'],
  },
  {
    category: 'Cloud & DevOps (Azure)',
    icon: <FiCloud size={22} />,
    skills: [
      { name: 'AZ-104: Azure Administrator', badge: 'Certified', isCert: true },
      { name: 'AZ-900: Azure Fundamentals', badge: 'Certified', isCert: true },
      { name: 'Azure App Services' },
      { name: 'Azure SQL Database & Storage' },
      { name: 'Application Insights' },
      { name: 'CI/CD Pipelines' },
      { name: 'IAM & Cost Governance' },
    ],
    tools: ['Microsoft Azure', 'Azure DevOps', 'GitHub Actions', 'Azure Monitor'],
  },
  {
    category: 'AI & Vibe Coding Stack',
    icon: <FiCpu size={22} />,
    skills: [
      { name: 'Vibe Coding Pipelines', badge: 'Pioneer' },
      { name: 'Cursor IDE Workflows' },
      { name: 'Windsurf (Antigravity) IDE' },
      { name: 'GitHub Copilot Agent' },
      { name: 'Agentic Code Scaffolding' },
      { name: 'Rapid MVP Prototyping' },
      { name: 'Automated Test Scaffolding' },
    ],
    tools: ['Cursor IDE', 'Windsurf / Antigravity', 'GitHub Copilot', 'VS Code', 'Claude / Gemini'],
  },
  {
    category: 'Technical Engineering & APIs',
    icon: <FiCode size={22} />,
    skills: [
      { name: '.NET App Debugging', badge: 'L2/L3' },
      { name: 'React JS & Next.js' },
      { name: 'SQL Query Optimization' },
      { name: 'REST API Integration' },
      { name: 'RPA Automation Workflows' },
      { name: 'Performance Profiling' },
      { name: 'Database Migrations' },
    ],
    tools: ['Visual Studio 2022', 'SQL Server Profiler', 'Postman', 'Navicat', 'Node.js'],
  },
  {
    category: 'Compliance & Quality Assurance',
    icon: <FiShield size={22} />,
    skills: [
      { name: 'ISO 9001 Compliance', badge: 'Audit' },
      { name: 'ISO 27001 Security Controls', badge: 'Security' },
      { name: 'SLA Monitoring & Reporting' },
      { name: 'Incident & Change Management' },
      { name: 'Root Cause Analysis (RCA)' },
      { name: 'Regression & Stress Testing' },
      { name: 'ITIL Best Practices' },
    ],
    tools: ['ITIL Service Desk', 'Event Viewer', 'Log Analytics', 'Audit Suites'],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <p className="section-title">Executive <span>Competencies</span></p>
        <p className="section-subtitle">Core capabilities across product strategy, fintech architecture, cloud engineering, and AI pipelines</p>

        {/* ── Tech Stack Icons Row ── */}
        <motion.div
          className={styles.techRow}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {techStack.map((tech) => (
            <div key={tech.name} className={styles.techIcon}>
              <img src={tech.src} alt={tech.name} />
              <span>{tech.name}</span>
            </div>
          ))}
        </motion.div>

        {/* ── Competency Cards Grid ── */}
        <div className={styles.grid}>
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              className={styles.card}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              <div className={styles.cardHeader}>
                <span className={styles.icon}>{group.icon}</span>
                <h3>{group.category}</h3>
              </div>

              {/* Skills Tags */}
              <div className={styles.tags}>
                {group.skills.map(s => (
                  <span key={s.name} className={styles.tag}>
                    <span>{s.name}</span>
                    {s.badge && (
                      <span className={`${styles.tagBadge} ${s.isCert ? styles.tagCert : ''}`}>
                        {s.badge}
                      </span>
                    )}
                  </span>
                ))}
              </div>

              {/* Primary Tools Strip */}
              {group.tools && (
                <div className={styles.toolsSection}>
                  <span className={styles.toolsLabel}>
                    <FiTool size={11} /> Primary Tools:
                  </span>
                  <div className={styles.toolsList}>
                    {group.tools.map(tool => (
                      <span key={tool} className={styles.toolChip}>
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
