import { Gap } from '@type/utils'
import type { ReactNode } from 'react'

type Items = 'center' | 'end' | 'start'
type Justify = 'around' | 'between' | 'evenly' | 'end' | 'center'
type Flex = '1' | 'none' | 'auto'
type Direction = 'column' | 'row'

export interface FlexProps {
  children: ReactNode
  items?: Items
  justify?: Justify
  gap?: Gap
  flex?: Flex
  direction?: Direction
  className?: string | ((...args: any) => string)
  wrap?: boolean
  inline?: boolean
}
