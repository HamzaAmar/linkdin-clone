import type { SVGProps } from 'react'

const send = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M21 3 0 10l7.7 4.3L16 8l-6.3 8.3L14 24l7-21z" />
  </svg>
)

export default send
