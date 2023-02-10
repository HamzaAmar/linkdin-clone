import type { ReactElement, ReactNode } from 'react'

export interface NavItemProps {
  icon: (active: boolean) => ReactNode
  title: ReactNode
  href: string
}

export interface NavListProps extends NavItemProps {
  id: string
}

export interface HeaderProps {}
