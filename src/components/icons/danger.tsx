import * as React from 'react'
import { SVGProps } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
    <path d="M10.8 1H5.2L1 5.2v5.6L5.2 15h5.6l4.2-4.2V5.2zM12 9H4V7h8z" />
  </svg>
)

export default SvgComponent
