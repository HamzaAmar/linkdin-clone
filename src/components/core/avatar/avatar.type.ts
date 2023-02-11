import { Corner, Size } from '@type/utils'
import { ReactNode } from 'react'
import type { BadgeProps } from '../badge/badge.type'

type Color = 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info'

export interface AvatarProps {
  color?: Color
  title: string
  size?: Size
  image?: string
  corner?: Corner
  className?: string
  children?: ReactNode
}

export interface AvatarProviderProps {
  children: ReactNode
  size?: Size
  color?: Color
  corner?: Corner
  gap?: Exclude<Size, '2xs' | 'xs' | 'xl' | '2xl'>
}

type Direction = 'start-start' | 'start-end' | 'end-start' | 'end-end'

export type AvatarBadgeProps = {
  position?: Direction
} & BadgeProps

export type AvatarGroupContextProps = Omit<AvatarProviderProps, 'children'>
