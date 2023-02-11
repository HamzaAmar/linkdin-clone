import { Avatar, Button, Flex, IconButton, Text } from '@components/core'
import { Cross, Dots, Notification, Trash } from '@components/icons'
import * as Popover from '@radix-ui/react-popover'
import { classnames } from '@utils/classnames'
import { NotificationProps } from './notification.type'

const buttonText = {
  'jobs-alert': 'View 30 + jobs',
  job: 'Share Job',
  event: 'View Event',
  birthday: 'Say Happy birthday',
  'user-action': 'Say Congrats',
}
const NotificationPopOver = () => (
  <Popover.Root>
    <Popover.Trigger>
      <IconButton icon={<Dots />} title="Settings menu" />{' '}
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content align="end" alignOffset={-30}>
        <div className="notification--item-popover l_flow l_box">
          <Flex gap="sm">
            <Trash width="24" />
            <div>
              <Text size="sm" weight="bold">
                Delete
              </Text>
              <Text size="xs">Delete this notification</Text>
            </div>
          </Flex>
          <Flex gap="sm">
            <span className="notification-item--circle u_circle u_center">
              <Cross fill="white" width="16" />
            </span>
            <div>
              <Text size="sm" weight="bold">
                Unsib
              </Text>
              <Text size="xs">Delete this notification</Text>
            </div>
          </Flex>
          <Flex gap="sm">
            <Notification width="24" />
            <div>
              <Text size="sm" weight="bold">
                Turn Off
              </Text>
              <Text size="xs">Stop Recieving notifictaion from this person</Text>
            </div>
          </Flex>
        </div>
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
)

const notification = ({ name, avatar, isRead, type = 'regular', date, content }: NotificationProps) => {
  const NotificationClassName = classnames('notification-article', {
    notification__highlight: isRead,
  })
  return (
    <Flex as="article" items="center" gap="sm" {...NotificationClassName}>
      <header>
        <Avatar corner="sharp" size="lg" image={avatar} title={name} />
      </header>
      <div className="u_flex-1 l_flow">
        <Text size="sm" truncate="multiline" numberLine={3}>
          {content}
        </Text>
        {type !== 'regular' && <Button variant="outline"> {buttonText[type]}</Button>}
      </div>
      <footer>
        <Text size="sm" color="text" shade="7">
          25m
        </Text>
        <NotificationPopOver />
      </footer>
    </Flex>
  )
}

export default notification
