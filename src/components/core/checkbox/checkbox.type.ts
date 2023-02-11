import type { ComponentPropsWithoutRef, ReactNode } from 'react'

type Color = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'
type Size = 'sm' | 'md' | 'lg'

export interface CheckboxProps extends Omit<ComponentPropsWithoutRef<'input'>, 'size'> {
  label: string
  size?: Size
  color?: Color
}
