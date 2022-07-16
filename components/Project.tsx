import styles from "./Project.module.css";
import IProject from "../types/project";
import tech from "../models/tech";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Image from "next/image";
import Tooltip from "../components/Tooltip";

// External Link

type ExternalLinkType = {
  url: string;
  github?: boolean;
};

const ExternalLink = ({ url, github }: ExternalLinkType) => (
  <a href={url} target="_blank" rel="noreferrer">
    <span className={styles.link}>
      {github ? <FaGithub /> : <FaExternalLinkAlt />}
    </span>
  </a>
);

// Tech Icon

const TechIcon = ({ name }: { name: string }) => {
  if (!(name.toLowerCase() in tech)) return null;
  return (
    <Tooltip text={name}>
      <span className={styles.tech}>{tech[name.toLowerCase()]}</span>
    </Tooltip>
  );
};

export default function Project({
  title,
  subtitle,
  description,
  stack,
  actions,
  wakatime,
}: IProject) {
  return (
    <li className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <h4 className={styles.subtitle}>{subtitle}</h4>

      <span>
        <Image
          src={`${wakatime}?style=social`}
          alt={`${title}'s wakatime badge.`}
          width={173}
          height={20}
        />
      </span>

      <p className={styles.description}>{description}</p>

      <div className={styles.bottom}>
        <ul className={styles.stack}>
          {stack.map((tech) => (
            <TechIcon key={tech} name={tech} />
          ))}
        </ul>

        <div className={styles.external_links}>
          <ExternalLink url={actions.repository} github />
          {actions.deployment ? (
            <ExternalLink url={actions.deployment} />
          ) : null}
        </div>
      </div>
    </li>
  );
}
