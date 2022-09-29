import type { SVGProps } from 'react'

const newsPaper = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M13 13h5v1h-5zm5-5H6v3h12zm-5 8h5v-1h-5zm9-12v13a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V4zm-2 2H4v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1zm-9 7H6v3h5z" />
  </svg>
)

export default newsPaper
