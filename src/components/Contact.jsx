import { useRef, useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'
import { motion } from 'framer-motion'
import styles from './Contact.module.css'

// ── Formspree endpoint ────────────────────────────────────────
// Replace YOUR_FORM_ID after creating form at formspree.io
const FORMSPREE_URL = 'https://formspree.io/f/xojrwpal'

const contactInfo = [
  { icon: <FiMail />, label: 'Email', value: 'hasithasandaruwan1993@gmail.com', href: 'mailto:hasithasandaruwan1993@gmail.com' },
  { icon: <FiPhone />, label: 'Phone', value: '+94 77 494 7440', href: 'tel:+94774947440' },
  { icon: <FiMapPin />, label: 'Location', value: 'Pannipitiya, Colombo, Sri Lanka' },
  { icon: <FiLinkedin />, label: 'LinkedIn', value: 'hasitha-weerasinghe-8654031b7', href: 'https://www.linkedin.com/in/hasitha-weerasinghe-8654031b7' },
]

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('')   // '' | 'sending' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(formRef.current),
      })
      if (res.ok) {
        setStatus('success')
        formRef.current.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact">
      <div className="container">
        <p className="section-title">Get In <span>Touch</span></p>
        <p className="section-subtitle">Let's connect — I'm open to collaborations, opportunities, and conversations</p>

        <div className={styles.grid}>
          {/* Info */}
          <motion.div
            className={styles.info}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className={styles.infoTitle}>Contact Information</h3>
            <p className={styles.infoText}>
              Feel free to reach out via email, phone, or LinkedIn. I'm always happy to discuss
              fintech product opportunities, SaaS ideas, or technical collaborations.
            </p>
            <div className={styles.contactList}>
              {contactInfo.map((c) => (
                <div key={c.label} className={styles.contactItem}>
                  <span className={styles.contactIcon}>{c.icon}</span>
                  <div>
                    <p className={styles.contactLabel}>{c.label}</p>
                    {c.href
                      ? <a href={c.href} target="_blank" rel="noreferrer" className={styles.contactValue}>{c.value}</a>
                      : <p className={styles.contactValue}>{c.value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            ref={formRef}
            className={styles.form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.row}>
              <div className={styles.field}>
                <label>Your Name</label>
                <input type="text" name="name" placeholder="John Doe" required />
              </div>
              <div className={styles.field}>
                <label>Your Email</label>
                <input type="email" name="email" placeholder="john@example.com" required />
              </div>
            </div>
            <div className={styles.field}>
              <label>Subject</label>
              <input type="text" name="subject" placeholder="Project collaboration / Opportunity" required />
            </div>
            <div className={styles.field}>
              <label>Message</label>
              <textarea name="message" rows={5} placeholder="Tell me about your project or opportunity..." required />
            </div>
            <button
              type="submit"
              className={`btn btn-primary ${styles.submitBtn}`}
              disabled={status === 'sending'}
            >
              {status === 'sending'
                ? <><span className={styles.spinner} /> Sending...</>
                : <><FiSend /> Send Message</>
              }
            </button>
            {status === 'success' && (
              <p className={`${styles.status} ${styles.statusSuccess}`}>
                <FiCheckCircle /> Message sent! I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className={`${styles.status} ${styles.statusError}`}>
                <FiAlertCircle /> Something went wrong. Please email me directly at hasithasandaruwan1993@gmail.com
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
