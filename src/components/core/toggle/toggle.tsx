import React from 'react'
import type { ToggleProps } from './toggle.type'

const Toggle = ({ children, ...rest }: ToggleProps) => {
  return (
    <div className="toggle" {...rest}>
      {children}
    </div>
  )
}

export default Toggle
