import { Sun, Moon } from "lucide-react";
import styles from "../App.module.css";

interface NavbarProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

export default function Navbar({ isDark, setIsDark }: NavbarProps) {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          Sourav<span className={styles.logoDot}>.</span>
        </div>
        <div className={styles.navLinks}>
          <a href="#experience" className={styles.navLink}>Experience</a>
          <a href="#projects" className={styles.navLink}>Projects</a>
          <a href="#skills" className={styles.navLink}>Skills</a>
          <a href="#about" className={styles.navLink}>About</a>
          <button 
            onClick={() => setIsDark(!isDark)}
            className={styles.themeToggle}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <a 
            href="mailto:supersouravv@gmail.com" 
            className={styles.ctaButton}
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
}
