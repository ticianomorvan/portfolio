import { ReactElement } from "react";
import { IconType } from "react-icons";
import Tooltip from "./Tooltip";
import styles from "./Socials.module.css";

// Icons
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

type SocialType = {
  name: string;
  icon: ReactElement<IconType>;
  url: string;
};

const socials: Array<SocialType> = [
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: "https://instagram.com/ticianomorvan",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://linkedin.com/in/ticianomorvan",
  },
  { name: "GitHub", icon: <FaGithub />, url: "https://github.com/Ti7oyan" },
];

const SocialIcon = ({ name, icon, url }: SocialType) => (
  <Tooltip text={name}>
    <a className={styles.url} href={url} target="_blank" rel="noreferrer">
      <span className={styles.icon}>{icon}</span>
    </a>
  </Tooltip>
);

export default function Socials() {
  return (
    <ul className={styles.container}>
      {socials.map(({ name, icon, url }) => (
        <SocialIcon key={name} name={name} icon={icon} url={url} />
      ))}
    </ul>
  );
}
