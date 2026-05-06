import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiExternalLink } from 'react-icons/fi'
import styles from './Experience.module.css'

const jobs = [
  {
    company: 'AxentraTech (Axentra Technologies)',
    role: 'CEO & Founder',
    period: '2025 – Present',
    type: 'current',
    link: 'https://www.axentratech.com',
    points: [
      'Founded AxentraTech — a Sri Lanka-based custom software development company delivering web applications, mobile apps, and enterprise software solutions.',
      'Leading a skilled engineering team (Senior Software Engineer, Business Analyst, Project Manager) to deliver client projects on time and within budget.',
      'Driving company strategy, client acquisition, service offerings, and product roadmap across web, mobile, e-commerce, UI/UX, and cloud hosting services.',
      'Actively building two flagship enterprise SaaS products: an HR Management System (web + mobile) and a multi-agent Help Desk Ticketing System.',
      'Spearheading AI-assisted and Vibe Coding development practices across all company projects using GitHub Copilot Agent, Cursor, and Windsurf IDEs.',
      'Providing end-to-end services: custom software, mobile apps, UI/UX design, e-commerce platforms, web hosting, SSL, business email, and SEO.',
      'Built and launched the AxentraTech commercial website and established the brand presence across LinkedIn, GitHub, and social platforms.',
    ],
  },
  {
    company: 'FINAP – Fintechnology Asia Pacific Lanka (Pvt) Ltd',
    role: 'Technical & Business Owner | Product Owner – Fintech Software Applications',
    period: 'Feb 2026 – Present',
    type: 'current',
    points: [
      'Lead and manage a cross-functional team of 3 Software Engineers and 4 Support Team Members, overseeing day-to-day task assignment, workload planning, and team performance.',
      'Drive end-to-end product ownership for fintech software applications, including requirement gathering, sprint planning, backlog management, and release coordination.',
      'Conduct market analysis to identify new business opportunities and translate findings into actionable product requirements and development roadmaps.',
      'Gather and document new requirements from stakeholders, writing detailed Business Process Documents (BPD), User Stories, and Functional Specifications for new SaaS-based fintech solutions.',
      'Maintain deep finance domain knowledge across core banking operations including loan processing, customer onboarding, account management, leasing, and BNPL workflows.',
      'Oversee New Development tasks in collaboration with the developer team, ensuring timely delivery, quality standards, and alignment with business objectives.',
      'Manage full project lifecycle – from initiation and planning through to delivery, UAT, and production release across multiple concurrent fintech projects.',
      'Responsible for Application QA – functional testing, defect tracking, regression testing, and post-release validation in collaboration with the development team.',
      'Handle resource management – capacity planning, sprint allocation, and productivity optimization across engineering and support teams.',
      'Design and document complete end-to-end business processes for new SaaS-based fintech software solutions covering operational, financial, and customer-facing workflows.',
      'Actively developing new systems using Vibe Coding (AI-assisted development with GitHub Copilot Agent, Cursor IDE, Windsurf/Antigravity IDE, and VS Code).',
      'Successfully completed full development of a SaaS-based Help Desk System (Rabbit Desk) using Vibe Coding – delivered end-to-end independently.',
      'Currently developing a BNPL (Buy Now Pay Later) System (iPayLater) – including business logic, workflows, and system architecture.',
      'Building a USA Client-based Customer Onboarding & Loan Origination System aligned with USA client compliance and lending workflows.',
      'Developing an HR Management System to streamline internal HR operations and employee management.',
      'Developing commercial marketing websites for the Help Desk and BNPL systems for market-facing presence.',
      'Leading the development of the Leasing System Frontend in collaboration with the engineering team.',
    ],
  },
  {
    company: 'FINAP – Fintechnology Asia Pacific Lanka (Pvt) Ltd',
    role: 'Application Support Engineer',
    period: 'Feb 2024 – Feb 2026',
    type: 'past',
    points: [
      'Provided L2/L3 application support for core financial platforms, ensuring system availability and SLA compliance.',
      'Performed .NET application debugging using Visual Studio IDE, including code-level issue identification and resolution.',
      'Conducted application log analysis and Windows Event Viewer monitoring to diagnose production issues.',
      'Performed code performance monitoring and profiling using Visual Studio to identify bottlenecks and stability risks.',
      'Managed and tracked deliverables using Azure DevOps, including sprint planning, backlog refinement, and task coordination.',
      'Performed Azure monitoring, access control, and cost optimization, improving security posture and operational efficiency.',
      'Actively contributed to Leasing frontend development, leveraging AI-assisted tools to accelerate UI development and validation.',
      'Supported Azure SQL Server migration activities, including pre-migration checks, post-migration testing, and performance verification.',
      'Gathered requirements from stakeholders and prepared user stories, UI mockups, and business process documentation.',
      'Conducted functional, regression, and UAT testing, ensuring stable and high-quality releases.',
      'Maintained ISO 9001 & ISO 27001 documentation, supporting internal and external audits.',
      'Monitored, prioritized, and resolved incidents within agreed SLAs, minimizing downtime and business impact.',
    ],
  },
  {
    company: 'Sarasa Soft Solution (Pvt) Ltd',
    role: 'Software Implementation Specialist',
    period: 'Nov 2023 – Feb 2024',
    type: 'past',
    points: [
      'Supported end-to-end software implementations from requirement analysis to post-go-live stabilization.',
      'Performed SQL query comparisons using Visual Studio and Navicat to ensure data accuracy and consistency.',
      'Managed database administration tasks including backup, restore, and replication.',
      'Conducted UAT sessions with clients and coordinated issue resolution with development teams.',
      'Provided post-implementation support to ensure stable system adoption.',
    ],
  },
  {
    company: 'LB Finance PLC',
    role: 'System Support Engineer',
    period: 'Sep 2021 – Oct 2023',
    type: 'past',
    points: [
      'Provided production support for CIM Digital Wallet, Leasing, and Gold Loan systems.',
      'Resolved live production issues using log analysis and SQL troubleshooting, ensuring minimal downtime.',
      'Developed and monitored RPA automation workflows for SMS notifications, document generation, onboarding/offboarding, and CDM transaction recovery.',
      'Supported CRIB API integration, ensuring data accuracy and regulatory compliance.',
      'Conducted UAT testing and live deployments for mobile and web applications.',
      'Analyzed transaction and customer data to support management reporting and operational decisions.',
      'Supported CDM (Cash Deposit Machine) operations through database and log-level troubleshooting.',
    ],
  },
  {
    company: 'Bimputh Finance PLC',
    role: 'Executive – System Support',
    period: 'Sep 2018 – Oct 2021',
    type: 'past',
    points: [
      'Supported Eclips Leasing System and microfinance platforms for daily operations.',
      'Performed teller operations and assisted with loan disbursements, recoveries, and collections.',
      'Conducted field visits to support customer onboarding and relationship management.',
    ],
  },
  {
    company: '3K Holdings (Pvt) Ltd',
    role: 'System Administrator',
    period: 'Jul 2015 – Aug 2018',
    type: 'past',
    points: [
      'Administered ERP systems and ensured smooth system operations and user support.',
      'Prepared monthly sales, inventory, and reconciliation reports.',
      'Supported finance operations including petty cash and payment processing.',
    ],
  },
]

