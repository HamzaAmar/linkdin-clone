import * as React from 'react'
import { SVGProps } from 'react'

const dots = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M14 12a2 2 0 1 1-2-2 2 2 0 0 1 2 2zM4 10a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm16 0a2 2 0 1 0 2 2 2 2 0 0 0-2-2z" />
  </svg>
)

export default dots
