import { classnames } from '@utils/classnames'
import React, { CSSProperties, ElementType } from 'react'
import type { FlexProps } from './flex.type'

const Flex = <T extends ElementType = ElementType>(props: FlexProps<T>) => {
  const { children, justify, items, flex, direction, wrap, inline, as: Tag = 'div', gap, className, ...rest } = props
  const flexClassName = classnames('flex', {
    [`u_justify-${justify}`]: Boolean(justify),
    [`u_items-${items}`]: Boolean(items),
    [`u_flex-${flex}`]: Boolean(items),
    [`u_direction-${direction}`]: Boolean(direction),
    'u_wrap-wrap': Boolean(wrap),
    'u_flex-inline': Boolean(inline),
    [`${className}`!]: Boolean(className),
  })

  const style = gap ? { style: { '--flex-gap': gap } as CSSProperties } : {}

  return (
    <Tag {...flexClassName} {...style} {...rest}>
      {children}
    </Tag>
  )
}

export default Flex
