import type { SVGProps } from 'react'

const check = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M21 4 10 20l-6-6 1.4-1.4 4.3 4.3L18.6 4z" />
  </svg>
)

export default check
