import type { SVGProps } from 'react'

const face = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm1 13a1 1 0 0 1-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm-2-7a2 2 0 1 1-2-2 2 2 0 0 1 2 2z" />
  </svg>
)

export default face
