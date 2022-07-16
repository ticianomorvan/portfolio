import { ReactElement } from "react";
import { IconType } from "react-icons";

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
  SiLinux,
} from "react-icons/si";

interface IDictionary {
  [index: string]: ReactElement<IconType>;
}

export const tech: IDictionary = {
  react: <SiReact />,
  "next.js": <SiNextdotjs />,
  typescript: <SiTypescript />,
  javascript: <SiJavascript />,
  "node.js": <SiNodedotjs />,
  express: <SiExpress />,
  mongodb: <SiMongodb />,
  html5: <SiHtml5 />,
  css3: <SiCss3 />,
  tailwindcss: <SiTailwindcss />,
  git: <SiGit />,
  github: <SiGithub />,
  vite: <SiVite />,
  webpack: <SiWebpack />,
  "visual studio code": <SiVisualstudiocode />,
  jest: <SiJest />,
  vercel: <SiVercel />,
  "react router": <SiReactrouter />,
  python: <SiPython />,
  linux: <SiLinux />,
};

export default tech;
