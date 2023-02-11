import type { SVGProps } from 'react'

const building = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
    <path d="M1 5v6a2 2 0 002 2h8V3H3a2 2 0 00-2 2zm4 0h2v2h2v2H7v2H5V9H3V7h2zm10-1v8h-1.5l-1.5-.75v-6.5L13.5 4z"></path>
  </svg>
)

export default building
