import type { GetStaticProps, GetStaticPropsResult } from "next";
import type IProject from "../../types/project";
import type { NextPage } from "next";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import styles from "./Projects.module.css";
import Project from "../../components/Project";

type ProjectsPageType = {
  projects: IProject[];
};

const Projects: NextPage<ProjectsPageType> = ({
  projects,
}: ProjectsPageType) => {
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

      <ul className={styles.projects}>
        {projects.map(
          ({ title, subtitle, description, stack, actions, wakatime }) => (
            <Project
              key={title}
              title={title}
              subtitle={subtitle}
              description={description}
              stack={stack}
              actions={actions}
              wakatime={wakatime}
            />
          )
        )}
      </ul>
    </section>
  );
};

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<ProjectsPageType>
> => {
  const projects = (await import("../../data/projects")).default;

  return {
    props: {
      projects,
    },
  };
};

export default Projects;
