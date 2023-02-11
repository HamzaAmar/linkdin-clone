import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Input, TextFormField, TextArea } from '.'
import { Eye } from '@components/icons'

export default {
  title: 'COMPONENTS/CORE/TextFormField',
  component: TextFormField,
  args: {
    name: 'hello',
    label: 'Hello world',
    children: <Input placeholder="nice" />,
  },
} as ComponentMeta<typeof TextFormField>

const Template: ComponentStory<typeof TextFormField> = (args) => <TextFormField {...args} />

export const RegularTextFormField = Template.bind({})

export const RequiredTextFormField = Template.bind({})
RequiredTextFormField.args = {
  required: true,
}

export const TextFormFieldWithLeadingIcon = Template.bind({})
TextFormFieldWithLeadingIcon.args = {
  leadingIcon: <Eye width={16} />,
}

export const TextFormFieldWithTrailingIcon = Template.bind({})
TextFormFieldWithTrailingIcon.args = {
  trailingIcon: <Eye width={16} />,
}

export const TextFormFieldWithTrailingIconDisabled = Template.bind({})
TextFormFieldWithTrailingIconDisabled.args = {
  trailingIcon: <Eye width={16} />,
  disabled: true,
}

export const TextFormFieldWithValueLessThanMax = Template.bind({})
TextFormFieldWithValueLessThanMax.args = {
  value: 'Hello world',
  maxLength: 20,
}
export const TextFormFieldWithoutValue = Template.bind({})
TextFormFieldWithoutValue.args = {
  maxLength: 20,
}

export const TextFormFieldWithValueMoreThanMax = Template.bind({})
TextFormFieldWithValueMoreThanMax.args = {
  value: 'Hello world my name is hamza miloud amar',
  maxLength: 20,
}

export const TextFormFieldWithMessage = Template.bind({})
TextFormFieldWithMessage.args = {
  message: 'Hello world my name is hamza miloud amar',
}

export const TextFormFieldWithMessageDanger = Template.bind({})
TextFormFieldWithMessageDanger.args = {
  message: 'Hello world my name is hamza miloud amar',
  status: 'danger',
}

export const TextFormFieldWithMessageInfo = Template.bind({})
TextFormFieldWithMessageInfo.args = {
  message: 'Hello world my name is hamza miloud amar',
  status: 'primary',
}

export const TextFormFieldWithMessageSuccess = Template.bind({})
TextFormFieldWithMessageSuccess.args = {
  message: 'Hello world my name is hamza miloud amar',
  status: 'success',
}

export const TextFormFieldWithMessageWarning = Template.bind({})
TextFormFieldWithMessageWarning.args = {
  message: 'Hello world my name is hamza miloud amar',
  status: 'warning',
}

export const TextFormFieldWithMessageText = Template.bind({})
TextFormFieldWithMessageText.args = {
  message: 'Hello world my name is hamza miloud amar',
  status: 'text',
}

export const TextFormFieldTextArea = Template.bind({})
TextFormFieldTextArea.args = {
  children: <TextArea placeholder="nice" />,
}

export const TextFormFieldTextAreaWithWarningMessage = Template.bind({})
TextFormFieldTextAreaWithWarningMessage.args = {
  children: <TextArea placeholder="nice" />,
  message: 'Hello world my name is hamza miloud amar',
  status: 'warning',
}

export const TextFormFieldTextAreaWithValueMoreThanMaxLength = Template.bind({})
TextFormFieldTextAreaWithValueMoreThanMaxLength.args = {
  children: <TextArea placeholder="nice" />,
  value: 'Hello world my name is hamza miloud amar',
  maxLength: 20,
}

export const TextFormFieldTextAreaWithValueMoreThanMaxLengthAndMessage = Template.bind({})
TextFormFieldTextAreaWithValueMoreThanMaxLengthAndMessage.args = {
  children: <TextArea placeholder="nice" />,
  value: 'Hello world my name is hamza miloud amar',
  maxLength: 20,
  message: 'Hello world my name is hamza miloud amar',
}

export const TextFormFieldTextAreaWithValueMoreThanMaxLengthAndTooLongMessage = Template.bind({})
TextFormFieldTextAreaWithValueMoreThanMaxLengthAndTooLongMessage.args = {
  children: <TextArea placeholder="nice" />,
  value: 'Hello world my name is hamza miloud amar',
  maxLength: 20,
  message:
    'Hello world my name is hamza miloud amar Hello world my name is hamza miloud amarHello world my name is hamza miloud amarHello world my name is hamza miloud amarHello world my name is hamza miloud amarHello world my name is hamza miloud amar',
}
