import { ReactNode } from 'react'

type Weight = 'thin' | 'light' | 'extra-light' | 'medium' | 'regular' | 'semi-bold' | 'bold' | 'black'

type Size = '3xs' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'

type Color = 'primary' | 'secondary' | 'text' | 'danger' | 'warning' | 'success'
type Shade = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
type FontStyle = 'italic' | 'oblique'
type Align = 'start' | 'center' | 'end'
type Decoration = 'line-through' | 'underline' | 'overline'
export type Leading = 'none' | 'sm' | 'md' | 'lg'
export type HTMLTextElements = 'span' | 'p' | 'label' | 'small' | 'em' | 'i' | 'strong' | 'b' | 'i' | 'time'

type Transform = 'uppercase' | 'lowercase' | 'capitalize'

interface TextBaseProps<T> {
  as?: T
  size?: Size
  className?: string
  align?: Align
  transform?: Transform
  children: ReactNode
  weight?: Weight
  color?: Color
  shade?: Shade
  fontStyle?: FontStyle
  decoration?: Decoration
  leading?: Leading
}

interface MultiLineTextTruncate<T> extends TextBaseProps<T> {
  truncate?: 'multiline'
  numberLine: number
}

interface SingleLineTextTruncate<T> extends TextBaseProps<T> {
  truncate?: 'singleline'
}

export type TextProps<T> = MultiLineTextTruncate<T> | SingleLineTextTruncate<T>
