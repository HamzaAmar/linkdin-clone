import type { ReactNode } from 'react'

type Variant = 'network' | 'event' | 'people' | 'page' | 'newsletter' | 'group'

export interface UserCardProps {
  children: ReactNode
  variant: Variant
}
