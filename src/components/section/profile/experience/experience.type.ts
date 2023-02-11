interface Project {
  name: string
  description: string
}

export interface ExperienceType {
  slug: string
  name: string
  employmentType: string
  country: string
  company: string
  startDate: Date
  endDate: Date
  image: string
  skills: string[]
  projects?: Project[] | null
}

export interface ExperienceItemProps extends Omit<ExperienceType, 'slug'> {}
