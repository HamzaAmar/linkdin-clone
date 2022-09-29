import { classnames } from '@utils/classnames'
import { SpinnerProps } from './spinner.type'

const spinner = ({ color = 'secondary', size = 'sm', ...rest }: SpinnerProps) => {
  const className = classnames(`spinner spinner__${size} u_${color}`, {
    [`u_${color}`]: Boolean(color),
  })
  return <div {...className} {...rest} />
}

export default spinner
