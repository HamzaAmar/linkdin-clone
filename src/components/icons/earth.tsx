import { SVGProps } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M8 1a7 7 0 1 0 7 7 7 7 0 0 0-7-7zM3 8a5 5 0 0 1 1-3l.6.6a1.5 1.5 0 0 1 .4 1v1a.8.8 0 0 0 .2.6l.6.6a.8.8 0 0 0 .5.2H7v.7a.8.8 0 0 0 .2.5l.6.6a.8.8 0 0 1 .2.5V13a5 5 0 0 1-5-5zm6.2 4.8 2-2.4a.8.8 0 0 0 .1-.8l-.6-1.2A.8.8 0 0 0 10 8H7v-.2a.5.5 0 0 1 .3-.4l.4-.2a.7.7 0 0 1 .6 0l.7.3.4-.7a1 1 0 0 0 .1-.5v-.8a.8.8 0 0 1 .2-.6l1-1a5 5 0 0 1-1.5 9z" />
  </svg>
)

export default SvgComponent
