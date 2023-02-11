import { forwardRef } from 'react'

import { classnames } from '@utils/classnames'
import { Spinner } from '..'

import type { ButtonProps } from './button.type'
import type { ForwardRefComponent } from '@type/polymorphic.type'

const Button = forwardRef((props, ref) => {
  let {
    color = 'primary',
    size = 'md',
    radius = 'full',
    variant = 'contained',
    children,
    state = 'idle',
    icon,
    fluid = false,
    iconPosition = 'start',
    className,
    ...rest
  } = props

  radius = variant === 'text' ? 'md' : radius

  const isStartIcon = icon && iconPosition === 'start'
  const isEndIcon = icon && iconPosition === 'end'
  const isLoading = state === 'loading'

  const leftIcon = isStartIcon ? <span className="btn--icon-wrapper">{icon}</span> : null
  const rightIcon = isEndIcon ? <span className="btn--icon-wrapper">{icon}</span> : null

  const loadingUI = isLoading ? (
    <div className="btn__container-loading">
      <Spinner size="sm" />
      <span>loading...</span>
    </div>
  ) : null

  const buttonClassName = classnames(`btn btn__${size} btn__${variant} u_${color} u_radius__${radius}`, {
    btn__loading: isLoading,
    btn__fluid: fluid,
    [className!]: Boolean(className),
  })
  const disableIfLoading = isLoading ? { disabled: true } : {}

  return (
    <button {...buttonClassName} type="button" {...rest} {...disableIfLoading} ref={ref}>
      {leftIcon}
      {children}
      {rightIcon}
      {loadingUI}
    </button>
  )
}) as ForwardRefComponent<'button', ButtonProps>

Button.displayName = 'Button'

export default Button
