import * as React from 'react'
import { SVGProps } from 'react'

const stickyNote = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M3 3v15a3 3 0 0 0 3 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z" />
  </svg>
)

export default stickyNote
