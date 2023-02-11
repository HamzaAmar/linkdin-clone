import type { SVGProps } from 'react'

const maximize = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
    <path d="M8 6.6 6.6 8 3 4.4V7H1V1h6v2H4.4zM13 9v2.6L9.4 8 8 9.4l3.6 3.6H9v2h6V9z" />
  </svg>
)

export default maximize
