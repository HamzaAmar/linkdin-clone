import type { SVGProps } from 'react'

const Home = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" stroke="#000" {...props}>
    <path
      d="M23 9v2h-2v7c0 2-1 3-3 3h-4v-6h-4v6H6c-2 0-3-1-3-3v-7H1V9l11-7zm-3-7h-3v3l3 2z"
      strokeOpacity={0}
      fillOpacity={0.9}
    />
  </svg>
)

export default Home
