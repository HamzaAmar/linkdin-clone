import { SVGProps } from 'react'

const group = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M15 13.3V21H9v-7.8a2.3 2.3 0 0 1 2.3-2.2h1.4a2.3 2.3 0 0 1 2.3 2.3zm5-.3h-1a2 2 0 0 0-2 2v6h5v-6a2 2 0 0 0-2-2zM12 3a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm7.5 8A2.5 2.5 0 1 0 17 8.5a2.5 2.5 0 0 0 2.5 2.5zM5 13H4a2 2 0 0 0-2 2v6h5v-6a2 2 0 0 0-2-2zm-.5-7A2.5 2.5 0 1 0 7 8.5 2.5 2.5 0 0 0 4.5 6z" />
  </svg>
)

export default group
