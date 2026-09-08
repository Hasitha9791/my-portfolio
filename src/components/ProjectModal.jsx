import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiExternalLink, FiCpu, FiLayers, FiCheckSquare, FiTrendingUp, FiMonitor, FiServer, FiDatabase, FiCloud } from 'react-icons/fi'
import styles from './ProjectModal.module.css'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  if (!project) return null

  return (
    <AnimatePresence>
      <div className={styles.backdrop} onClick={onClose} role="dialog" aria-modal="true">
        <motion.div
          className={styles.modal}
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 30 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {/* Header */}
          <div className={styles.header}>
            <div className={styles.headerTitle}>
              <div className={styles.headerIconWrap}>
                <FiLayers size={22} color="#38bdf8" />
              </div>
              <div>
                <h2 className={styles.title}>{project.title}</h2>
                <p className={styles.subtitle}>Executive Case Study &amp; Technical Architecture</p>
              </div>
            </div>
            <div className={styles.headerActions}>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                  style={{ padding: '8px 16px', fontSize: '0.84rem' }}
                >
                  <FiExternalLink size={14} /> Live Site
                </a>
              )}
              <button
                onClick={onClose}
                className={styles.closeBtn}
                aria-label="Close modal"
              >
                <FiX />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className={styles.body}>
            {/* Key Metrics Grid */}
            {project.caseStudy?.metrics && (
              <div className={styles.metricsGrid}>
                {project.caseStudy.metrics.map((m, idx) => (
                  <div key={idx} className={styles.metricCard}>
                    <span className={styles.metricVal}>{m.val}</span>
                    <span className={styles.metricLabel}>{m.label}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Challenge & Objective */}
            <div className={styles.block}>
              <h3 className={styles.blockTitle}>
                <FiLayers size={18} color="#38bdf8" /> Business Challenge &amp; Objective
              </h3>
              <p className={styles.blockText}>
                {project.caseStudy?.challenge || project.problem}
              </p>
            </div>

            {/* Architecture Diagram */}
            {project.caseStudy?.architecture && (
              <div className={styles.block}>
                <h3 className={styles.blockTitle}>
                  <FiCpu size={18} color="#38bdf8" /> System Architecture &amp; Data Flow
                </h3>
                <div className={styles.archDiagram}>
                  <div className={styles.archGrid}>
                    <div className={styles.archNode}>
                      <span className={styles.archNodeTitle}>
                        <FiMonitor size={14} /> Client Layer
                      </span>
                      <span className={styles.archNodeItems}>{project.caseStudy.architecture.client}</span>
                    </div>
                    <span className={styles.archArrow}>➔</span>
                    <div className={styles.archNode}>
                      <span className={styles.archNodeTitle}>
                        <FiServer size={14} /> API / Backend
                      </span>
                      <span className={styles.archNodeItems}>{project.caseStudy.architecture.api}</span>
                    </div>
                    <span className={styles.archArrow}>➔</span>
                    <div className={styles.archNode}>
                      <span className={styles.archNodeTitle}>
                        <FiDatabase size={14} /> Data &amp; Storage
                      </span>
                      <span className={styles.archNodeItems}>{project.caseStudy.architecture.data}</span>
                    </div>
                    <span className={styles.archArrow}>➔</span>
                    <div className={styles.archNode}>
                      <span className={styles.archNodeTitle}>
                        <FiCloud size={14} /> AI &amp; Cloud Ops
                      </span>
                      <span className={styles.archNodeItems}>{project.caseStudy.architecture.cloud}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Product Strategy & Leadership */}
            <div className={styles.block}>
              <h3 className={styles.blockTitle}>
                <FiCheckSquare size={18} color="#38bdf8" /> Product Strategy &amp; Engineering Role
              </h3>
              <p className={styles.blockText}>
                {project.caseStudy?.strategy || project.role}
              </p>
            </div>

            {/* Key Deliverables */}
            {project.caseStudy?.deliverables && (
              <div className={styles.block}>
                <h3 className={styles.blockTitle}>
                  <FiCheckSquare size={18} color="#38bdf8" /> Key Deliverables &amp; Artifacts
                </h3>
                <ul className={styles.list}>
                  {project.caseStudy.deliverables.map((item, idx) => (
                    <li key={idx} className={styles.listItem}>
                      <span className={styles.listDot}>▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Measurable Business Outcomes */}
            <div className={styles.block}>
              <h3 className={styles.blockTitle}>
                <FiTrendingUp size={18} color="#4ade80" /> Measurable Business Outcomes
              </h3>
              <div className={styles.blockText} style={{ color: '#e2e8f0', fontWeight: 500 }}>
                {project.impact}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
