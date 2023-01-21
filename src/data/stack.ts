interface Technology {
  name: string
  icon: string
}

export const principal: Array<{ name: string, icon: string }> = [
  { name: 'React', icon: 'simple-icons:react' },
  { name: 'Next.js', icon: 'simple-icons:nextdotjs' },
  { name: 'TypeScript', icon: 'simple-icons:typescript' },
  { name: 'JavaScript', icon: 'simple-icons:javascript' },
  { name: 'Node.js', icon: 'simple-icons:nodejs' },
  { name: 'Express.js', icon: 'simple-icons:express' },
  { name: 'HTML5', icon: 'simple-icons:html5' },
  { name: 'CSS3', icon: 'simple-icons:css3' },
  { name: 'Tailwind', icon: 'simple-icons:tailwindcss' },
  { name: 'Git', icon: 'simple-icons:git' },
  { name: 'GitHub', icon: 'simple-icons:github' },
]

export const secondary: Technology[] = [
  { name: 'Jest', icon: 'simple-icons:jest' },
  { name: 'MongoDB', icon: 'simple-icons:mongodb' },
  { name: 'SQLite', icon: 'simple-icons:sqlite' },
  { name: 'Golang', icon: 'simple-icons:go' },
  { name: 'Docker', icon: 'simple-icons:docker' },
  { name: 'Linux', icon: 'simple-icons:linux' },
  { name: 'Vite', icon: 'simple-icons:vite' },
  { name: 'Webpack', icon: 'simple-icons:webpack' },
  { name: 'Visual Studio Code', icon: 'simple-icons:visualstudiocode' },
  { name: 'Vercel', icon: 'simple-icons:vercel' },
]
