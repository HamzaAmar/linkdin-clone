import type { SVGProps } from 'react'

const file = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M15.5 2H4v20h16V6.5zM6 20V4h8v4h4v12z" />
  </svg>
)

export default file
