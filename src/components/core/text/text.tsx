// this classnames is a little bit different than the the classic one it return obj not a string
import { CSSProperties } from 'react'
import { classnames } from '@utils/classnames'
import type { HTMLTextElements, TextProps } from './text.type'

const text = <T extends HTMLTextElements = HTMLTextElements>(props: TextProps<T>) => {
  const {
    as: Comp = 'p',
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
    ...rest
  } = props

  /* 
      Every className that is Prefixed with u_ is a utility class and you can find it in 
      /src/scss/utilities folder
  */

  const classNameStyle = classnames(`text text__${size}`, {
    [`u_${truncate}`]: Boolean(truncate),
    [`${className}`]: Boolean(className),
    [`u_transform__${transform}`]: Boolean(transform),
    [`u_align__${align}`]: Boolean(align),
    [`u_weight__${weight}`]: Boolean(weight),
    [`u_decoration__${decoration}`]: Boolean(decoration),
    [`u_leading__${leading}`]: Boolean(leading),
  })

  const styleOnlyExistOnTruncateMultiLine = truncate === 'multiline' ? { '--line-numbers': props.numberLine } : {}
  const colorStyle = color ? { '--color-text': `var(--color-${color}-${shade})` } : {}
  return (
    <Comp
      style={{ ...styleOnlyExistOnTruncateMultiLine, ...colorStyle } as CSSProperties}
      {...classNameStyle}
      {...rest}
    >
      {children}
    </Comp>
  )
}

export default text
