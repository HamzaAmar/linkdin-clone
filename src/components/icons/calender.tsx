import type { SVGProps } from 'react'

const calender = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M3 3v15a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V3zm13 1.75A1.25 1.25 0 1 1 14.75 6 1.25 1.25 0 0 1 16 4.75zm-8 0A1.25 1.25 0 1 1 6.75 6 1.25 1.25 0 0 1 8 4.75zM19 18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9h14zm-5.9-3a1 1 0 0 0-1-1H12a3.12 3.12 0 0 0-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 0 1 1.05-.15 1.89 1.89 0 0 1 2 1.78V15a1.92 1.92 0 0 1-1.84 2H12a1.88 1.88 0 0 1-2-1.75 1 1 0 0 1 0-.25h1a.89.89 0 0 0 1 1h.1a.94.94 0 0 0 1-.88z" />
  </svg>
)

export default calender
