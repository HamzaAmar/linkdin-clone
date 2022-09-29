import * as React from 'react'
import type { SVGProps } from 'react'

const hash = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M21 10V8h-5l1-5h-2l-1 5h-4l1-5H9L8 8H3v2h5v4H3v2h5l-1 5h2l1-5h4l-1 5h2l1-5h5v-2h-5v-4zm-7 4h-4v-4h4z" />
  </svg>
)

export default hash
