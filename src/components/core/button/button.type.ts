import type { ComponentPropsWithRef, ReactElement, ReactNode } from 'react'

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type Color = 'primary' | 'secondary' | 'danger' | 'success' | 'warning'
type Variant = 'contained' | 'outline' | 'text' | 'link'
type Alignment = 'start' | 'end'
type State = 'idle' | 'loading'
type Position = 'start' | 'end'
type Radius = 'full' | 'round' | 'sm' | 'md' | 'lg' | 'xl'

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  children: ReactNode
  size?: Size
  variant?: Variant
  color?: Color
  iconAlignment?: Alignment
  icon?: ReactElement
  state?: State
  classNames?: string
  iconPosition?: Position
  radius?: Radius
  fluid?: boolean
}

export interface IconButtonProps extends ComponentPropsWithRef<'button'> {
  classNames?: string
  icon: ReactElement
  color?: Color
  title: string
  highlight?: boolean
  size?: Exclude<Size, 'xs' | 'xl'>
}
