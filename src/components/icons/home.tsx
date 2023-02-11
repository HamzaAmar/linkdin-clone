import type { SVGProps } from 'react'

interface HeaderHomeProps extends SVGProps<SVGSVGElement> {
  active: boolean
}

export const Home = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M23 9v2h-2v7a3 3 0 0 1-3 3h-4v-6h-4v6H6a3 3 0 0 1-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z" />
  </svg>
)

export const HeaderHome = (props: HeaderHomeProps) => {
  const { active, ...rest } = props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...rest}>
      {active ? (
        <path d="M23 9v2h-2v7a3 3 0 0 1-3 3h-4v-6h-4v6H6a3 3 0 0 1-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z" />
      ) : (
        <path d="M23 9v2h-2v7a3 3 0 0 1-3 3h-4v-6h-4v6H6a3 3 0 0 1-3-3v-7H1V9l11-7z" />
      )}
    </svg>
  )
}
