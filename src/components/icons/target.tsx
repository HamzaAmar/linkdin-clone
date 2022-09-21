import { SVGProps } from 'react'

const target = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 20a8 8 0 0 1 0-16 7.91 7.91 0 0 1 4.9 1.69l-1.43 1.42a6 6 0 1 0 1.42 1.42l3.82-3.82a1 1 0 0 0 0-1.41A1 1 0 0 0 20 3a1 1 0 0 0-.7.29l-1 1A10 10 0 1 0 22 12h-2a8 8 0 0 1-8 8zm5-8a5 5 0 1 1-5-5 4.93 4.93 0 0 1 2.76.82l-2.24 2.24A2.24 2.24 0 0 0 12 10a2 2 0 1 0 2 2 2.24 2.24 0 0 0-.07-.51l2.24-2.24A5 5 0 0 1 17 12z" />
  </svg>
)

export default target
