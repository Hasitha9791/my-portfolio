import { motion } from 'framer-motion'
import styles from './Personal.module.css'

const items = [
  {
    emoji: '🏫',
    title: 'Deputy Head Prefect',
    subtitle: 'Badulla Central College',
    desc: 'Elected Deputy Head Prefect — led school-wide initiatives, managed student discipline, and represented the student body at official functions. Developed early leadership, public speaking, and team coordination skills.',
  },
  {
    emoji: '🏉',
    title: 'Rugby Player',
    subtitle: 'School Rugby Team',
    desc: 'Active rugby player throughout school years — built resilience, teamwork under pressure, and a competitive mindset that I carry into product ownership and team leadership today.',
  },
  {
    emoji: '🏏',
    title: 'Cricket Player',
    subtitle: 'School Cricket Team',
    desc: "Played competitive cricket at school level — a sport that taught patience, strategic thinking, and the importance of each team member's role in achieving a collective goal.",
  },
  {
    emoji: '🤖',
    title: 'AI & Vibe Coding Enthusiast',
    subtitle: 'Personal Interest',
    desc: 'Passionate about the frontier of AI-assisted development — using Cursor, GitHub Copilot, and agentic workflows to prototype and ship products faster than traditional development cycles.',
  },
  {
    emoji: '📚',
    title: 'Continuous Learner',
    subtitle: 'Self-Development',
    desc: 'Committed to lifelong learning — from Azure certifications to studying fintech regulations, product frameworks (JTBD, OKRs), and emerging technologies that shape the future of software.',
  },
  {
    emoji: '🚀',
    title: 'Entrepreneur at Heart',
    subtitle: 'Founder – AxentraTech',
    desc: 'Built and launched AxentraTech from the ground up while maintaining a full-time career. Driven by the belief that great software can transform businesses and improve lives across Sri Lanka and beyond.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
}

export default function Personal() {
  return (
    <section id="personal">
      <div className="container">
        <p className="section-title">Beyond <span>Work</span></p>
        <p className="section-subtitle">Leadership, sport, and passions that shaped who I am professionally</p>

        <div className={styles.grid}>
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              className={styles.card}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              <div className={styles.emojiWrap}>
                <span className={styles.emoji}>{item.emoji}</span>
              </div>
              <div className={styles.body}>
                <h3 className={styles.title}>{item.title}</h3>
                <span className={styles.subtitle}>{item.subtitle}</span>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
