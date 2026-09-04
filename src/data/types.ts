export interface Project {
  id: string
  title: string
  tagline: string
  status?: string
  description: string
  problem?: string
  solution?: string
  features?: string[]
  architecture?: { layer: string; stack: string }[]
  technologies: string[]
  github?: string
  live?: string
  image?: string
  splash?: string
  featured: boolean
  inDevelopment?: boolean
}

export interface Certification {
  id: string
  title: string
  issuer: string
  date: string
  category: 'salesforce' | 'nptel' | 'course'
  image: string
  file: string
  credentialId?: string
  verifyUrl?: string
  featured?: boolean
}

export interface Education {
  institution: string
  degree: string
  period: string
  location?: string
  detail?: string
}

export interface SkillGroup {
  label: string
  skills: string[]
}

export interface Achievement {
  title: string
  detail: string
  image?: string
}
