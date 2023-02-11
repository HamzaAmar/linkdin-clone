import { Notification } from '@components/articles'
import React from 'react'

const NOTIFICATION = {
  name: 'Hamza Miloud Amar',
  avatar: 'https://picsum.photos/id/157/150/150',
  slug: 'hamza-miloud-amar-463b24167',
  date: new Date(),
  type: 'birthday',
  isRead: true,
  content:
    'Helo world my name is Hmaza milou dmar marm sdfk I like to be here for time to time i hope you all have fun  this days',
} as const

const notifications = () => {
  return (
    <section className="notifications">
      <Notification {...NOTIFICATION} />
      <Notification {...NOTIFICATION} />
      <Notification {...NOTIFICATION} isRead={false} />
      <Notification {...NOTIFICATION} />
      <Notification {...NOTIFICATION} />
      <Notification {...NOTIFICATION} isRead={false} />
      <Notification {...NOTIFICATION} />
      <Notification {...NOTIFICATION} />
      <Notification {...NOTIFICATION} />
      <Notification {...NOTIFICATION} isRead={false} />
      <Notification {...NOTIFICATION} />
      <Notification {...NOTIFICATION} />
      <Notification {...NOTIFICATION} isRead={false} />
      <Notification {...NOTIFICATION} />
      <Notification {...NOTIFICATION} />
      <Notification {...NOTIFICATION} isRead={false} />
    </section>
  )
}

export default notifications
