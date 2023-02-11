import type { SVGProps } from 'react'
interface HeaderIconProps extends SVGProps<SVGSVGElement> {
  active: boolean
}
export const Message = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M16 4H8a7 7 0 0 0 0 14h4v4l8.16-5.39A6.78 6.78 0 0 0 23 11a7 7 0 0 0-7-7zm-8 8.25A1.25 1.25 0 1 1 9.25 11 1.25 1.25 0 0 1 8 12.25zm4 0A1.25 1.25 0 1 1 13.25 11 1.25 1.25 0 0 1 12 12.25zm4 0A1.25 1.25 0 1 1 17.25 11 1.25 1.25 0 0 1 16 12.25z" />
  </svg>
)

export const HeaderMessage = (props: HeaderIconProps) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    {props.active ? (
      <path d="M22 8a6 6 0 0 1-3 5.2A7 7 0 0 0 12 7H8a7 7 0 0 0-2 .3A6 6 0 0 1 12 2h4a6 6 0 0 1 6 6zm-4 6v.5a6 6 0 0 1-2.7 5L10 23v-3H8A6 6 0 0 1 8 8h4a6 6 0 0 1 6 6zM8 14a1 1 0 1 0-1 1 1 1 0 0 0 1-1zm3 0a1 1 0 1 0-1 1 1 1 0 0 0 1-1zm3 0a1 1 0 1 0-1 1 1 1 0 0 0 1-1z" />
    ) : (
      <path d="M16 4H8a7 7 0 0 0 0 14h4v4l8.16-5.39A6.78 6.78 0 0 0 23 11a7 7 0 0 0-7-7zm-8 8.25A1.25 1.25 0 1 1 9.25 11 1.25 1.25 0 0 1 8 12.25zm4 0A1.25 1.25 0 1 1 13.25 11 1.25 1.25 0 0 1 12 12.25zm4 0A1.25 1.25 0 1 1 17.25 11 1.25 1.25 0 0 1 16 12.25z" />
    )}
  </svg>
)
