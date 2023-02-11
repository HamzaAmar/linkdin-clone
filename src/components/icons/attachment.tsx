import type { SVGProps } from 'react'

const arrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M20.54 10.53 14.12 17A3 3 0 0 1 9 14.84a3 3 0 0 1 .88-2.13L15.61 7 17 8.41l-5.71 5.71a1 1 0 0 0 .71 1.71 1 1 0 0 0 .71-.29l6.41-6.42a3 3 0 1 0-4.24-4.24l-10 10a3 3 0 1 0 4.24 4.24l.71-.7 1.41 1.41-.71.71a5 5 0 0 1-7.07-7.07l10-10a5 5 0 0 1 7.07 7.07z" />
  </svg>
)

export default arrowRight
