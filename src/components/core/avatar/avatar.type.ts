type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type Radius = 'none' | 'sm' | 'md' | 'lg' | 'round'
type Color = 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info'

export interface AvatarProps {
  color?: Color
  name: string
  size?: Size
  image?: string
  radius?: Radius
  className?: string
}
