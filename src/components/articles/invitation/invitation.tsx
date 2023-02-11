import { Avatar, Button, Flex, IconButton, Text } from '@components/core'
import { Common, Dots } from '@components/icons'
import { useState } from '@storybook/addons'
import { InvitationProps } from './invitation.type'

const Message = ({ message, name }: any) => {
  const [show, setShow] = useState(false)
  const firstName = name.split(' ')[0]

  const showAllMessage = show ? ({ truncate: 'multiline', numberLine: 1 } as any) : {}
  const toggleShow = () => {
    setShow((show) => !show)
  }
  const buttonText = show ? 'Less' : 'More'

  return (
    <div className="l_box">
      <Flex justify="between">
        <div>
          <Text {...showAllMessage} as="span">
            {message}
          </Text>
          <Button onClick={toggleShow} size="sm" color="secondary" variant="link">
            show {buttonText}
          </Button>
        </div>
        <IconButton size="sm" title="Report message from Ismail Hossain" icon={<Dots width={16} />} />
      </Flex>
      <Button variant="text" color="secondary" size="sm">
        Reply to {firstName}
      </Button>
    </div>
  )
}

const invitation = ({ avatar, name, description, message }: InvitationProps) => {
  return (
    <Flex className="invitation-container" gap="xs" as="article">
      <Avatar size="lg" image={avatar} title={name} />
      <div className="invitation-texts l_flow">
        <Flex justify="between">
          <div>
            <Text weight="medium">{name}</Text>
            <Text size="sm" truncate="multiline" numberLine={1} color="text" shade="7">
              {description}
            </Text>
            <Flex className="invitation--friends-text" gap="2xs" items="center">
              <Common width="16" />
              <Text size="sm">slkdfsdflmksfd sdfjsd fsdf</Text>
            </Flex>
          </div>
          <Flex gap="2xs" items="center">
            <Button variant="text" size="sm" color="secondary">
              Ignore
            </Button>
            <Button variant="outline">Accept</Button>
          </Flex>
        </Flex>
        {Boolean(message) && <Message message={message} name={name} />}
      </div>
    </Flex>
  )
}

export default invitation
