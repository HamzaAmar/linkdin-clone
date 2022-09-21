import { SVGProps } from 'react'

const money = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 9.9A2.1 2.1 0 1 1 9.9 12 2.1 2.1 0 0 1 12 9.9m0-.9a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm9-4H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zM4 7h2.1A2.1 2.1 0 0 1 4 9.1V7zm0 10v-2.1A2.1 2.1 0 0 1 6.1 17H4zm16 0h-2.1a2.1 2.1 0 0 1 2.1-2.1V17zm0-3a3 3 0 0 0-3 3H7a3 3 0 0 0-3-3v-4a3 3 0 0 0 3-3h10a3 3 0 0 0 3 3v4zm0-4.9A2.1 2.1 0 0 1 17.9 7H20v2.1z" />
  </svg>
)

export default money
