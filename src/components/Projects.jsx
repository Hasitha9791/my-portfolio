import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'
import styles from './Projects.module.css'

const projects = [
  {
    title: 'AxentraTech – Custom Software Company',
    emoji: '🏢',
    link: 'https://www.axentratech.com',
    linkLabel: 'axentratech.com',
    featured: true,
    screenshot: '/projects/axentratech.png',
    logoOnly: true,
    placeholderGrad: 'linear-gradient(135deg, #0f2554 0%, #1e6fd9 50%, #38bdf8 100%)',
    tags: ['Founder & CEO', 'Custom Software', 'SaaS', 'Sri Lanka'],
    description:
      'Sri Lanka-based custom software development company I founded — delivering high-quality web applications, mobile apps, and enterprise software solutions. Currently building an HR Management System and a multi-agent Help Desk platform. Services include web & mobile development, UI/UX design, e-commerce, cloud hosting, and SEO.',
  },
  {
    title: 'Rabbit Desk – Help Desk SaaS',
    emoji: '🐰',
    link: 'https://www.rabbit-desk.com',
    linkLabel: 'rabbit-desk.com',
    screenshot: '/projects/rabbit-desk.png',
    placeholderGrad: 'linear-gradient(135deg, #1a0a2e 0%, #6d28d9 60%, #a78bfa 100%)',
    tags: ['SaaS', 'Help Desk', 'Vibe Coding', 'Full Stack'],
    description:
      'Fully completed SaaS-based Help Desk ticketing system. Led end-to-end design, business process documentation, frontend & backend development, and commercial website launch.',
  },
  {
    title: 'iPayLater – BNPL Platform',
    emoji: '💳',
    link: 'https://merchant.ipaylater.online',
    linkLabel: 'merchant.ipaylater.online',
    screenshot: '/projects/ipaylater.png',
    placeholderGrad: 'linear-gradient(135deg, #2d0076 0%, #7c3aed 50%, #a855f7 100%)',
    tags: ['BNPL', 'Fintech', 'QR Payments', 'Full Stack'],
    description:
      'Buy Now Pay Later platform including merchant portal, admin dashboard, QR-based third-party payment integration, and commercial marketing website.',
  },
  {
    title: 'USA Client Loan Origination System',
    emoji: '🇺🇸',
    screenshot: '/projects/loan-origination.png',
    placeholderGrad: 'linear-gradient(135deg, #1a0e04 0%, #92400e 60%, #d97706 100%)',
    tags: ['Loan Origination', 'USA Compliance', 'Full Stack', 'In Progress'],
    description:
      'Customer onboarding & loan workflow management system aligned with USA client compliance — covering application intake, verification, approval, and disbursement.',
  },
  {
    title: 'HR Management System',
    emoji: '👥',
    screenshot: '/projects/hr-system.png',
    placeholderGrad: 'linear-gradient(135deg, #0c1a2e 0%, #0e7490 60%, #22d3ee 100%)',
    tags: ['HR Tech', 'SaaS', 'Internal Tools', 'In Progress'],
    description:
      'Internal HR operations platform covering employee management, leave, payroll, and HR workflows — developed using AI-assisted development pipelines.',
  },
  {
    title: 'First Micro – SaaS Loan Marketplace',
    emoji: '🏪',
    screenshot: '/projects/firstmicro.png',
    placeholderGrad: 'linear-gradient(135deg, #1a0d1a 0%, #9d174d 60%, #f472b6 100%)',
    tags: ['Loan Marketplace', 'SaaS', 'UI/UX', 'BPD'],
    description:
      'Market analysis, UI/UX design, backend calculation logic, QA testing, and full Business Process Documentation for a SaaS-based loan marketplace platform.',
  },
  {
    title: 'Leasing System Frontend',
    emoji: '🚗',
    screenshot: '/projects/leasing.png',
    placeholderGrad: 'linear-gradient(135deg, #0a1a10 0%, #15803d 60%, #4ade80 100%)',
    tags: ['Leasing', 'Frontend', 'AI-Assisted', 'Fintech'],
    description:
      'Leading the development of the leasing system frontend in collaboration with the engineering team, leveraging AI-assisted tools to accelerate UI development.',
  },
  {
    title: 'CIM Digital Wallet',
    emoji: '📱',
    screenshot: '/projects/cim-wallet.jfif',
    placeholderGrad: 'linear-gradient(135deg, #0f0a1e 0%, #7c3aed 60%, #c4b5fd 100%)',
    tags: ['Digital Wallet', 'Production Support', 'UAT'],
    description:
      'Delivered production support, UAT, and transaction analysis for CIM Digital Wallet at LB Finance PLC, ensuring data accuracy and system reliability.',
  },
  {
    title: 'RPA Automation Projects',
    emoji: '🤖',
    screenshot: '/projects/rpa.svg',
    placeholderGrad: 'linear-gradient(135deg, #0a1520 0%, #0369a1 60%, #38bdf8 100%)',
    tags: ['RPA', 'Automation', 'LB Finance'],
    description:
      'Developed and monitored RPA automation workflows for SMS notifications, letter generation, employee onboarding/offboarding, and CDM transaction failure handling.',
  },
  {
    title: 'First Micro PLUS Banking System',
    emoji: '🏦',
    screenshot: '/projects/firstmicro-plus.png',
    placeholderGrad: 'linear-gradient(135deg, #0f1a2e 0%, #1d4ed8 60%, #60a5fa 100%)',
    tags: ['Banking', 'Application Support', 'UAT', 'BPD'],
    description:
      'Provided application support, conducted UAT, and performed detailed business process analysis to ensure system stability and operational alignment for the First Micro PLUS Banking System.',
  },
  {
    title: 'Sarvodaya Banking System',
    emoji: '🌿',
    screenshot: '/projects/sarvodaya.svg',
    placeholderGrad: 'linear-gradient(135deg, #0a1a10 0%, #065f46 60%, #34d399 100%)',
    tags: ['Banking', 'Requirements', 'UAT', 'Implementation'],
    description:
      'Engaged in requirement gathering from stakeholders, supported UAT execution, and assisted with system implementation and go-live activities for Sarvodaya Banking System.',
  },
  {
    title: 'Firstmicro NANO Loan Management System',
    emoji: '💰',
    screenshot: '/projects/firstmicro-nano.svg',
    placeholderGrad: 'linear-gradient(135deg, #1a0a00 0%, #c2410c 60%, #fb923c 100%)',
    tags: ['Loan Management', 'UI/UX', 'User Stories', 'BPD'],
    description:
      'Designed UI mockups, wrote user stories, mapped system workflows, and prepared comprehensive Business Process Documents (BPD) for the Firstmicro NANO Loan Management System.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <p className="section-title">Featured <span>Projects</span></p>
        <p className="section-subtitle">SaaS products, fintech platforms, and enterprise systems I've designed and delivered</p>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className={`${styles.card} ${p.featured ? styles.featured : ''}`}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              {/* ── Thumbnail ── */}
              <div
                className={styles.thumb}
                style={{ background: p.placeholderGrad }}
              >
                {p.screenshot ? (
                  <img
                    src={p.screenshot}
                    alt={p.title}
                    className={p.logoOnly ? styles.thumbImgLogo : styles.thumbImg}
                  />
                ) : (
                  <div className={styles.thumbPlaceholder}>
                    <span className={styles.thumbEmoji}>{p.emoji}</span>
                    <span className={styles.thumbLabel}>{p.title.split('–')[0].trim()}</span>
                  </div>
                )}
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.thumbOverlay}
                    aria-label={`Visit ${p.title}`}
                  >
                    <FiExternalLink size={20} />
                    <span>Visit Site</span>
                  </a>
                )}
              </div>

              {/* ── Card body ── */}
              <div className={styles.body}>
                <div className={styles.top}>
                  <h3 className={styles.title}>{p.title}</h3>
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noreferrer" className={styles.extLink}>
                      <FiExternalLink size={15} />
                    </a>
                  )}
                </div>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer" className={styles.url}>
                    {p.linkLabel}
                  </a>
                )}
                <p className={styles.desc}>{p.description}</p>
                <div className={styles.tags}>
                  {p.tags.map(t => (
                    <span key={t} className={`${styles.tag} ${t === 'In Progress' ? styles.inProgress : ''}`}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
