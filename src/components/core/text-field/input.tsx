import { useTextField } from './context'
import type { InputProps } from './input.type'

const Input = (props: InputProps) => {
  const provider = useTextField()

  return <input {...props} {...provider} className="text-field" type="text" />
}

export default Input
