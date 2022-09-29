import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { ArrowRight, Plus, Search } from '@components/icons'

import { IconButton } from '..'

export default {
  title: 'COMPONENTS/CORE/IconButton',
  component: IconButton,
  argTypes: {
    icon: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof IconButton>

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />

export const IconButtonSmall = Template.bind({})
IconButtonSmall.args = {
  icon: <ArrowRight />,
  title: 'scroll to the right',
  size: 'sm',
}

export const IconButtonMedium = Template.bind({})
IconButtonMedium.args = {
  icon: <Search />,
  title: 'scroll to the right',
}

export const IconButtonLarge = Template.bind({})
IconButtonLarge.args = {
  icon: <Plus />,
  title: 'scroll to the right',
  size: 'lg',
}

export const IconButtonHightLight = Template.bind({})
IconButtonHightLight.args = {
  icon: <Plus />,
  title: 'scroll to the right',
  highlight: true,
}
