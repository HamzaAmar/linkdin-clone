type Type = 'jobs-alert' | 'job' | 'event' | 'birthday' | 'user-action' | 'regular'

export interface NotificationProps {
  name: string
  avatar: string
  isRead: boolean
  type: Type
  slug: string
  date: Date
  content: string
}
