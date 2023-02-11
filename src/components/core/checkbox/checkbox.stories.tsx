import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Checkbox from '.'

export default {
  title: 'COMPONENTS/CORE/Checkbox',
  component: Checkbox,
  args: {
    label: 'Nice TO Meet You',
  },
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />

export const PrimaryCheckbox = Template.bind({})
export const DangerCheckbox = Template.bind({})
DangerCheckbox.args = {
  color: 'danger',
}
export const SuccessCheckbox = Template.bind({})
SuccessCheckbox.args = {
  color: 'success',
}
export const WarningCheckbox = Template.bind({})
WarningCheckbox.args = {
  color: 'warning',
}

export const DisabledCheckbox = Template.bind({})
DisabledCheckbox.args = {
  disabled: true,
}

export const ArabicContentCheckbox = Template.bind({})
ArabicContentCheckbox.args = {
  label: 'حمزة ميلود',
}
ArabicContentCheckbox.parameters = {
  direction: 'rtl',
}

export const SmallCheckbox = Template.bind({})
SmallCheckbox.args = {
  size: 'sm',
}
export const MediumCheckbox = Template.bind({})

export const LargeCheckbox = Template.bind({})
LargeCheckbox.args = {
  size: 'lg',
}
