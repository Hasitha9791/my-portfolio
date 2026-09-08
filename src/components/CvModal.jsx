import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiDownload, FiExternalLink, FiX, FiFileText } from 'react-icons/fi'
import styles from './CvModal.module.css'

export default function CvModal({ isOpen, onClose }) {
  const cvPath = '/Hasitha_Weerasinghe_CV.pdf'

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.backdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={styles.modal}
            initial={{ scale: 0.94, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={styles.header}>
              <div className={styles.titleGroup}>
                <div className={styles.pdfIcon}>
                  <FiFileText />
                </div>
                <div>
                  <h3 className={styles.title}>Hasitha Weerasinghe – Curriculum Vitae</h3>
                  <p className={styles.subtitle}>Technical &amp; Business Owner | Product Owner – Fintech</p>
                </div>
              </div>

              <div className={styles.actions}>
                <a
                  href={cvPath}
                  download="Hasitha_Weerasinghe_CV.pdf"
                  className={`${styles.actionBtn} ${styles.downloadBtn}`}
                  title="Download PDF version of CV"
                >
                  <FiDownload size={14} /> PDF
                </a>
                <a
                  href="/Hasitha_Weerasinghe_CV.docx"
                  download="Hasitha_Weerasinghe_CV.docx"
                  className={`${styles.actionBtn} ${styles.docxBtn}`}
                  title="Download Microsoft Word (.docx) version of CV"
                >
                  <FiFileText size={14} /> Word (.docx)
                </a>
                <a
                  href={cvPath}
                  target="_blank"
                  rel="noreferrer"
                  className={`${styles.actionBtn} ${styles.openTabBtn}`}
                  title="Open PDF in new browser tab"
                >
                  <FiExternalLink size={14} /> New Tab
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className={styles.closeBtn}
                  aria-label="Close CV preview"
                >
                  <FiX size={18} />
                </button>
              </div>
            </div>

            {/* Embedded PDF iframe */}
            <div className={styles.iframeWrapper}>
              <iframe
                src={`${cvPath}#toolbar=1&navpanes=0`}
                title="Hasitha Weerasinghe CV"
                className={styles.iframe}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
