import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

type Items = 'center' | 'end' | 'start'
type Justify = 'around' | 'between' | 'evenly' | 'end' | 'center'
type Flex = '1' | 'none' | 'auto'
type Direction = 'column'

export interface FlexBase<T> {
  children: ReactNode
  as?: T
  items?: Items
  justify?: Justify
  gap?: number | string
  flex?: Flex
  direction?: Direction
  className?: string | ((...args: any) => string)
  wrap?: boolean
  inline?: boolean
}

export type FlexProps<T extends ElementType = ElementType> = FlexBase<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof FlexBase<T>>
