import type { ComponentPropsWithoutRef, ReactNode } from 'react'

type Color = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'
type Size = 'sm' | 'md' | 'lg'
type Direction = 'horizontal' | 'vertical'

interface SharedProps {
  color?: Color
  size?: Size
}

interface RadioGroupBase {
  direction?: Direction
  showTitle?: boolean
  label: string
}
interface RadioGroup {
  children: ReactNode
  id?: string
  name?: string
}

export interface RadioProps extends Omit<ComponentPropsWithoutRef<'input'>, 'size'> {
  label: string
  color?: Color
  size?: Size
}

export interface RadioGroupProps extends RadioGroup, SharedProps, RadioGroupBase {}

export interface RadioProviderProps extends Omit<RadioGroup, 'id'>, SharedProps {}

export type RadioGroupContextProps = Omit<RadioProviderProps, 'children'>
