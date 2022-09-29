import * as React from 'react'
import type { SVGProps } from 'react'

const plus = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z" />
  </svg>
)

export default plus
