import { motion } from "framer-motion";
import styles from "./Navbar.module.css";

type PageAnchorType = {
  id: string,
  name: string,
}

const PageAnchor = ({ id, name }: PageAnchorType) => (
    <li>
      <a href={`#${id}`} className={styles.link_url}>
        <p className={styles.link_content}>
          {name}
        </p>
      </a>
    </li>
)

const anchors: Array<{id: string, name: string}> = [
  { id: 'home', name: 'Home'},
  { id: 'about', name: 'About'},
  { id: 'skills', name: 'Skills'},
  { id: 'projects', name: 'Projects'},
  { id: 'contact', name: 'Contact'}
]

export default function Navbar() {
  return (
    <motion.nav
      className={styles.container}
      animate={{
        y: [-100, 0]
      }}
      transition={{
        ease: 'easeInOut'
      }}
    >
      <span>
        <p className={styles.name}>TM</p>
      </span>

      <ul className={styles.link_container}>
        {anchors.map(({ id, name }) => (
          <PageAnchor key={id} id={id} name={name} />
        ))}
      </ul>
    </motion.nav>
  );
}
