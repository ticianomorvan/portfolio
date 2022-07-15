import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import SkillsContainer from "./Skills";
import Socials from "./Socials";

export default function Hero() {
  return (
    <div id="home" className={styles.container}>
      <motion.section
        className={styles.presentation}
        animate={{
          y: [50, 0],
          opacity: [0, 1],
        }}
        transition={{ ease: "easeOut" }}
      >
        <span className={styles.information}>
          <h1 className={styles.name}>
            I&apos;m <strong>Ticiano Morvan</strong>
          </h1>
          <h2 className={styles.role}>
            Self taught front-end developer and student.
          </h2>

          <span className={styles.external_links}>
            <a
              className={styles.blog}
              href="https://blog.ticianomorvan.me/"
              rel="noreferrer"
              target="_blank"
            >
              <strong>Blog</strong>
            </a>
            <a
              className={styles.projects}
              href="https://github.com/Ti7oyan/"
              rel="noreferrer"
              target="_blank"
            >
              <strong>Projects</strong> <p>(Check pinned repositories)</p>
            </a>
          </span>

          <Socials />
        </span>

        <SkillsContainer />
      </motion.section>
    </div>
  );
}
