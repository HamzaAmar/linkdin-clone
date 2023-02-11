import { getPostsByAuthor } from '@api/posts'
import { REACTION_LIST } from '@components/articles/hoverCard/like'
import { Avatar, Button, Flex, Heading, Text } from '@components/core'
import { ArrowRight, Plus } from '@components/icons'
import { ActivityItemProps } from './activity.type'

const ActivityItem = ({ user, date, content, likes }: ActivityItemProps) => {
  return (
    <article>
      <header>
        <Text color="text" size="xs" shade="6">
          {user.name} post this • {new Date(date).getDay()}
        </Text>
      </header>
      <div>{content}</div>
      <Flex justify="between" items="center" as="footer">
        <Flex items="center">
          <Button className="profile-activity--reaction-buttons" variant="link" size="sm" color="secondary">
            <Avatar.Group size="2xs">
              {REACTION_LIST.slice(3).map(({ slug, thumbnail, label }) => (
                <Avatar key={slug} image={thumbnail} title={label} />
              ))}
            </Avatar.Group>
            {likes?.length ?? 1 * Math.floor(Math.random() * 10)}
          </Button>
        </Flex>
        <Button variant="link" size="sm" color="secondary">
          Text
        </Button>
      </Flex>
    </article>
  )
}

const activity = () => {
  // TODO MAKE IT DYNAMIC

  const activities = getPostsByAuthor('hamza-miloud-amar-463b24167')
  console.log('ACTIVITIES', activities)
  return (
    <section className="profile--activity l_box l_flow">
      <header>
        <Flex justify="between" items="center">
          <div>
            <Heading weight="medium" size="sm">
              Activity
            </Heading>
            <Text color="text" size="xs" shade="7">
              42,889 followers
            </Text>
          </div>
          <Button variant="outline" color="secondary" icon={<Plus width="16" />}>
            Follow
          </Button>
        </Flex>
      </header>
      <div>
        {activities ? (
          activities.map((activity) => <ActivityItem key={activity.id} {...activity} />)
        ) : (
          <div>
            <Text color="text" size="xs" weight="medium" shade="7">
              You haven't posted lately
            </Text>
            <Text color="text" size="xs" shade="7">
              Recent posts you share or comment on will be displayed here
            </Text>
          </div>
        )}
      </div>
      <footer className="profile--activity--footer">
        <Button iconPosition="end" variant="text" color="secondary" fluid icon={<ArrowRight width="16" />}>
          Show all activities
        </Button>
      </footer>
    </section>
  )
}

export default activity
