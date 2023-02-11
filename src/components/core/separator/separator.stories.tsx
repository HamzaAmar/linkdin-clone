import { ComponentMeta, ComponentStory } from '@storybook/react'
import Separator from '.'

export default {
  title: 'Components/CORE/Separator',
  component: Separator,
} as ComponentMeta<typeof Separator>

const Template: ComponentStory<typeof Separator> = ({ ...args }) => <Separator {...args} />

export const HorizontalSeparator = Template.bind({})

export const NormalSeparatorWithText = Template.bind({})
NormalSeparatorWithText.args = {
  children: 'Hello World',
}

export const NormalSeparatorWithTextCenter = Template.bind({})
NormalSeparatorWithTextCenter.args = {
  children: 'Hello World',
  position: 'center',
}
export const NormalSeparatorWithTextEnd = Template.bind({})
NormalSeparatorWithTextEnd.args = {
  children: 'Hello World',
  position: 'end',
}

export const VerticalSeparator = Template.bind({})
VerticalSeparator.args = {
  direction: 'vertical',
}

export const VerticalSeparatorWithText = Template.bind({})
VerticalSeparatorWithText.args = {
  direction: 'vertical',
  children: 'Hello World',
}

export const VerticalSeparatorWithTextCenter = Template.bind({})
VerticalSeparatorWithTextCenter.args = {
  direction: 'vertical',
  children: 'Hello World',
  position: 'center',
}

export const VerticalSeparatorWithTextEnd = Template.bind({})
VerticalSeparatorWithTextEnd.args = {
  direction: 'vertical',
  children: 'Hello World',
  position: 'end',
}
