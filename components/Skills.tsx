import Tooltip from "./Tooltip";
import tech from "../data/skills";
import styles from "./Skills.module.css";

export default function SkillsContainer() {
  return (
    <ul className={styles.tech}>
      {tech.map(({ name, icon }) => (
        <Tooltip key={name} text={name}>
          <span className={styles.icon}>{icon}</span>
        </Tooltip>
      ))}
    </ul>
  );
}
