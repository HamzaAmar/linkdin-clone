import { SVGProps } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M16 15h-6a3 3 0 0 1 2-3h2a3 3 0 0 1 2 3zm-3-7a2 2 0 0 0-2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2zm8-4v16a2 2 0 0 1-2 2H5v-3H3v-2h2v-4H3v-2h2V7H3V5h2V2h14a2 2 0 0 1 2 2zm-2 0H7v16h12V4z" />
  </svg>
)

export default SvgComponent
