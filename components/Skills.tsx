import type { TechType } from '../data/skills';
import { motion } from 'framer-motion';
import tech from '../data/skills';
import styles from './Skills.module.css';
import { Provider, Root, Trigger, Content, Arrow } from '@radix-ui/react-tooltip';

const TechIconTooltip = ({ name, icon }: TechType ) => (
  <li id={`${name}-tech`}>
    <Provider delayDuration={100}>
      <Root>
        <Trigger className={styles.tooltip}>
          <span
            title={name}
            className={styles.icon}
          >
            {icon}
          </span>
        </Trigger>
        <Content className={styles.tooltip_content}>
          <Arrow />
          {name}
        </Content>
      </Root>
    </Provider>
  </li>
)

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="section_container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1}}
      viewport={{ once: true, amount: 0.9 }}
    >
      <h3 className="title">Here is my <strong>skillset!</strong></h3>
      <h4 className="subtitle">I&apos;m always learning something new, but these are what I use daily.</h4>

      <ul className={styles.tech}>
        {tech.map(({ name, icon}) => (
          <TechIconTooltip key={name} name={name} icon={icon} />
        ))}
      </ul>
    </motion.section>
  )
}