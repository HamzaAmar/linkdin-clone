import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Spinner from './spinner'

export default {
  title: 'COMPONENTS/CORE/Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />

export const SmallSpinner = Template.bind({})

SmallSpinner.args = {
  color: 'primary',
  size: 'sm',
}

export const MediumSpinner = Template.bind({})

MediumSpinner.args = {
  color: 'primary',
  size: 'md',
}

export const LargeSpinner = Template.bind({})

LargeSpinner.args = {
  color: 'primary',
  size: 'lg',
}
