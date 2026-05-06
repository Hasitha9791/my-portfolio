import { motion } from 'framer-motion'
import styles from './Skills.module.css'

/* Tech stack icons — from devicons CDN (no package needed) */
const techStack = [
  { name: 'Azure',       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
  { name: 'React',       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: '.NET',        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
  { name: 'SQL Server',  src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
  { name: 'MySQL',       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'JavaScript',  src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'GitHub',      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'VS Code',     src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'Git',         src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Azure DevOps', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuredevops/azuredevops-original.svg' },
]

const skillGroups = [
  {
    category: 'Product & Business',
    icon: '🎯',
    skills: ['Product Ownership', 'Requirement Gathering', 'User Stories & BPD', 'Sprint Planning', 'Backlog Management', 'Market Analysis', 'Stakeholder Engagement', 'UAT / QA Testing'],
  },
  {
    category: 'Fintech Domain',
    icon: '🏦',
    skills: ['Core Banking Systems', 'Loan Origination', 'BNPL Platforms', 'Digital Wallets', 'Leasing Systems', 'Microfinance', 'CRIB API Integration', 'SaaS Fintech Products'],
  },
  {
    category: 'Cloud & DevOps (Azure)',
    icon: '☁️',
    skills: ['AZ-900 Certified', 'AZ-104 Certified', 'Azure App Services', 'Azure SQL Database', 'Azure Blob Storage', 'Application Insights', 'Azure DevOps', 'CI/CD Pipelines'],
  },
  {
    category: 'AI & Vibe Coding',
    icon: '🤖',
    skills: ['GitHub Copilot Agent', 'Cursor IDE', 'Windsurf (Antigravity) IDE', 'VS Code', 'Vibe Coding', 'AI-Assisted Development', 'Agentic Workflows', 'Rapid Prototyping'],
  },
  {
    category: 'Technical & Development',
    icon: '💻',
    skills: ['.NET App Debugging', 'Visual Studio IDE', 'React JS', 'SQL Server', 'MySQL', 'RPA Automation', 'Log Analysis', 'Performance Profiling'],
  },
  {
    category: 'Compliance & Quality',
    icon: '🛡️',
    skills: ['ISO 9001', 'ISO 27001', 'SLA Monitoring', 'Incident Management', 'Root Cause Analysis', 'Change Management', 'Regression Testing', 'ITIL Fundamentals'],
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
        <p className="section-title">Key <span>Skills</span></p>
        <p className="section-subtitle">Core competencies across product, fintech, cloud, and AI-assisted development</p>

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
              <div className={styles.tags}>
                {group.skills.map(s => (
                  <span key={s} className={styles.tag}>{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
