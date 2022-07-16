import Tooltip from "./Tooltip";
import skills from "../data/skills";
import tech from "../models/tech";
import styles from "./Skills.module.css";

export default function SkillsContainer() {
  return (
    <ul className={styles.tech}>
      {skills.map((skill) =>
        skill.toLowerCase() in tech ? (
          <Tooltip key={skill} text={skill}>
            <span className={styles.icon}>{tech[skill.toLowerCase()]}</span>
          </Tooltip>
        ) : null
      )}
    </ul>
  );
}
