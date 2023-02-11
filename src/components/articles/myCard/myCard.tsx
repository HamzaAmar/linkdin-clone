import { USERS_LIST } from '@api/users/users.data'
import { Avatar, Flex, Text } from '@components/core'
import { Square, Tag } from '@components/icons'
import { Link } from 'react-router-dom'

const myCard = ({ user = USERS_LIST[0] }) => {
  const { images, name, description } = user
  return (
    <article className="my-card l_box">
      <Flex className="my-card__header" as="header" direction="column" items="center">
        <img className="my-card__hero-image" src="https://picsum.photos/id/132/300/500" alt="" />
        <Avatar image={images?.avatar} title={name} className="my-card--avatar" size="lg" />
        <div className="my-card--text-content">
          <Text weight="medium">{name}</Text>
          <Text size="xs" color="text" shade="7">
            {description}
          </Text>
        </div>
      </Flex>
      <div className="my-card__link-container">
        <Flex justify="between" as={Link} to="sdfs" className="my-card__link">
          <Text size="xs" weight="bold" color="text" shade="8">
            Who's viewed your profile
          </Text>
          <Text size="xs" weight="medium" color="primary">
            21
          </Text>
        </Flex>
        <Flex justify="between" as={Link} to="sdfsdf" className="my-card__link">
          <Text size="xs" weight="bold" color="text" shade="8">
            Impressions of your post
          </Text>
          <Text size="xs" weight="medium" color="primary">
            215
          </Text>
        </Flex>
      </div>
      <div>
        <Link className="my-card__link" to="">
          <Text size="xs" weight="bold" color="text" shade="8">
            Access exclusive tools & insights
          </Text>
          <Text decoration="underline" size="xs" weight="bold">
            <Square width="16" />
            Try Premium for free
          </Text>
        </Link>
      </div>
      <div>
        <Flex items="center" gap="sm" as={Link} className="my-card__link" to="">
          <Text size="xs" weight="bold" color="text" shade="8">
            <Tag width="16" />
            My Items
          </Text>
        </Flex>
      </div>
      <footer></footer>
    </article>
  )
}

export default myCard
