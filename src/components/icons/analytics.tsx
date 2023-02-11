import { SVGProps } from 'react'

const analytics = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M23 20v1H1v-1zM8 9H2v10h6zm7-6H9v16h6zm7 11h-6v5h6z" />
  </svg>
)

export default analytics
