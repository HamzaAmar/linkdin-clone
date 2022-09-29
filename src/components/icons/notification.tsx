import type { SVGProps } from 'react'

const notification = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M22 19h-8.3a2 2 0 1 1-3.4 0H2v-1a4.5 4.5 0 0 1 1.2-2.8l1-1.2h15.7l1 1.2A4.4 4.4 0 0 1 22 18zM18.2 7.4A6.3 6.3 0 0 0 12 2a6.3 6.3 0 0 0-6.2 5.4L5 13h14z" />
  </svg>
)

export default notification
