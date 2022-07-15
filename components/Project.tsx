import styles from "./Project.module.css";
import IProject from "../types/project";

export default function Project({
  title,
  subtitle,
  description,
  stack,
  actions,
  wakatime,
}: IProject) {
  return (
    <>
      <p>{title}</p>
      <p>{subtitle}</p>
      <p>{description}</p>
      <p>{JSON.stringify(actions)}</p>
      <p>{wakatime}</p>
    </>
  );
}
