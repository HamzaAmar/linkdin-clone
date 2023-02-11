import { SVGProps } from 'react'

const envelop = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M2 4v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V4zm18 2v1.5l-8 5.3-8-5.3V6zm-1 12H5a1 1 0 0 1-1-1V8.7l8 5.3 8-5.3V17a1 1 0 0 1-1 1z" />
  </svg>
)

export default envelop
