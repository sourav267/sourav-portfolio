import { motion } from "motion/react";
import styles from "../App.module.css";
import { SKILL_CATEGORIES } from "../constants";

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <h2 className={styles.sectionTitle}>
        <span className={styles.sectionTitleLine}></span>
        Technical Arsenal
      </h2>
      <div className={styles.skillsGrid}>
        {SKILL_CATEGORIES.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -5 }}
            className={styles.skillCard}
          >
            <div className={styles.skillIconWrapper} style={{ backgroundColor: category.color, color: category.textColor }}>
              {category.icon}
            </div>
            <h3 className={styles.skillTitle}>{category.title}</h3>
            <div className={styles.skillTags}>
              {category.skills.map((skill) => (
                <span 
                  key={skill} 
                  className={styles.skillTag}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
