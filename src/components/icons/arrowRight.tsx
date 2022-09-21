import * as React from 'react'
import { SVGProps } from 'react'

const arrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M11.45 3 15 8l-3.55 5H9l2.84-4H2V7h9.84L9 3z" />
  </svg>
)

export default arrowRight
