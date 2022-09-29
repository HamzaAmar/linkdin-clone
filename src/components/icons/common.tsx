import * as React from 'react'
import { SVGProps } from 'react'

const common = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
    <path d="M11 3a5 5 0 0 0-3 1 5 5 0 1 0 0 8 5 5 0 1 0 3-9zM2 8a3 3 0 0 1 4.7-2.5 4.9 4.9 0 0 0 0 5A3 3 0 0 1 5 11a3 3 0 0 1-3-3zm9 3a3 3 0 0 1-1.7-.5 4.9 4.9 0 0 0 0-5A3 3 0 1 1 11 11z" />
  </svg>
)

export default common
