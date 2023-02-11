import { classnames } from '@utils/classnames'
import { RadioProvider } from './context'
import type { RadioGroupProps } from './radio.type'

const radioGroup = ({ direction = 'horizontal', children, label, showTitle = true, id, ...rest }: RadioGroupProps) => {
  // TODO ADD ERROR ACCESSIBILITY
  const legendClassName = classnames('radio-group--label', { 'u_visually-hidden': !showTitle })
  return (
    <fieldset role="radiogroup" className={`radio-group radio-group--${direction}`}>
      <legend {...legendClassName}>{label}</legend>

      {/* TODO ADD DEFAULT  TO RADIO GROUP */}
      <RadioProvider {...rest}>{children}</RadioProvider>
    </fieldset>
  )
}

export default radioGroup
