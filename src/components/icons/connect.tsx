import type { SVGProps } from 'react'

const connect = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
    <path d="M9 4a3 3 0 1 1-3-3 3 3 0 0 1 3 3zM6.7 8H5.3A2.3 2.3 0 0 0 3 10.3V15h6v-4.8A2.3 2.3 0 0 0 6.7 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z" />
  </svg>
)

export default connect
