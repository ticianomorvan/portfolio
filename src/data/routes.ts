interface Route {
  label: string
  href: string
  icon: string
}

export const routes: Route[] = [
  { label: 'About me', href: '#about-me', icon: 'tabler:zoom-question' },
  { label: 'Stack', href: '#stack', icon: 'tabler:code' },
  { label: 'Projects', href: '#projects', icon: 'tabler:stack-2' }
]