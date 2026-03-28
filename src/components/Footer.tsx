import { Github, Linkedin } from "lucide-react";
import styles from "../App.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerTop}>
          <div className={styles.footerCol}>
            <div className={styles.footerLogo}>
              Sourav<span className={styles.logoDot}>.</span>
            </div>
          </div>
          <div className={styles.footerGrid}>
            <div className={styles.footerCol}>
              <h4 className={styles.footerLabel}>Social</h4>
              <div className={styles.footerLinks}>
                <a href="https://github.com/souravkumar267" className={styles.footerLink}>
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a href="https://linkedin.com/in/sourav13" className={styles.footerLink}>
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </div>
            </div>
            <div className={styles.footerCol}>
              <h4 className={styles.footerLabel}>Contact</h4>
              <div className={styles.footerLinks}>
                <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Bengaluru, IN</span>
                <a href="mailto:souravkumar267@gmail.com" className={styles.footerEmail}>Email Me</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© 2026 Sourav Kumar. Built with React & Precision.</p>
          <div className={styles.footerLegal}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
