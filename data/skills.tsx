import type { ReactElement } from 'react';
import type { IconType } from 'react-icons';

// Icons
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiVite,
  SiWebpack,
  SiVisualstudiocode,
  SiJest,
  SiVercel,
  SiReactrouter,
  SiPython,
  SiLinux
} from 'react-icons/si'

export type TechType = {
  name: string,
  icon: ReactElement<IconType>
}

const tech: Array<TechType> = [
  { name: 'React', icon: <SiReact />},
  { name: 'Next.js', icon: <SiNextdotjs />},
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'JavaScript', icon: <SiJavascript />},
  { name: 'Node.js', icon: <SiNodedotjs />},
  { name: 'Express', icon: <SiExpress />},
  { name: 'MongoDB', icon: <SiMongodb />},
  { name: 'HTML5', icon: <SiHtml5 />},
  { name: 'CSS3', icon: <SiCss3 />},
  { name: 'TailwindCSS', icon: <SiTailwindcss />},
  { name: 'Git', icon: <SiGit />},
  { name: 'GitHub', icon: <SiGithub />},
  { name: 'Vite', icon: <SiVite />},
  { name: 'Webpack', icon: <SiWebpack />},
  { name: 'Visual Studio Code', icon: <SiVisualstudiocode />},
  { name: 'Jest', icon: <SiJest />},
  { name: 'Vercel', icon: <SiVercel />},
  { name: 'React Router', icon: <SiReactrouter />},
  { name: 'Python', icon: <SiPython />},
  { name: 'Linux', icon: <SiLinux />},
]

export default tech;