import { USERS_LIST } from '@api/users/users.data'
import { Avatar, Flex, Heading, IconButton, Text } from '@components/core'
import { Archive, Attachment, Dots, Envelop, Face, Gif, PencilPaper, Picture } from '@components/icons'
import { useState } from 'react'

const userList = USERS_LIST.slice(1)

const MessageList = () => {
  const [current, setCurrent] = useState(userList[0].id)

  const handleCurrent = (id: string) => () => setCurrent(id)
  return (
    <Flex as="section" className="container--ms l_box">
      <article className="message--user-list">
        <Flex justify="between" items="center" className="message--header" as="header">
          <Heading size="xs" weight="medium">
            Messaging
          </Heading>
          <Flex className="message--icon-wrapper">
            <IconButton icon={<Dots />} title="See more messaging options" />
            <IconButton icon={<PencilPaper />} title="Compose a new message" />
          </Flex>
        </Flex>
        <ul className="message--users-list">
          {userList.map(({ id, name, description, images }) => (
            <li style={{ padding: 0 }} key={id}>
              <Flex
                as="button"
                aria-current={current === id ? 'page' : 'false'}
                className="message--item-button"
                onClick={handleCurrent(id)}
                gap="2xs"
              >
                <Avatar image={images?.avatar} title={name} />
                <div className="u_flex-1">
                  <div className="message--user-name-wrapper">
                    <Text className="message--user-name" truncate="multiline" numberLine={1}>
                      {name}
                    </Text>

                    <Flex className="message--user-settings message--icon-wrapper">
                      <IconButton size="sm" icon={<Envelop />} title="Mark your conversation with Ismail as unread" />
                      <IconButton size="sm" icon={<Archive />} title="Archive conversation" />
                    </Flex>
                    <Text className="message--user-date" size="sm">
                      14 Dec
                    </Text>
                  </div>
                  <Text truncate="multiline" numberLine={2} size="sm" color="text" shade="6">
                    {description}
                  </Text>
                </div>
              </Flex>
            </li>
          ))}
        </ul>
      </article>
      <Flex as="article" direction="column" className="message--area">
        <Flex justify="between" items="center" className="message--header" as="header">
          <Heading size="xxs" weight="medium">
            Kent C.dodds
          </Heading>
          <Flex className="message--icon-wrapper">
            <IconButton icon={<Dots />} title="See more messaging options" />
            <IconButton icon={<PencilPaper />} title="Compose a new message" />
          </Flex>
        </Flex>
        <article className="message-list--content">
          <header>
            <Avatar size="lg" image="https://picsum.photos/id/123/200/200" title="hello" />
            <Text weight="medium">Hamza Miloud Amar</Text>
            <Text size="sm" color="text" shade="4" truncate="multiline" numberLine={2}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam voluptatum, et laboriosam molestiae
              quasi quidem tenetur illo consequuntur eius excepturi deserunt qui fugit ex necessitatibus aliquid placeat
              quaerat enim ipsam.
            </Text>
          </header>
          <div>{/* <Article></Article> */}</div>
        </article>
        <footer className="message-list--footer">
          <Flex justify="between">
            <Flex className="message--icon-wrapper">
              <IconButton size="lg" icon={<Picture />} title="See more messaging options" />
              <IconButton size="lg" icon={<Attachment />} title="Attach a file to your conversation with ${name}" />
              <IconButton size="lg" icon={<Gif />} title="Open GIF Keyboard" />
              <IconButton size="lg" icon={<Face />} title="Open Emoji Keyboard" />
            </Flex>
            <Flex items="center" className="message--icon-wrapper">
              <Text size="xs">Press Enter to Send</Text>
              <IconButton size="lg" icon={<Dots />} title="Open Emoji Keyboard" />
            </Flex>
          </Flex>
        </footer>
      </Flex>
    </Flex>
  )
}

export default MessageList
