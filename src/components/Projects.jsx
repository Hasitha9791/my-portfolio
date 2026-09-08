import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiTarget, FiUserCheck, FiCpu, FiTrendingUp, FiBookOpen } from 'react-icons/fi'
import ProjectModal from './ProjectModal'
import styles from './Projects.module.css'

const categories = [
  { id: 'all', label: 'All' },
  { id: 'saas', label: 'SaaS' },
  { id: 'fintech', label: 'Fintech' },
  { id: 'enterprise', label: 'Enterprise' },
  { id: 'ai', label: 'AI / Vibe Coding' },
]

const projects = [
  {
    title: 'AxentraTech – Custom Software Company',
    link: 'https://www.axentratech.com',
    linkLabel: 'axentratech.com',
    featured: true,
    category: ['saas', 'enterprise', 'ai'],
    screenshot: '/projects/axentratech.png',
    logoOnly: true,
    placeholderGrad: 'linear-gradient(135deg, #0f2554 0%, #1e6fd9 50%, #38bdf8 100%)',
    tags: ['Founder & CEO', 'Custom Software', 'SaaS', 'Sri Lanka'],
    description: 'Sri Lanka-based custom software engineering company delivering modern web applications, mobile apps, and enterprise SaaS solutions.',
    problem: 'Rising regional demand for agile, modern enterprise digital transformation, cloud migrations, and bespoke software solutions with rapid go-to-market speed.',
    role: 'CEO & Founder — Leading technical vision, client acquisition, architectural oversight, and managing cross-functional engineering and BA teams.',
    techTools: 'React, Node.js, Next.js, Azure Cloud, Cursor IDE, Windsurf / Antigravity, GitHub Copilot.',
    impact: 'Bootstrapped to active revenue with a 3x faster delivery cycle; engineered 2 flagship SaaS pipelines (HRMS & Help Desk).',
    caseStudy: {
      metrics: [
        { val: '3x Faster', label: 'Delivery Velocity' },
        { val: '2 Flagship', label: 'SaaS In Pipeline' },
        { val: '100%', label: 'Cloud Architecture' },
        { val: 'ISO Ready', label: 'Compliance Standards' },
      ],
      challenge: 'Traditional software consultancies often suffer from 6-12 month delivery cycles, bloated overhead, and rigid communication. AxentraTech was founded to combine enterprise-grade discipline with modern AI-accelerated workflows to ship high-performing software products faster.',
      architecture: {
        client: 'Next.js 14, React, Tailwind CSS, Responsive Mobile UI',
        api: 'Node.js & .NET Core REST Microservices with JWT Auth',
        data: 'Azure SQL & PostgreSQL with Redis Caching Layer',
        cloud: 'Azure App Services, GitHub Actions CI/CD, Application Insights',
      },
      strategy: 'Built an agile agency delivery framework leveraging Vibe Coding pipelines (Windsurf, Cursor, Copilot) for rapid MVP prototyping, while maintaining rigorous ISO 9001 quality controls, user story traceability, and staging UAT sign-offs.',
      deliverables: [
        'Commercial corporate web presence and client inquiry portal',
        'Multi-tenant HRMS and Help Desk SaaS architecture blueprints',
        'Client project onboarding & requirement gathering framework',
        'CI/CD deployment pipelines on Azure with automated testing',
      ],
    },
  },
  {
    title: 'Rabbit Desk – Help Desk SaaS',
    link: 'https://www.rabbit-desk.com',
    linkLabel: 'rabbit-desk.com',
    category: ['saas', 'ai', 'enterprise'],
    screenshot: '/projects/rabbit-desk.png',
    placeholderGrad: 'linear-gradient(135deg, #1a0a2e 0%, #6d28d9 60%, #a78bfa 100%)',
    tags: ['SaaS', 'Help Desk', 'Vibe Coding', 'Full Stack'],
    description: 'Complete multi-agent SaaS help desk ticketing system with automated routing, SLA escalation tracking, and analytics.',
    problem: 'Support teams suffered from fragmented customer tickets across channels, manual dispatch delays, and lack of real-time SLA metrics.',
    role: 'Product Owner & Lead Developer — Authored complete BPD, designed UI/UX, engineered frontend/backend architecture, and launched commercial portal.',
    techTools: 'React JS, REST APIs, Node.js, SQLite/PostgreSQL, Cursor IDE, Windsurf IDE.',
    impact: 'Delivered 100% independently using Vibe Coding, cutting development time from 6 months to 4 weeks with zero defect go-live.',
    caseStudy: {
      metrics: [
        { val: '4 Weeks', label: 'End-to-End Delivery' },
        { val: '100%', label: 'Automated SLA Routing' },
        { val: '0 Defect', label: 'Commercial Launch' },
        { val: 'Multi-Agent', label: 'Collaboration' },
      ],
      challenge: 'Small to mid-sized businesses frequently struggle with enterprise ticketing tools that are overly complex and expensive. Rabbit Desk needed to provide immediate setup, SLA breach timers, and multi-agent assignment without steep learning curves.',
      architecture: {
        client: 'React SPA with dynamic filterable Kanban & Ticket Queues',
        api: 'Express / Node.js API with Role-Based Access Control',
        data: 'Relational database schema with ticket event logging',
        cloud: 'Docker containerized deployment with webhook notification triggers',
      },
      strategy: 'Engineered entirely via AI-assisted Vibe Coding. Developed complete Business Process Documents (BPD) first, fed structured specs into Cursor and Windsurf IDEs, and generated clean, modular components with instant test validation.',
      deliverables: [
        'Agent workspace with real-time ticket triage and collision warnings',
        'Automated SLA countdown timers with amber/red breach notifications',
        'Customer knowledge base portal with search autocompletion',
        'Commercial product marketing website and pricing tiers',
      ],
    },
  },
  {
    title: 'iPayLater – BNPL Platform',
    link: 'https://merchant.ipaylater.online',
    linkLabel: 'merchant.ipaylater.online',
    category: ['saas', 'fintech', 'ai'],
    screenshot: '/projects/ipaylater.png',
    placeholderGrad: 'linear-gradient(135deg, #2d0076 0%, #7c3aed 50%, #a855f7 100%)',
    tags: ['BNPL', 'Fintech', 'QR Payments', 'Full Stack'],
    description: 'Omnichannel Buy Now Pay Later platform with merchant onboarding portal, admin risk analytics, and QR payment engine.',
    problem: 'Retail merchants needed friction-free point-of-sale split payments with instant third-party settlement and automated instalment tracking.',
    role: 'Technical & Business Owner — Defined lending calculations, merchant portal workflows, third-party payment integrations, and compliance rules.',
    techTools: 'React, .NET Core APIs, QR Payment Gateway, Azure App Services, AI pipelines.',
    impact: 'Automated 100% of merchant onboarding verification and reduced split-payment checkout friction by ~45%.',
    caseStudy: {
      metrics: [
        { val: '~45%', label: 'Friction Reduction' },
        { val: '100%', label: 'Automated KYC Flow' },
        { val: 'Instant QR', label: 'POS Settlements' },
        { val: 'ACID', label: 'Financial Transactions' },
      ],
      challenge: 'Traditional credit schemes create high friction at retail point-of-sale. iPayLater required an instant, reliable QR payment experience that splits totals into manageable interest-free installments while guaranteeing merchant payouts and fraud checks.',
      architecture: {
        client: 'React Merchant Web App & Super Admin Analytics Portal',
        api: '.NET Core RESTful APIs handling ledger calculations',
        data: 'Azure SQL Server with strict transaction isolation',
        cloud: 'Azure App Services with Webhook payment callbacks & CRIB check',
      },
      strategy: 'Led product ownership across end-to-end payment lifecycle: mapped customer checkout journeys, merchant settlement terms, automated KYC verification gates, and daily merchant ledger reconciliations.',
      deliverables: [
        'Merchant dashboard for sales tracking, QR generation, and payout logs',
        'Super admin control room for risk parameters and dispute resolution',
        'Instant dynamic QR payment engine with mobile banking integration',
        'Automated installment schedule generator with SMS reminder webhooks',
      ],
    },
  },
  {
    title: 'USA Client Loan Origination System',
    category: ['fintech', 'ai', 'enterprise'],
    screenshot: '/projects/loan-origination.png',
    placeholderGrad: 'linear-gradient(135deg, #1a0e04 0%, #92400e 60%, #d97706 100%)',
    tags: ['Loan Origination', 'USA Compliance', 'Full Stack', 'In Progress'],
    description: 'Customer onboarding & end-to-end loan workflow management platform strictly aligned with USA regulatory lending compliance.',
    problem: 'USA lending client required an audit-compliant, automated loan origination pipeline to eliminate manual credit underwriting bottlenecks.',
    role: 'Product Owner & Business Analyst — Mapped complex KYC/AML intake gates, document verification flows, underwriting rules, and milestone approvals.',
    techTools: 'React, Microservices Architecture, Azure Cloud, Azure DevOps, Windsurf IDE.',
    impact: 'Streamlined intake-to-approval workflow; projected to reduce manual verification turnaround time by ~40%.',
    caseStudy: {
      metrics: [
        { val: '~40%', label: 'Faster Underwriting' },
        { val: '100%', label: 'USA Compliance' },
        { val: 'Zero Audit', label: 'Non-Conformances' },
        { val: 'Automated', label: 'Document Review' },
      ],
      challenge: 'US lending regulations mandate rigorous borrower identification, verifiable income intake, and transparent underwriting audit trails. Manual review cycles created significant pipeline delays and high drop-off rates.',
      architecture: {
        client: 'Secure Borrower Intake Portal & Underwriter Queue Dashboard',
        api: 'Microservices API Layer with Tokenized PII Data Handling',
        data: 'Encrypted Azure SQL Database with strict audit logging',
        cloud: 'Azure Cloud with role-based IAM and automated CI/CD',
      },
      strategy: 'Designed a state-machine loan workflow (Application Submitted -> Identity Verified -> Underwriting Review -> Conditional Approval -> Document Sign -> Disbursement) with automated validation gates at every stage.',
      deliverables: [
        'Multi-step borrower application form with live validation and save states',
        'Underwriter review dashboard with automated credit scoring markers',
        'Document repository with secure inline viewing and verification stamps',
        'Comprehensive Business Process Documentation (BPD) and test matrices',
      ],
    },
  },
  {
    title: 'HR Management System (HRMS)',
    category: ['saas', 'enterprise', 'ai'],
    screenshot: '/projects/hr-system.png',
    placeholderGrad: 'linear-gradient(135deg, #0c1a2e 0%, #0e7490 60%, #22d3ee 100%)',
    tags: ['HR Tech', 'SaaS', 'Internal Tools', 'In Progress'],
    description: 'Unified enterprise HR operations platform covering attendance tracking, tiered leave approvals, automated payroll, and employee records.',
    problem: 'Manual spreadsheets and siloed employee management led to payroll errors, attendance discrepancies, and compliance overhead.',
    role: 'Product Owner & Architect — Designed system workflows, role-based access control (RBAC), multi-tier leave approval trees, and payroll algorithms.',
    techTools: 'React, Next.js, Node.js, PostgreSQL, Cursor IDE, AI-assisted development.',
    impact: 'Centralized 100% of organizational HR workflows, reducing administrative payroll processing time by over 50%.',
    caseStudy: {
      metrics: [
        { val: '>50%', label: 'Admin Time Saved' },
        { val: '100%', label: 'Workflow Automation' },
        { val: 'Zero', label: 'Payroll Math Errors' },
        { val: 'Role-Based', label: 'Tiered Approvals' },
      ],
      challenge: 'Enterprise teams waste dozens of hours every month reconciling manual attendance logs, email-based leave requests, and complex payroll deductions. A unified system was required to automate these workflows with granular role security.',
      architecture: {
        client: 'Responsive Employee & Manager Self-Service Web UI',
        api: 'Node.js REST Services with multi-tenant company isolation',
        data: 'PostgreSQL relational database with leave quota indexes',
        cloud: 'Containerized deployment with automated monthly report jobs',
      },
      strategy: 'Modeled enterprise organizational hierarchies (Staff -> Team Lead -> Department Head -> HR Director), enabling automated notification routing and one-click leave and payroll approvals.',
      deliverables: [
        'Employee profile and document vault with expiry alerts',
        'Leave management engine with automatic quota balance adjustments',
        'Attendance tracking with shift logic and biometric log import',
        'Automated salary payslip generation with tax and deduction rules',
      ],
    },
  },
  {
    title: 'First Micro – SaaS Loan Marketplace',
    category: ['saas', 'fintech'],
    screenshot: '/projects/firstmicro.png',
    placeholderGrad: 'linear-gradient(135deg, #1a0d1a 0%, #9d174d 60%, #f472b6 100%)',
    tags: ['Loan Marketplace', 'SaaS', 'UI/UX', 'BPD'],
    description: 'Interactive SaaS-based loan comparison and marketplace engine with dynamic interest schedule calculators.',
    problem: 'Microfinance borrowers needed transparent interest rate comparison tools across differing repayment frequencies and loan categories.',
    role: 'Business Analyst & Product Owner — Conducted market analysis, authored detailed BPDs, designed UI mockups, and verified interest formulas.',
    techTools: 'Figma, .NET Core, SQL Server, Visual Studio, Azure DevOps.',
    impact: 'Achieved 100% calculation accuracy and QA test pass rate for complex reducing and compound interest loan models.',
  },
  {
    title: 'Leasing System Frontend',
    category: ['fintech', 'ai'],
    screenshot: '/projects/leasing.png',
    placeholderGrad: 'linear-gradient(135deg, #0a1a10 0%, #15803d 60%, #4ade80 100%)',
    tags: ['Leasing', 'Frontend', 'AI-Assisted', 'Fintech'],
    description: 'Modernized frontend interface for financial leasing, facility calculations, asset depreciation, and payment scheduling.',
    problem: 'Legacy back-office leasing screens were slow, complex for loan officers, and prone to user input errors during schedule calculations.',
    role: 'Frontend Product Lead — Led UI engineering, component structure, state management, and API integration using AI acceleration.',
    techTools: 'React JS, Vite, CSS Modules, REST APIs, GitHub Copilot.',
    impact: 'Accelerated UI delivery cycle by 50% while improving field officer calculation speed and usability scores.',
  },
  {
    title: 'CIM Digital Wallet',
    category: ['fintech'],
    screenshot: '/projects/cim-wallet.jfif',
    placeholderGrad: 'linear-gradient(135deg, #0f0a1e 0%, #7c3aed 60%, #c4b5fd 100%)',
    tags: ['Digital Wallet', 'Production Support', 'UAT'],
    description: 'High-volume digital wallet powering mobile payments, merchant QR settlements, and instant inter-bank fund transfers.',
    problem: 'Mission-critical wallet required 24/7 transaction consistency, instant exception handling, and strict CRIB regulatory compliance.',
    role: 'System Support Engineer — Production troubleshooting, transaction analysis, UAT verification, and CRIB API monitoring.',
    techTools: 'SQL Server Profiler, Log Analytics, Windows Event Viewer, CRIB API, LB Finance Infra.',
    impact: 'Maintained 99.9% uptime and SLA adherence for thousands of daily consumer transactions with zero ledger discrepancy.',
  },
  {
    title: 'RPA Automation Projects',
    category: ['enterprise'],
    screenshot: '/projects/rpa.svg',
    placeholderGrad: 'linear-gradient(135deg, #0a1520 0%, #0369a1 60%, #38bdf8 100%)',
    tags: ['RPA', 'Automation', 'LB Finance'],
    description: 'Automated software robot workflows executing high-volume banking operations without manual human intervention.',
    problem: 'Repetitive operational tasks (SMS alerts, customer letters, CDM deposit transaction recovery) suffered from human delays and backlog.',
    role: 'RPA Workflow Developer & Support Engineer — Mapped end-to-end exception rules, configured automation scripts, and monitored robot schedules.',
    techTools: 'RPA Automation Engines, SQL Server, Batch Scripts, Webhooks.',
    impact: 'Eliminated 80%+ of manual operational labor for daily notification batches and automated recovery for failed CDM transactions.',
  },
  {
    title: 'First Micro PLUS Banking System',
    category: ['fintech', 'enterprise'],
    screenshot: '/projects/firstmicro-plus.png',
    placeholderGrad: 'linear-gradient(135deg, #0f1a2e 0%, #1d4ed8 60%, #60a5fa 100%)',
    tags: ['Banking', 'Application Support', 'UAT', 'BPD'],
    description: 'Enterprise core banking platform supporting multi-branch deposits, loans, general ledgers, and teller operations.',
    problem: 'Core banking operations required guaranteed data consistency, day-end batch processing reliability, and strict SLA compliance.',
    role: 'Application Support Engineer & BA — Provided L2/L3 production support, SQL query audits, UAT coordination, and incident triage.',
    techTools: '.NET, Visual Studio, SQL Server, Navicat, Azure DevOps.',
    impact: 'Reduced recurring production tickets by 30% through root-cause code fixes and maintained 100% audit & SLA compliance.',
  },
  {
    title: 'Sarvodaya Banking System',
    category: ['fintech', 'enterprise'],
    screenshot: '/projects/sarvodaya.svg',
    placeholderGrad: 'linear-gradient(135deg, #0a1a10 0%, #065f46 60%, #34d399 100%)',
    tags: ['Banking', 'Requirements', 'UAT', 'Implementation'],
    description: 'Nationwide community and micro-banking system serving hundreds of regional branches and rural entrepreneur lending.',
    problem: 'Legacy banking systems needed migration to a centralized platform requiring extensive stakeholder training and data validation.',
    role: 'Software Implementation Specialist — Facilitated stakeholder requirement workshops, conducted UAT testing, and led on-site cutover support.',
    techTools: 'SQL Server, Core Banking Modules, UAT Test Matrices.',
    impact: 'Successfully executed nationwide branch rollout with zero downtime during cutover and seamless operational adoption.',
  },
  {
    title: 'FIRSTMICRO lite',
    logoOnly: true,
    category: ['fintech'],
    screenshot: '/projects/FirstMicroLite.png',
    placeholderGrad: 'linear-gradient(135deg, #1a0a00 0%, #c2410c 60%, #fb923c 100%)',
    tags: ['Loan Management', 'UI/UX', 'User Stories', 'BPD'],
    description: 'Lightweight, rapid loan management solution tailored for non-bank financial institutions and fast field deployments.',
    problem: 'Field microfinance officers needed a streamlined, low-complexity loan origination app that functions reliably on basic devices.',
    role: 'Product Designer & Business Analyst — Authored user stories, designed intuitive UI mockups, and created end-to-end BPD documentation.',
    techTools: 'Figma, Workflow Architecture, BPD Documentation, Visual Studio.',
    impact: 'Cut field officer training time from 2 weeks to 2 days through a simplified 3-step loan onboarding flow.',
  },
]

