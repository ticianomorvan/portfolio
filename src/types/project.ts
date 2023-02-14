import type { Technology } from "./technology"

export interface Project {
  name: string
  description: string
  stack: Technology[]
  githubUrl: string
  deploymentUrl?: string
  wakatimeBadgeUrl: string
}