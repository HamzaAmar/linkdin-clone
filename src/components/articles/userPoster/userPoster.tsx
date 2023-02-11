import { Avatar, Button, Flex, Text } from '@components/core'
import { Common } from '@components/icons'
import type { UserPosterProps } from './userPoster.type'

const userPoster = ({ user }: UserPosterProps) => {
  return (
    <article className="user-poster l_box l_flow">
      <Flex gap="xs">
        <Avatar image={user.images?.avatar} title={user.name} />
        <div>
          <Text weight="medium">{user.name}</Text>
          <Text size="sm" color="text" shade="6">
            {user.description}
          </Text>
        </div>
      </Flex>
      <Flex justify="center" className="user-poster--common-friends" gap="sm">
        <Common width={16} />
        <div>
          <Text truncate="multiline" numberLine={1} weight="medium" size="xs">
            6 friends in Common
          </Text>
          <Text truncate="multiline" numberLine={1} size="sm">
            Samir Lmoud , Ryan Helper and Kent
          </Text>
        </div>
      </Flex>
      <footer>
        <Button fluid>Follow</Button>
      </footer>
    </article>
  )
}

export default userPoster
