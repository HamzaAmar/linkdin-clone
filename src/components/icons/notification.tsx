import type { SVGProps } from 'react'
interface HeaderIconProps extends SVGProps<SVGSVGElement> {
  active: boolean
}
export const Notification = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M22 19h-8.3a2 2 0 1 1-3.4 0H2v-1a4.5 4.5 0 0 1 1.2-2.8l1-1.2h15.7l1 1.2A4.4 4.4 0 0 1 22 18zM18.2 7.4A6.3 6.3 0 0 0 12 2a6.3 6.3 0 0 0-6.2 5.4L5 13h14z" />
  </svg>
)

export const HeaderNotification = (props: HeaderIconProps) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    {props.active ? (
      <path d="M22 19.2a3.5 3.5 0 0 1 0 .8l-.3 1-6.8-1.5a2.2 2.2 0 0 1 .1.5 2 2 0 1 1-3.5-1.3l-9.5-2 .2-1A4.5 4.5 0 0 1 4 13l1.2-1 15.5 3.5.7 1.4a5 5 0 0 1 .6 2.2zM20.5 8.8a6.3 6.3 0 0 0-5-6.7 6.8 6.8 0 0 0-1.3-.1 6.3 6.3 0 0 0-6 4.1l-2 5.3 13.9 3z" />
    ) : (
      <path d="M22 19h-8.3a2 2 0 1 1-3.4 0H2v-1a4.5 4.5 0 0 1 1.2-2.8l1-1.2h15.7l1 1.2A4.4 4.4 0 0 1 22 18zM18.2 7.4A6.3 6.3 0 0 0 12 2a6.3 6.3 0 0 0-6.2 5.4L5 13h14z" />
    )}
  </svg>
)
