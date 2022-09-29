import { classnames } from '@utils/classnames'
import type { IconButtonProps } from './button.type'

const iconButton = ({ icon, title, highlight, size, className, ...rest }: IconButtonProps) => {
  const IconButtonClassName = classnames(`icon-button icon-button--${size}  u_center u_circle`, {
    'icon-button__highlight': highlight,
    [className!]: Boolean(className),
  })
  return (
    <button {...IconButtonClassName} {...rest}>
      <span className="u_visually-hidden">{title}</span>
      {icon}
    </button>
  )
}

export default iconButton
