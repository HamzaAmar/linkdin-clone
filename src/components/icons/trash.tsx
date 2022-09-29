import type { SVGProps } from 'react'

const trash = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M20 4v1H4V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1h4a1 1 0 0 1 1 1zM5 6h14v13a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3zm9 12h1V8h-1zm-5 0h1V8H9z" />
  </svg>
)

export default trash
