import type { ReactElement } from 'react'
import type { IconType } from 'react-icons'
import { motion } from 'framer-motion';
import styles from './About.module.css'

// Icons
import { FaDatabase, FaLinux, FaServer, FaTerminal, FaReact } from 'react-icons/fa';

type TechType = {
  title: string,
  icon: ReactElement<IconType>,
}

const Area = ({ title, icon }: TechType) => (
  <motion.li
    className={styles.area}
    whileHover={{ scale: 1.25, cursor: 'default' }}
  >
    <span className={styles.area_icon}>
      {icon}
    </span>
    <p className={styles.area_title}>
      {title}
    </p>
  </motion.li>
)

const areas: Array<TechType> = [
  {
    title: "Web Development",
    icon: <FaReact />
  },
  {
    title: 'Back-end',
    icon: <FaDatabase />,
  },
  {
    title: 'Cloud',
    icon: <FaServer />,
  },
  {
    title: 'CLI',
    icon: <FaTerminal />,
  },
  {
    title: 'Linux',
    icon: <FaLinux />,
  }
]

export default function About() {
  return (
    <motion.section
      id="about"
      className="section_container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.8 }}
    >
      <h3 className="title">I&apos;m a front-end developer learning about <strong>back-end</strong> and <strong>cloud</strong>.</h3>
      <h4 className="subtitle">Since I was fifteen, I worked with many technologies in these areas:</h4>

      <ul className={styles.area_container}>
        {areas.map(({ title, icon}) => (
          <Area key={title} title={title} icon={icon} />
        ))}
      </ul>
    </motion.section>
  )
}