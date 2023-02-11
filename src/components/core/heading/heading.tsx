import type { CSSProperties } from 'react'
import { classnames } from '@utils/classnames'

import type { HeadingProps } from './heading.type'

const heading = (props: HeadingProps) => {
  const {
    as: Comp = 'h2',
    size = 'md',
    truncate,
    weight,
    className,
    children,
    transform,
    align,
    decoration,
    color,
    leading,
    shade = 3,
  } = props

  /* 
      Every className that is Prefixed with u_ is a utility class and you can find it in 
      /src/scss/utilities folder
  */
  const styleOnlyExistOnTruncateMultiLine = truncate === 'multiline' ? { '--line-numbers': props.numberLine } : {}
  const colorStyle = color ? { '--color-text': `var(--color-${color}-${shade})` } : {}

  const classNameStyle = classnames(`heading heading__${size}`, {
    [`u_${truncate}`]: Boolean(truncate),
    [`${className}`]: Boolean(className),
    [`u_transform__${transform}`]: Boolean(transform),
    [`u_align__${align}`]: Boolean(align),
    [`u_font-${weight}`]: Boolean(weight),
    [`u_decoration__${decoration}`]: Boolean(decoration),
    [`u_leading__${leading}`]: Boolean(leading),
  })
  return (
    <Comp style={{ ...styleOnlyExistOnTruncateMultiLine, ...colorStyle } as CSSProperties} {...classNameStyle}>
      {children}
    </Comp>
  )
}

export default heading
