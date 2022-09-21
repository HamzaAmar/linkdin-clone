import type { SVGProps } from 'react'

const users = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" className="mercado-match" viewBox="0 0 24 24" {...props}>
    <path d="M12 16v6H3v-6a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3zm5.5-3A3.5 3.5 0 1 0 14 9.5a3.5 3.5 0 0 0 3.5 3.5zm1 2h-2a2.5 2.5 0 0 0-2.5 2.5V22h7v-4.5a2.5 2.5 0 0 0-2.5-2.5zM7.5 2A4.5 4.5 0 1 0 12 6.5 4.5 4.5 0 0 0 7.5 2z" />
  </svg>
)

export default users
