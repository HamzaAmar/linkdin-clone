import { getUserBySlug, getUsers } from '@api/users'
import { USERS_LIST } from '@api/users/users.data'
import { Avatar, Flex, IconButton, Text } from '@components/core'
import {
  Attachment,
  CameraPlus,
  Chevron,
  Cross,
  Dots,
  Face,
  Gif,
  Maximize,
  Minimize,
  PencilPaper,
  Picture,
} from '@components/icons'
import { useBoolean } from '@hooks/userBoolean'
import { useState } from 'react'
import { MessageChatItemProps, MessageItemProps } from './message.type'

const MessageItem = ({ name, description, images, id, handleOpen }: MessageItemProps) => {
  return (
    <Flex as="button" onClick={() => handleOpen(id)} items="start" justify="between" gap="xs" className="message">
      <Flex gap="xs">
        <div>
          <Avatar image={images?.avatar} title={name}>
            <Avatar.Badge variant="dot" size="lg" color="success" />
          </Avatar>
        </div>
        <div>
          <Text size="sm" weight="medium">
            {name}
          </Text>
          <Text truncate="multiline" numberLine={2} size="xs" color="text" shade="6">
            {description}
          </Text>
        </div>
      </Flex>
      <Text className="message--time" size="xs" color="text" shade="6">
        24 Sep
      </Text>
    </Flex>
  )
}
const MessageChatItem = ({ handleClose, id }: MessageChatItemProps) => {
  const { state: isLarge, handleToggle } = useBoolean(false)
  const shrink = useBoolean(false)
  const { name, images } = getUserBySlug(id)!

  const state = isLarge ? 'maximize' : 'minimize'
  const stateIcon = isLarge ? <Minimize /> : <Maximize />

  console.log(shrink.state)
  return (
    <article
      data-shrink={shrink.state}
      className={`message-shared messages-item--chat messages-item--chat__${state} l_box`}
    >
      <header className="messages--header">
        <Flex onClick={shrink.handleToggle} justify="between" items="center" gap="xs" as="button">
          <Avatar size="sm" image={images?.avatar} title={name} />
          <div className="u_leading__sm">
            <Text weight="medium" size="sm" truncate="multiline" numberLine={1}>
              {name}
            </Text>
            <Text size="xs" truncate="multiline" numberLine={1}>
              Available on Mabile
            </Text>
          </div>
          <Flex gap="2xs" style={{ color: 'var(--color-text-3)' }}>
            <IconButton size="sm" icon={<Dots />} title="close Message" />
            <IconButton size="sm" onClick={handleToggle} icon={stateIcon} title="close Message" />
            <IconButton size="sm" icon={<CameraPlus />} title="close Message" />
            <IconButton size="sm" onClick={() => handleClose(id)} icon={<Cross />} title="close Message" />
          </Flex>
        </Flex>
      </header>
      <Flex direction="column" className="messages-item--chat-main">
        <Text className="message-chat-item message-chat-item__receive" size="sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, unde nihil repudiandae, alias repellendus facilis
          reprehenderit eius consequuntur quod ullam sequi minus labore temporibus officia dicta soluta, molestias aut
          odit!
        </Text>
        <Text className="message-chat-item message-chat-item__send" size="sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, unde nihil repudiandae, alias repellendus facilis
          reprehenderit eius consequuntur quod ullam sequi minus labore temporibus officia dicta soluta, molestias aut
          odit!
        </Text>
      </Flex>
      <footer>
        <Flex style={{ color: 'var(--color-text-3)' }}>
          <IconButton size="sm" onClick={() => handleClose(id)} icon={<Picture />} title="close Message" />
          <IconButton size="sm" onClick={handleToggle} icon={<Attachment />} title="close Message" />
          <IconButton size="sm" icon={<Gif />} title="close Message" />
          <IconButton size="sm" icon={<Face />} title="close Message" />
        </Flex>
        <Flex>
          <Text size="2xs">Press Enter to Send</Text>
          <IconButton size="sm" icon={<Dots />} title="close Message" />
        </Flex>
      </footer>
    </article>
  )
}

const Messages = () => {
  const { state, handleToggle } = useBoolean(false)
  const [opens, setOpens] = useState<string[] | null>(null)

  function handleAddUsers(id: string) {
    setOpens((ids) => {
      if (ids === null) {
        return [id]
      }
      if (!ids.includes(id) && ids.length <= 2) {
        return [id, ...ids]
      }
      if (ids.length > 2) {
        const users = [...ids]
        users.pop()
        return [id, ...users]
      }

      return ids
    })
  }

  function handleCloseUser(id: string) {
    const users = [...(opens || [])]
    const userIndex = users.indexOf(id)
    users.splice(userIndex, 1)
    setOpens(users)
  }

  return (
    <Flex as="aside" gap="sm" items="end" className="messages">
      {opens?.map((open) => (
        <MessageChatItem key={open} id={open} handleClose={handleCloseUser} />
      ))}
      <div className="message-shared hero--message l_box" data-shrink={state}>
        <Flex className="messages--header" items="center" justify="between" as="header">
          <Flex flex="1" as="button" onClick={handleToggle} items="center" gap="xs">
            <Avatar size="sm" image={USERS_LIST[0].images?.avatar} title={USERS_LIST[0].name}>
              <Avatar.Badge variant="dot" size="sm" color="success" />
            </Avatar>
            <Text size="sm" weight="medium">
              Messaging
            </Text>
          </Flex>
          <Flex className="message-icons--container">
            <IconButton size="sm" icon={<Dots />} title="" />
            <IconButton size="sm" icon={<PencilPaper />} title="" />
            <IconButton
              size="sm"
              onClick={handleToggle}
              icon={<Chevron direction={state ? 'up' : 'down'} />}
              title=""
            />
          </Flex>
        </Flex>
        <div className="messages--content">
          {getUsers().map((user) => (
            <MessageItem key={user.id} {...user} handleOpen={handleAddUsers} />
          ))}
        </div>
      </div>
    </Flex>
  )
}

export default Messages
