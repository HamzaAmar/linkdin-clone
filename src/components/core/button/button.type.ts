import type { ReactElement, ReactNode } from 'react'

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type Color = 'primary' | 'secondary' | 'danger' | 'success' | 'warning'
type Variant = 'contained' | 'outline' | 'text' | 'link'
type Alignment = 'start' | 'end'
type State = 'idle' | 'loading'
type Position = 'start' | 'end'
type Corner = 'full' | 'round' | 'sm' | 'md' | 'lg' | 'xl'

export interface ButtonProps {
  children: ReactNode
  size?: Size
  variant?: Variant
  color?: Color
  iconAlignment?: Alignment
  icon?: ReactElement
  state?: State
  classNames?: string
  iconPosition?: Position
  radius?: Corner
  fluid?: boolean
}

export interface IconButtonProps {
  classNames?: string
  icon: ReactElement
  color?: Color
  title: string
  highlight?: boolean
  size?: Exclude<Size, 'xs' | 'xl'>
}
