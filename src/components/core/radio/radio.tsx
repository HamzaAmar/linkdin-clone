import { classnames } from '../../../utils/classnames'
import { useRadio } from './context'
import type { RadioProps } from './radio.type'

const Radio = (props: RadioProps) => {
  const provider = useRadio()
  const {
    label,
    id,
    color = provider.color || 'primary',
    size = provider.size || 'md',
    name = provider.name,
    ...rest
  } = props

  console.log(provider.color || 'primary', provider.color, 'primary')

  const idOrLabel = id || label

  const radioClassName = classnames(`custom-radio u_circle`)
  return (
    <label className={`radio-container radio--${size} u_${color}`} htmlFor={idOrLabel}>
      <input type="radio" name={name} className="radio u_visually-hidden" id={idOrLabel} {...rest} />
      <span {...radioClassName} />
      <span className="radio__label">{label}</span>
    </label>
  )
}

export default Radio
