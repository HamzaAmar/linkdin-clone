import type { SVGProps } from 'react'

const square = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M20 20a3 3 0 0 0 1-2V6a3 3 0 0 0-3-3H6a3 3 0 0 0-2 1z" fill="#f8c77e" />
    <path d="M4 4a3 3 0 0 0-1 2v12a3 3 0 0 0 3 3h12a3 3 0 0 0 2-1z" fill="#e7a33e" />
  </svg>
)

export default square
