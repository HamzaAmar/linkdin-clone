import { SVGProps } from 'react'

const gif = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M10 11v6H8.5l-.1-1c-.5.6-1.2 1-2.4 1h-.5c-2 0-3.5-1.6-3.5-3.5v-3C2 8.5 3.6 7 5.5 7H9v2H5.5C4.7 9 4 9.7 4 10.5v3c0 .8.7 1.5 1.5 1.5h1c.8 0 1.5-.7 1.5-1.5V13H6v-2h4zm13-2V7h-7v10h2v-4h4v-2h-4V9h5zm-11 8h2V7h-2v10z" />
  </svg>
)

export default gif
