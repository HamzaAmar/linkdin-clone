interface Contact {
  phone?: string
  birthday?: string
  address?: string
  email: string
  website?: string
}

interface Skill {
  slug: string
  endorsements: [string]
  assessment: boolean
}

interface ProjectEducationCommon {
  slug: string
  dateStart: Date
  dateEnd: Date
  description: string
}

interface Project extends ProjectEducationCommon {
  name: string
  url: string
}

interface Education extends ProjectEducationCommon {
  school: string
}

type Status = 'online' | 'offline' | 'blocked'

export interface UserModel {
  id: string
  name: string
  description: string
  images?: {
    avatar?: string
    heroImage?: string
  }
  contact: Contact
  skills?: Skill[]
  friends?: string[]
  username: string
  email: string
  password: string
  status: Status
  projects: Project[]
  education: Education[]
}

export type UsersModel = UserModel[]
