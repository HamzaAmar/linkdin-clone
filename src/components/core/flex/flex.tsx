import { classnames } from '@utils/classnames'
import { forwardRef } from 'react'

import type { FlexProps } from './flex.type'
import type { ForwardRefComponent } from '@type/polymorphic.type'

const Flex = forwardRef((props, forwardedRef) => {
  const { children, justify, items, flex, direction, wrap, inline, as: Tag = 'div', gap, className, ...rest } = props
  const flexClassName = classnames('flex', {
    [`u_justify-${justify}`]: !!justify,
    [`u_items-${items}`]: !!items,
    // [`u_flex-${flex}`]: !!items,
    [`u_direction-${direction}`]: !!direction && direction !== 'row',
    'u_wrap-wrap': !!wrap,
    'u_flex-inline': !!inline,
    [`u_spacing-${gap}`]: !!gap,
    [`${className}`!]: !!className,
  })

  return (
    <Tag ref={forwardedRef} {...flexClassName} {...rest}>
      {children}
    </Tag>
  )
}) as ForwardRefComponent<'div', FlexProps>

Flex.displayName = 'Flex'

export default Flex
