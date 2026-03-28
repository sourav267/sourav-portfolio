/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import styles from "./App.module.css";

import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Footer from "./components/Footer";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className={styles.app}>
      {/* Scroll Progress Bar */}
      <motion.div
        className={styles.scrollProgress}
        style={{ scaleX }}
      />

      <Navbar isDark={isDark} setIsDark={setIsDark} />

      <main className={styles.main}>
        {/* Main Content Grid */}
        <div className={styles.editorialGrid}>
          <section id="experience" className={styles.experienceSection}>
            <Experience />
            <Education />
          </section>

          <Profile />
        </div>

        <Projects />
        <Skills />
      </main>

      <Footer />
    </div>
  );
}
