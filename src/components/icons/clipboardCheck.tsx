import { SVGProps } from 'react'

const stickyNote = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M14.73 10H17l-5.5 8L8 14.5l1.34-1.34L11.21 15zM20 3v16a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V3h5.69l.52-1A2 2 0 0 1 12 1a2 2 0 0 1 1.76 1l.52 1zm-2 2h-2.6l.6 1.1V7H8v-.9L8.6 5H6v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1z" />
  </svg>
)

export default stickyNote
