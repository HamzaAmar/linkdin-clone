import type { SVGProps } from 'react'

const tag = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M19 5a3 3 0 0 0-3-3H5v20l7-6.3 7 6.3z" />
  </svg>
)

export default tag
