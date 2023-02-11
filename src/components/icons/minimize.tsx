import type { SVGProps } from 'react'

const minimize = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
    <path d="M5 1h2v6H1V5h2.6L0 1.4 1.4 0 5 3.6zm7.4 10H15V9H9v6h2v-2.6l3.6 3.6 1.4-1.4z" />
  </svg>
)

export default minimize
