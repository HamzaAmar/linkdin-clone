import type { ReactNode } from 'react'

export interface SeparatorProps {
  direction?: 'vertical' | 'horizontal'
  position?: 'start' | 'center' | 'end'
  children?: ReactNode
}
