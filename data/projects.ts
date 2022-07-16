import IProject from '../types/project';
import { getGithubPages, getGithubRepository } from '../utils/github';

const projects: Array<IProject> = [
  {
    title: 'Blog',
    subtitle: 'A developer journey and blog.',
    description: 'This is my personal blog, where I post articles about topics I like and guides about web technologies.',
    stack: ['Next.js', 'TypeScript', 'TailwindCSS', 'Vercel'],
    actions: {
      repository: getGithubRepository('Ti7oyan', 'blog'),
      deployment: 'https://blog.ticianomorvan.me'
    },
    wakatime: 'https://wakatime.com/badge/user/d0793d36-09a9-4cf6-b4f9-0c8c1b6feb40/project/333649d4-eaf6-4b1a-a6fb-defaab63d2f0.svg'
  },
  {
    title: 'Fullstackopen',
    subtitle: 'Public course offered by the University of Helsinki',
    description: 'In this repository I store all my practices and exercises from this course.',
    stack: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Git'],
    actions: {
      repository: getGithubRepository('Ti7oyan', 'fullstackopen'),
    },
    wakatime: 'https://wakatime.com/badge/user/d0793d36-09a9-4cf6-b4f9-0c8c1b6feb40/project/f14ef38d-0d3d-460d-bd9f-b212cafeb9fd.svg'
  },
  {
    title: 'Short.it',
    subtitle: 'A dead-simple URL shortener.',
    description: "Short.it is a fast URL shortener that doesn't require any kind of authorization.",
    stack: ['React', 'TypeScript', 'Jest', 'Vite', 'Git'],
    actions: {
      repository: getGithubRepository('Ti7oyan', 'shortit'),
      deployment: getGithubPages('Ti7oyan', 'shortit'),
    },
    wakatime: 'https://wakatime.com/badge/user/d0793d36-09a9-4cf6-b4f9-0c8c1b6feb40/project/cb19c841-038e-49ff-8c2d-cae58274fcad.svg'
  },
  {
    title: 'Gon',
    subtitle: 'The classical rock, paper, scissors game, on the web.',
    description: 'Gon is a web minigame that gives you the possibility to play against the computer.',
    stack: ['React', 'TypeScript', 'TailwindCSS', 'Vite', 'Git'],
    actions: {
      repository: getGithubRepository('Ti7oyan', 'gon'),
      deployment: getGithubPages('Ti7oyan', 'gon')
    },
    wakatime: 'https://wakatime.com/badge/user/d0793d36-09a9-4cf6-b4f9-0c8c1b6feb40/project/12c4d2ff-fb5c-49bc-9ec1-7c7ccac1ccc1.svg'
  },
  {
    title: 'Link-tree',
    subtitle: 'Organize your socials, easily',
    description: 'Looking familiar to the original LinkTree, this is my lightweight and self-hosted version of it.',
    stack: ['React', 'TypeScript', 'TailwindCSS', 'Vite', 'Git'],
    actions: {
      repository: getGithubRepository('Ti7oyan', 'link-tree'),
      deployment: getGithubPages('Ti7oyan', 'link-tree')
    },
    wakatime: 'https://wakatime.com/badge/user/d0793d36-09a9-4cf6-b4f9-0c8c1b6feb40/project/7c23a006-1066-403c-b651-a7ce841e485c.svg'
  },
  {
    title: 'RoboTito',
    subtitle: 'A multi-purpose Discord bot.',
    description: 'RoboTito helps more than 8000 users daily with their needs, with a handful set of tools like Wikipedia API, COVID-19 information, Image Search, and so on.',
    stack: ['Python', 'Git'],
    actions: {
      repository: getGithubRepository('Ti7oyan', 'RoboTito'),
      deployment: 'https://top.gg/bot/820819824669491210'
    },
    wakatime: 'https://wakatime.com/badge/user/d0793d36-09a9-4cf6-b4f9-0c8c1b6feb40/project/995ef1a8-748b-4a1a-b303-ba3141267532.svg',
  },
  {
    title: 'Password generator',
    subtitle: 'Generate random and secure passwords in seconds.',
    description: 'Go a step ahead hackers with a randomly generated secure password.',
    stack: ['React', 'TypeScript', 'TailwindCSS', 'Vite', 'Git'],
    actions: {
      repository: getGithubRepository('Ti7oyan', 'passwordgenerator'),
      deployment: getGithubPages('Ti7oyan', 'passwordgenerator'),
    },
    wakatime: 'https://wakatime.com/badge/user/d0793d36-09a9-4cf6-b4f9-0c8c1b6feb40/project/e1983722-43e8-4fb2-85a5-f5e81610459d.svg'
  },
  {
    title: 'Randomcat',
    subtitle: "Who doesn't love cats?",
    description: 'Randomcat shows you pictures of beautiful cats, requested to Random Cat Public API',
    stack: ['React', 'TypeScript', 'TailwindCSS', 'Vite', 'Git'],
    actions: {
      repository: getGithubRepository('Ti7oyan', 'randomcat'),
      deployment: getGithubPages('Ti7oyan', 'randomcat')
    },
    wakatime: 'https://wakatime.com/badge/user/d0793d36-09a9-4cf6-b4f9-0c8c1b6feb40/project/7098970b-54a9-4b30-accf-6417e010c12a.svg'
  }
]

export default projects;