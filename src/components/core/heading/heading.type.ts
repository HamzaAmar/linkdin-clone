import type { ReactNode } from 'react'

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
type Heading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type Align = 'start' | 'end' | 'center' | 'justify'
type Transform = 'uppercase' | 'lowercase' | 'capitalize'
type Weight = 'normal' | 'bold'
type Color = 'primary' | 'secondary' | 'text' | 'danger' | 'warning' | 'success'
type Shade = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
export type Leading = 'none' | 'sm' | 'md' | 'lg'
type FontStyle = 'italic' | 'oblique'
type Decoration = 'line-through' | 'underline' | 'overline'

export interface HeadingBaseProps {
  children: ReactNode
  size?: Size
  as?: Heading
  className?: string
  align?: Align
  transform?: Transform
  weight?: Weight
  color?: Color
  shade?: Shade
  fontStyle?: FontStyle
  decoration?: Decoration
  leading?: Leading
}

interface MultiLineHeadingTruncate extends HeadingBaseProps {
  truncate?: 'multiline'
  numberLine: number
}

interface SingleLineHeadingTruncate extends HeadingBaseProps {
  truncate?: 'singleline'
}

export type HeadingProps = MultiLineHeadingTruncate | SingleLineHeadingTruncate
