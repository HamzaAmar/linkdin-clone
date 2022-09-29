import * as React from 'react'
import type { SVGProps } from 'react'

interface ArrowProps extends SVGProps<SVGSVGElement> {
  direction?: keyof typeof rotation
}

const rotation = {
  left: 'rotate(-180)',
  right: 'rotate(0)',
  top: 'rotate(-90)',
  bottom: 'rotate(90)',
  'left-top': 'rotate(-135)',
  'left-bottom': 'rotate(-225)',
  'right-top': 'rotate(-45)',
  'right-bottom': 'rotate(45)',
}

const arrowRight = ({ direction = 'right', ...rest }: ArrowProps) => (
  <svg fill="currentColor" transform={rotation[direction]} viewBox="0 0 16 16" {...rest}>
    <path d="M11.45 3 15 8l-3.55 5H9l2.84-4H2V7h9.84L9 3z" />
  </svg>
)

export default arrowRight
