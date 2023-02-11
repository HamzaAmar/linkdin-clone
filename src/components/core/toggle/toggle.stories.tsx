import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Toggle from '.'

export default {
  title: 'COMPONENTS/CORE/Toggle',
  component: Toggle,
  args: {
    children: 'Hello world',
  },
} as ComponentMeta<typeof Toggle>

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />

export const RegularToggle = Template.bind({})
