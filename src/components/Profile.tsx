import { motion } from "motion/react";
import { MapPin, Mail, Github, Linkedin } from "lucide-react";
import styles from "../App.module.css";

export default function Profile() {
  return (
    <aside id="about" className={styles.aside}>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className={styles.stickyProfile}
      >
        <div className={styles.profileCard}>
          <div className={styles.profileAvatar}>
            S<span className={styles.avatarK}>K</span>
          </div>
          <h3 className={styles.profileName}>Sourav Kumar</h3>
          <p className={styles.profileRole}>Senior Full-Stack Engineer</p>
          
          <div className={styles.contactList}>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <MapPin className="w-5 h-5" />
              </div>
              <span className={styles.contactText}>Bengaluru, India</span>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <Mail className="w-5 h-5" />
              </div>
              <span className={styles.contactText}>supersouravv@gmail.com</span>
            </div>
          </div>

          <div className={styles.socialLinks}>
            <a href="https://github.com/souravkumar267" className={styles.socialLink}>
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/sourav13" className={styles.socialLink}>
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </motion.div>
    </aside>
  );
}
