import { SVGProps } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M16 13a4 4 0 1 1-4-4 4 4 0 0 1 4 4zm6-4v11H2V9a3 3 0 0 1 3-3h1l1-3h10l1 3h1a3 3 0 0 1 3 3zm-5 4a5 5 0 1 0-5 5 5 5 0 0 0 5-5z" />
  </svg>
)

export default SvgComponent
