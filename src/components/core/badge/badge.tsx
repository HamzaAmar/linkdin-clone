import { classnames } from '@utils/classnames'

import type { BadgeProps } from './badge.type'

const badge = (props: BadgeProps) => {
  const { color = 'primary', size = 'md', variant = 'numeric', className } = props
  let valueToString

  /*
   I make this because dot Variant those not have value and max props and we need this condition
   statement for typescript Look for discriminated union I use Props.variant === 'numeric' does not support
   for destructring with default value
  */
  if (props.variant === 'numeric' && props.value) {
    const { value, max } = props
    valueToString = max && value > max ? `${max}+` : value.toString()
  }
  const classNames = classnames(`badge badge__${variant} badge__${size} u_center u_circle u_${color}`, {
    [className!]: Boolean(className),
  })
  return <div {...classNames}>{valueToString}</div>
}

export default badge
