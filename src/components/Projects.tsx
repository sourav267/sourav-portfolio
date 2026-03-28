import { motion } from "motion/react";
import { Code2, Github, ExternalLink } from "lucide-react";
import styles from "../App.module.css";
import { PROJECTS } from "../constants";

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <h2 className={styles.sectionTitle}>
        <span className={styles.sectionTitleLine}></span>
        Featured Projects
      </h2>
      <div className={styles.projectsGrid}>
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={styles.projectCard}
          >
            <div className={styles.projectHeader}>
              <div className={styles.projectIcon}>
                <Code2 className="w-6 h-6" />
              </div>
              <div className={styles.projectLinks}>
                <a href={project.github} className={styles.projectLink}>
                  <Github className="w-5 h-5" />
                </a>
                <a href={project.link} className={styles.projectLink}>
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDesc}>
              {project.description}
            </p>
            <div className={styles.techStack}>
              {project.tech.map((t) => (
                <span key={t} className={styles.techTag}>
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
