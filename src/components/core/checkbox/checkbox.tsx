import { Check } from '../../icons'
import { classnames } from '../../../utils/classnames'
import type { CheckboxProps } from './checkbox.type'

const checkbox = ({ children, label, id, size = 'md', color = 'success', disabled, ...rest }: CheckboxProps) => {
  const checkboxClassName = classnames('custom-checkbox u_center')
  const idOrLabel = id || label
  return (
    <label className={`checkbox-container checkbox--${size} u_${color}`} htmlFor={idOrLabel} data-disabled={disabled}>
      <input type="checkbox" className="checkbox u_visually-hidden" id={idOrLabel} disabled={disabled} {...rest} />
      <span {...checkboxClassName}>
        <Check width="1.5em" className="checkbox__check-icon" />
      </span>
      <span className="checkbox__label">{label}</span>
    </label>
  )
}

export default checkbox
