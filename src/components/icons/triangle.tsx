import type { SVGProps } from 'react'

const triangle = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
    <path d="M8 11 3 6h10z" fillRule="evenodd" />
  </svg>
)

export default triangle
