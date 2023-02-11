import { Check, Danger, Info } from '@components/icons'
import Flex from '../flex'
import { TextFieldProvider } from './context'

import type { TextFormFieldProps, StatusType } from './input.type'

const statusType: StatusType = {
  text: '',
  danger: <Danger width="14" />,
  primary: <Info width="14" />,
  success: <Check width="14" />,
  warning: '',
}

const InputField = (props: TextFormFieldProps) => {
  const {
    children,
    status = 'text',
    value,
    message,
    label,
    required,
    disabled,
    leadingIcon,
    trailingIcon,
    maxLength,
    id,
  } = props

  const isLeadingIconExist = Boolean(leadingIcon) && (
    <Flex as="span" inline items="center" justify="center" className="input-field--icon">
      {leadingIcon}
    </Flex>
  )
  const isTrailingIconExist = Boolean(trailingIcon) && (
    <Flex as="span" inline items="center" justify="center" className="input-field--icon">
      {trailingIcon}
    </Flex>
  )
  const contextValue = { value, maxLength, required, disabled, status, id }

  return (
    <Flex direction="column" gap="2xs" className="text-field--label">
      <label id={id}>
        {label}
        {required && '*'}
      </label>
      <Flex data-disabled={disabled} as="span" items="center" className="text-field--wrapper">
        {isLeadingIconExist}
        <TextFieldProvider {...contextValue}>{children}</TextFieldProvider>
        {isTrailingIconExist}
      </Flex>
      <Flex as="span" justify="between" items="start">
        <Flex as="span" className={`text-field--message-container u_${status}`}>
          {statusType[status]} {message}
        </Flex>
        {maxLength && (
          <span className="message--length">
            {value?.length ?? 0} / {maxLength}
          </span>
        )}
      </Flex>
    </Flex>
  )
}

export default InputField
