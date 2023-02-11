export interface JobProps {
  name: string
  avatar: string
  company: string
  type: 'remote' | 'hybrid' | 'On-site' | 'regular'
  location: string
  slug: string
  date: Date
}
