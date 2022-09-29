import type { SVGProps } from 'react'

const info = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
    <path d="M12 2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-3 8v2H7.5A1.5 1.5 0 0 1 6 10.5a1.56 1.56 0 0 1 .1-.5l1.08-3h2.13l-1.09 3zm0-3.75A1.25 1.25 0 1 1 10.25 5 1.25 1.25 0 0 1 9 6.25z" />
  </svg>
)

export default info
