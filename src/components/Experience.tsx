import { motion } from "motion/react";
import styles from "../App.module.css";
import { EXPERIENCE } from "../constants";

export default function Experience() {
  return (
    <div>
      <h2 className={styles.sectionTitle}>
        <span className={styles.sectionTitleLine}></span>
        Work History
      </h2>
      <div className={styles.timeline}>
        {EXPERIENCE.map((job, idx) => (
          <motion.article 
            key={idx}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={styles.timelineItem}
          >
            <div className={`${styles.timelineDot} ${job.current ? styles.timelineDotActive : ''}`} />
            
            <header className={styles.jobHeader}>
              <div className={styles.jobTitleRow}>
                <div>
                  <h3 className={styles.jobTitle}>{job.role}</h3>
                  <p className={styles.jobCompany}>{job.company}</p>
                </div>
                <span className={styles.jobPeriod}>
                  {job.period}
                </span>
              </div>
            </header>
            
            <ul className={styles.jobHighlights}>
              {job.highlights.map((point, pIdx) => (
                <li key={pIdx} className={styles.jobHighlight}>
                  <span className={styles.bullet}>•</span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