const PREVIEW = 5   // bullet points visible before "Show more"

function JobCard({ job }) {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? job.points : job.points.slice(0, PREVIEW)
  const hasMore = job.points.length > PREVIEW

  return (
    <div className={`${styles.card} ${job.type === 'current' && job.link ? styles.founder : ''}`}>
      <div className={styles.header}>
        <div>
          <h3 className={styles.role}>{job.role}</h3>
          <p className={styles.company}>
            {job.link
              ? <a href={job.link} target="_blank" rel="noreferrer" className={styles.companyLink}>
                  {job.company} <FiExternalLink size={12} />
                </a>
              : job.company
            }
          </p>
        </div>
        <span className={styles.period}>{job.period}</span>
      </div>
      <ul className={styles.points}>
        {visible.map((pt, j) => <li key={j}>{pt}</li>)}
      </ul>
      {hasMore && (
        <button className={styles.toggle} onClick={() => setExpanded(!expanded)}>
          {expanded ? '▲ Show less' : `▼ Show ${job.points.length - PREVIEW} more`}
        </button>
      )}
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <p className="section-title">Work <span>Experience</span></p>
        <p className="section-subtitle">9+ years of progressive fintech and software experience</p>

        <div className={styles.timeline}>
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              className={`${styles.item} ${job.type === 'current' ? styles.current : ''}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className={styles.dot} />
              <JobCard job={job} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
