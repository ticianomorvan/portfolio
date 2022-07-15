import { NextPage } from "next";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import styles from "./Projects.module.css";

const Projects: NextPage = () => {
  return (
    <section className={styles.container}>
      <Link href="/">
        <span className={styles.back}>
          <FaArrowLeft />
          <p>Back to home</p>
        </span>
      </Link>
      <h1 className={styles.title}>Projects</h1>
      <h2 className={styles.subtitle}>
        These are some of my most important projects.
      </h2>
    </section>
  );
};

export default Projects;
