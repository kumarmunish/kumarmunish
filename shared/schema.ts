// Shared types and schemas for the portfolio application
// Currently using static data, but this can be extended for dynamic content

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  highlights: string[]
  category: string
  github?: string
  demo?: string
}