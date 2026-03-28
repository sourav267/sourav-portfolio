import styles from "../App.module.css";
import { EDUCATION } from "../constants";

export default function Education() {
  return (
    <div>
      <h2 className={styles.sectionTitle}>
        <span className={styles.sectionTitleLine}></span>
        Education
      </h2>
      <div className={styles.educationCard}>
        <span className={styles.eduLabel}>
          {EDUCATION.degree}
        </span>
        <h4 className={styles.eduDegree}>{EDUCATION.field}</h4>
        <p className={styles.eduSchool}>{EDUCATION.school}</p>
        <div className={styles.eduFooter}>
          <span className={styles.eduPeriod}>{EDUCATION.period}</span>
          <span className={styles.eduLocation}>{EDUCATION.location}</span>
        </div>
      </div>
    </div>
  );
}
