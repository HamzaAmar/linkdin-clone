import { useTextField } from './context'
import type { TextAreaProps } from './input.type'

const TextArea = (props: TextAreaProps) => {
  const { value, ...providerRest } = useTextField()

  const currentVal = props.value ?? value

  return (
    <textarea {...props} {...providerRest} className="text-field">
      {currentVal}
    </textarea>
  )
}

export default TextArea
