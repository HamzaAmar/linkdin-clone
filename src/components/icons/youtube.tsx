import type { SVGProps } from 'react'

export const Youtube = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-9 12V8l6 4z" />
  </svg>
)

export const YoutubeColored = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 40 40" {...props}>
      <defs>
        <linearGradient id="a" x1="7.2" y1="7" x2="13.8" y2="20.2" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#33aada" />
          <stop offset="1" stop-color="#0091ca" />
        </linearGradient>
        <linearGradient id="b" x1="13" y1="-17.6" x2="27.9" y2="24.3" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#665ed0" />
          <stop offset="1" stop-color="#0073b1" />
        </linearGradient>
      </defs>
      <path d="M20 30H8a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h12v20z" fill="url(#a)" />
      <path d="M20 10h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H20V10z" fill="url(#b)" />
      <path fill="#33aada" d="M9 19h8v2H9zm0 4h8v2H9zm0-8h8v2H9z" />
      <path fill="#006097" d="M23 19h8v2h-8zm0 4h8v2h-8zm0-8h8v2h-8z" />
      <path d="m17 15 8 5-8 5V15z" fill="#fff" />
    </svg>
  )
}
