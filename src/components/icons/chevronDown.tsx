import { SVGProps } from 'react'

const chevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="m1 5 7 5 7-5v2l-7 5-7-5z" />
  </svg>
)

export default chevronDown
