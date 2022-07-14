import type { ReactElement } from 'react'
import type { IconType } from 'react-icons'
import styles from './About.module.css'

// Icons
import { FaDatabase, FaJs, FaLinux, FaServer, FaTerminal } from 'react-icons/fa';

type TechType = {
  title: string,
  icon: ReactElement<IconType>
}

const Area = ({ title, icon }: TechType) => (
  <li className={styles.area}>
    <span className={styles.area_icon}>
      {icon}
    </span>
    <p className={styles.area_title}>
      {title}
    </p>
  </li>
)

export default function About() {
  return (
    <section id="about" className={styles.container}>
      <p className={styles.about_principal}>I&apos;m a front-end developer learning about <strong>back-end</strong> and <strong>cloud</strong>.</p>

      <p>I learned and worked on</p>
      <ul className={styles.area_container}>
        <Area title="Web Development" icon={<FaJs />} />
        <Area title="Back-end" icon={<FaDatabase />} />
        <Area title="Cloud Deployment" icon={<FaServer />} />
        <Area title="CLI Apps" icon={<FaTerminal />} />
        <Area title="Linux Environments" icon={<FaLinux />} />
      </ul>
    </section>
  )
}