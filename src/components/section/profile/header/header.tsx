import { USERS_LIST } from '@api/users/users.data'
import { Avatar, Button, Flex, Heading, Text } from '@components/core'
import { Intro } from '@components/dialog/profile'

const user = USERS_LIST[0]

const header = () => {
  return (
    <div className="profile-header">
      <header className="profile-header--header">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4E16AQFvcEGPm6e7VA/profile-displaybackgroundimage-shrink_200_800/0/1627487447645?e=1669852800&v=beta&t=xCSQfBN6tGdzbw9Q-F6mIKTJF2ohZHGke3R3r19zAvs"
          alt=""
          className="profile-header--hero-image"
        />
        <Avatar size="2xl" image={user.images?.avatar} title={user.name} className="profile-header--avatar" />
      </header>
      <Flex justify="between" className="profile-header--main">
        <div className="l_flow">
          <Flex justify="end">
            <Intro />
          </Flex>
          <div>
            <Heading size="sm">{user.name}</Heading>
            <Text>{user.description}</Text>
            <Flex items="center">
              <Text as="span" size="xs" color="text" shade="7">
                Marrakesh, Marrakesh-Safi, Morocco
              </Text>
              <Button size="xs" color="primary" variant="link">
                Contact info
              </Button>
            </Flex>
          </div>

          <Button size="sm" color="primary" variant="link">
            500+ connections
          </Button>

          <Flex gap="xs">
            <Button>Open to</Button>
            <Button variant="outline">Add profile section</Button>
            <Button variant="outline" color="secondary">
              More
            </Button>
          </Flex>
        </div>
        <Flex gap="sm" direction="column">
          <Flex items="center">
            <Avatar title="helo" image="https://static-exp1.licdn.com/sc/h/8zzzkhxduv0r11cuxbs48pg03" corner="sharp" />
            <Text size="sm" weight="bold" color="text" shade="4">
              Freelance Web Developer
            </Text>
          </Flex>
          <Flex items="center">
            <Avatar title="helo" image="https://static-exp1.licdn.com/sc/h/8zzzkhxduv0r11cuxbs48pg03" corner="sharp" />
            <Text size="sm" weight="bold" color="text" shade="4">
              Morocco IT university{' '}
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <footer></footer>
    </div>
  )
}

export default header
