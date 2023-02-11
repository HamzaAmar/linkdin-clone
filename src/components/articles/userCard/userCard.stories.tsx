import { ComponentMeta, ComponentStory } from '@storybook/react'
import UserCard from '.'

export default {
  title: 'COMPONENTS/Articles/UserCard',
  component: UserCard,
} as ComponentMeta<typeof UserCard>

const Template: ComponentStory<typeof UserCard> = ({ ...args }) => <UserCard {...args} />

export const UserCardUser = Template.bind({})
UserCardUser.args = {}

export const UserCardPage = Template.bind({})
UserCardPage.args = {
  variant: 'page',
}

export const UserCardNetwork = Template.bind({})
UserCardNetwork.args = {
  variant: 'network',
}

export const UserCardNewsletter = Template.bind({})
UserCardNewsletter.args = {
  variant: 'newsletter',
}

export const UserCardEvent = Template.bind({})
UserCardEvent.args = {
  variant: 'event',
}
