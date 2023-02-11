import { Avatar, Button, Flex, Heading, Text } from '@components/core'
import { Connect, Send } from '@components/icons'
import { PeopleList, PeopleItemProps } from './people.type'

const UserItem = ({ name, avatar, description, isFriend }: PeopleItemProps) => {
  return (
    <Flex gap="sm">
      <Avatar title={name} image={avatar} />
      <div className="profile-people--card l_flow">
        <Text weight="semi-bold" size="sm">
          {name}
        </Text>
        <Text size="xs" color="text" shade="7">
          {description}
        </Text>
        <Button variant="outline" color="secondary" icon={isFriend ? <Send width="16" /> : <Connect width="16" />}>
          {isFriend ? 'Message' : 'Connect'}
        </Button>
      </div>
    </Flex>
  )
}

const peoples = ({ title, users }: PeopleList) => {
  return (
    <div className="l_box l_flow">
      <Heading size="xs" weight="medium">
        {title}
      </Heading>

      <div className="l_flow">
        {users.map(({ slug, ...rest }) => (
          <UserItem key={slug} {...rest} />
        ))}
      </div>
    </div>
  )
}

export default peoples
