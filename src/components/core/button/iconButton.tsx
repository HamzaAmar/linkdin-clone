import { ForwardRefComponent } from '@type/polymorphic.type'
import { classnames } from '@utils/classnames'
import { forwardRef } from 'react'
import type { IconButtonProps } from './button.type'

const iconButton = forwardRef(({ icon, title, highlight, size = 'md', className, ...rest }, forwardedRef) => {
  const IconButtonClassName = classnames(`icon-button icon-button--${size}  u_center u_circle`, {
    'icon-button__highlight': highlight,
    [className!]: Boolean(className),
  })
  return (
    <button ref={forwardedRef} {...IconButtonClassName} {...rest}>
      <span className="u_visually-hidden">{title}</span>
      {icon}
    </button>
  )
}) as ForwardRefComponent<'button', IconButtonProps>

export default iconButton
