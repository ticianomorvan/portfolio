import type { Project } from "../types/project"
import type { Technology } from "../types/technology"

export const projects: Project[] = [
  {
    name: 'Blog',
    description: 'My personal blog',
    githubUrl: 'https://github.com/ticianomorvan/blog',
    deploymentUrl: 'https://blog.ticianomorvan.com.ar/',
    wakatimeBadgeUrl: 'https://wakatime.com/badge/user/d0793d36-09a9-4cf6-b4f9-0c8c1b6feb40/project/333649d4-eaf6-4b1a-a6fb-defaab63d2f0.svg',
    stack: [
      { icon: 'simple-icons:nextdotjs', label: 'Next.js' },
      { icon: 'simple-icons:tailwindcss', label: 'Tailwind CSS' },
      { icon: 'simple-icons:typescript', label: 'TypeScript' },
      { icon: 'simple-icons:markdown', label: 'Markdown' }
    ],
  },
  {
    name: 'lines-of-gode',
    description: 'Golang-based CLI to discover how many lines of code we changed across our repositories.',
    githubUrl: 'https://github.com/ticianomorvan/lines-of-gode',
    wakatimeBadgeUrl: 'https://wakatime.com/badge/user/d0793d36-09a9-4cf6-b4f9-0c8c1b6feb40/project/6fd8cced-c263-4af3-8288-9c1c7f068404.svg',
    stack: [
      { icon: 'simple-icons:go', label: 'Golang' },
      { icon: 'simple-icons:sqlite', label: 'SQLite' },
      { icon: 'simple-icons:github', label: 'GitHub' },
    ],
  },
  {
    name: 'link-tree',
    description: 'Colorful and extensible link-tree for your socials.',
    githubUrl: 'https://github.com/ticianomorvan/link-tree',
    deploymentUrl: 'https://socials.ticianomorvan.com.ar',
    wakatimeBadgeUrl: 'https://wakatime.com/badge/user/d0793d36-09a9-4cf6-b4f9-0c8c1b6feb40/project/7c23a006-1066-403c-b651-a7ce841e485c.svg',
    stack: [
      { icon: 'simple-icons:react', label: 'React' },
      { icon: 'simple-icons:vite', label: 'Vite' },
      { icon: 'simple-icons:tailwindcss', label: 'Tailwind CSS' },
      { icon: 'simple-icons:typescript', label: 'TypeScript' },
    ],
  },
  {
    name: 'Gon',
    description: 'Rock, paper and scissors mini-game for the web.',
    githubUrl: 'https://github.com/ticianomorvan/gon',
    deploymentUrl: 'https://gon.vercel.app',
    wakatimeBadgeUrl: 'https://wakatime.com/badge/user/d0793d36-09a9-4cf6-b4f9-0c8c1b6feb40/project/12c4d2ff-fb5c-49bc-9ec1-7c7ccac1ccc1.svg',
    stack: [
      { icon: 'simple-icons:react', label: 'React' },
      { icon: 'simple-icons:vite', label: 'Vite' },
      { icon: 'simple-icons:tailwindcss', label: 'Tailwind CSS' },
      { icon: 'simple-icons:typescript', label: 'TypeScript' },
    ]
  },
  {
    name: 'Short.it',
    description: 'URL shortener usign 1pt.co API',
    githubUrl: 'https://github.com/ticianomorvan/shortit',
    deploymentUrl: 'https://ticianomorvan.github.io/shortit/',
    wakatimeBadgeUrl: 'https://wakatime.com/badge/user/d0793d36-09a9-4cf6-b4f9-0c8c1b6feb40/project/cb19c841-038e-49ff-8c2d-cae58274fcad.svg',
    stack: [
      { icon: 'simple-icons:react', label: 'React' },
      { icon: 'simple-icons:vite', label: 'Vite' },
      { icon: 'simple-icons:tailwindcss', label: 'Tailwind CSS' },
      { icon: 'simple-icons:typescript', label: 'TypeScript' },
    ]
  },
  {
    name: 'NoteApp',
    description: 'Minimal web-app to take notes',
    githubUrl: 'https://github.com/ticianomorvan/noteapp',
    deploymentUrl: 'https://ticianomorvan.github.io/noteapp/',
    wakatimeBadgeUrl: 'https://wakatime.com/badge/user/d0793d36-09a9-4cf6-b4f9-0c8c1b6feb40/project/38412a31-dd09-4010-991b-dbab1ccaece3.svg',
    stack: [
      { icon: 'simple-icons:react', label: 'React' },
      { icon: 'simple-icons:vite', label: 'Vite' },
      { icon: 'simple-icons:tailwindcss', label: 'Tailwind CSS' },
      { icon: 'simple-icons:typescript', label: 'TypeScript' },
    ]
  }
]