export default function Projects() {
  const [activeTab, setActiveTab] = useState('all')
  const [activeModalProject, setActiveModalProject] = useState(null)

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(p => p.category && p.category.includes(activeTab))

  const getCount = (tabId) => {
    if (tabId === 'all') return projects.length
    return projects.filter(p => p.category && p.category.includes(tabId)).length
  }

  return (
    <section id="projects">
      <div className="container">
        <p className="section-title">Featured <span>Projects</span></p>
        <p className="section-subtitle">SaaS products, fintech platforms, and enterprise systems I've designed and delivered</p>

        {/* ── Category Filter Tabs ── */}
        <div className={styles.filterWrap}>
          <div className={styles.filterTabs} role="tablist">
            {categories.map((cat) => {
              const isActive = activeTab === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`${styles.filterTab} ${isActive ? styles.filterTabActive : ''}`}
                  role="tab"
                  aria-selected={isActive}
                >
                  <span>{cat.label}</span>
                  <span className={styles.filterCount}>{getCount(cat.id)}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* ── Projects Grid ── */}
        <motion.div layout className={styles.grid}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                className={`${styles.card} ${p.featured && activeTab === 'all' ? styles.featured : ''}`}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
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
                      <FiLayers size={36} color="rgba(255,255,255,0.8)" />
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
                      <a href={p.link} target="_blank" rel="noreferrer" className={styles.extLink} aria-label={`Open ${p.title}`}>
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

                  {/* ── STAR Structured Breakdown ── */}
                  <div className={styles.starSection}>
                    <div className={styles.starRow}>
                      <span className={styles.starLabel}><FiTarget size={12}/> Problem</span>
                      <p className={styles.starTextMuted}>{p.problem}</p>
                    </div>
                    <div className={styles.starRow}>
                      <span className={styles.starLabel}><FiUserCheck size={12}/> My Role</span>
                      <p className={styles.starText}>{p.role}</p>
                    </div>
                    <div className={styles.starRow}>
                      <span className={styles.starLabel}><FiCpu size={12}/> Tech &amp; AI Tools</span>
                      <p className={styles.starTextMuted}>{p.techTools}</p>
                    </div>
                    {/* Business Impact Box */}
                    <div className={styles.impactBox}>
                      <span className={styles.impactLabel}><FiTrendingUp size={13}/> Impact:</span>
                      <span className={styles.impactText}>{p.impact}</span>
                    </div>
                  </div>

                  {/* ── Card Action Footer ── */}
                  <div className={styles.cardActions}>
                    <button
                      onClick={() => setActiveModalProject(p)}
                      className={styles.caseStudyBtn}
                      aria-label={`View Case Study for ${p.title}`}
                    >
                      <FiBookOpen size={14} /> View Case Study
                    </button>
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.liveLinkBtn}
                      >
                        Live Site <FiExternalLink size={12} />
                      </a>
                    )}
                  </div>

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
          </AnimatePresence>
        </motion.div>

        {/* ── Interactive Case Study Modal ── */}
        {activeModalProject && (
          <ProjectModal
            project={activeModalProject}
            onClose={() => setActiveModalProject(null)}
          />
        )}
      </div>
    </section>
  )
}
