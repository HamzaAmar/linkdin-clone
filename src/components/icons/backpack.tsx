import type { SVGProps } from 'react'

interface HeaderBackpackProps extends SVGProps<SVGSVGElement> {
  active: boolean
}

export const Backpack = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M22.8 10.2 21 6h-4V5a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v1H2l2.2 5.2A3 3 0 0 0 7 13h14a2 2 0 0 0 1.8-2.8zM15 6H9V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1zm-8 8h15v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8.5l1.3 3A4 4 0 0 0 7 14z" />
  </svg>
)

export const HeaderBackpack = (props: HeaderBackpackProps) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    {props.active ? (
      <path d="M22.8 10.2 21 6h-4V5a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v1H2l2.2 5.2A3 3 0 0 0 7 13h14a2 2 0 0 0 1.8-2.8zM15 6H9V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1zm-8 8h15v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8.5l1.3 3A4 4 0 0 0 7 14z" />
    ) : (
      <path d="M17 6V5a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v1H2v4a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V6zM9 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H9zm10 9a4 4 0 0 0 3-1.4V17a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-4.4A4 4 0 0 0 5 14z" />
    )}
  </svg>
)
