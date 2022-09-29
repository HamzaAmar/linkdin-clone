import type { SVGProps } from 'react'

interface ChevronProps extends SVGProps<SVGSVGElement> {
  direction?: keyof typeof rotation
}

const rotation = {
  down: 'rotate(0)',
  up: 'rotate(-180)',
  start: 'rotate(-270)',
  end: 'rotate(-90)',
}
const chevron = ({ direction = 'down', ...rest }: ChevronProps) => (
  <svg fill="currentColor" transform={rotation[direction]} viewBox="0 0 16 16" {...rest}>
    <path d="m1 5 7 5 7-5v2l-7 5-7-5z" />
  </svg>
)

export default chevron
