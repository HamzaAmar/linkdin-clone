import { Color, Size } from '@type/utils'

interface BadgeBaseProps {
  size?: Omit<Size, '2xl' | '2xs'>
  color?: Color
  className?: string
}

interface BadgeNumericProps extends BadgeBaseProps {
  variant: 'numeric'
  value: number
  max?: number
}

interface BadgeDotProps extends BadgeBaseProps {
  variant: 'dot' | 'outline'
}

export type BadgeProps = BadgeNumericProps | BadgeDotProps
