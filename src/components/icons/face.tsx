import * as React from 'react'
import { SVGProps } from 'react'

const face = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M8 10.5A1.5 1.5 0 1 1 9.5 12 1.5 1.5 0 0 1 8 10.5zm6.5 1.5a1.5 1.5 0 1 0-1.5-1.5 1.5 1.5 0 0 0 1.5 1.5zm7.5 0A10 10 0 1 1 12 2a10 10 0 0 1 10 10zm-2 0a8 8 0 1 0-8 8 8 8 0 0 0 8-8zm-8 4a6 6 0 0 1-4.2-1.8L7 15a7 7 0 0 0 10 0l-.8-.7A6 6 0 0 1 12 16z" />
  </svg>
)

export default face
