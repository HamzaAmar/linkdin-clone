import { ReactElement } from 'react'

export interface Analytic {
  title: string
  description: string
  number: number
  icon: ReactElement
  href: string
  slug: string
}

export interface AnalyticItemProps extends Omit<Analytic, 'slug'> {}
