import { ComponentStory, ComponentMeta } from '@storybook/react'

import Notification from '.'

export default {
  title: 'COMPONENTS/Articles/Notification',
  component: Notification,
  args: {
    name: 'Hamza Miloud Amar',
    avatar: 'https://picsum.photos/id/157/150/150',
    slug: 'hamza-miloud-amar-463b24167',
    date: new Date(),
    type: 'birthday',
    content:
      'Helo world my name is Hmaza milou dmar marm sdfk I like to be here for time to time i hope you all have fun  this days',
  },
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Notification>

const Template: ComponentStory<typeof Notification> = (args) => <Notification {...args} />

export const NotificationArticle = Template.bind({})

export const NotificationArticleJob = Template.bind({})
NotificationArticleJob.args = {
  type: 'job',
}

export const NotificationArticleJobsAlert = Template.bind({})
NotificationArticleJobsAlert.args = {
  type: 'jobs-alert',
}
export const NotificationArticleEvent = Template.bind({})
NotificationArticleEvent.args = {
  type: 'event',
}

export const NotificationArticleUserAction = Template.bind({})
NotificationArticleUserAction.args = {
  type: 'user-action',
}
export const NotificationArticleIsRead = Template.bind({})
NotificationArticleIsRead.args = {
  isRead: true,
}
