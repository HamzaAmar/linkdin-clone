import { Button, Flex, Heading, IconButton, Text } from '@components/core'
import { ArrowRight, Cross, Info, Plus } from '@components/icons'
import * as Popover from '@radix-ui/react-popover'
import { Link } from 'react-router-dom'
import { FeedProps } from './feed.type'

function PopOver() {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <IconButton size="sm" icon={<Info />} title="More information about add to your feed" />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content align="end" alignOffset={40} sideOffset={-48} asChild>
          <Flex className="feed--popover-content l_box" justify="between">
            <div>
              <Text as="span" size="sm">
                Follow things that interest you to personalize your feed.
              </Text>
              <Button variant="link" size="sm" as={Link} to="here">
                See more
              </Button>
            </div>
            <Popover.Close asChild>
              <IconButton size="sm" icon={<Cross />} title="More information about add to your feed" />
            </Popover.Close>
          </Flex>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

const feed = ({ feeds }: FeedProps) => {
  return (
    <section className="l_box l_flow">
      <Flex as="header" justify="between">
        <Heading size="xs" as="h2">
          Add to your feed
        </Heading>
        <PopOver />
      </Flex>
      <div className="l_flow">
        {feeds.map(({ slug, name, description, avatar }) => (
          <Flex items="start" gap="xs" key={slug}>
            <img width="50" height="50" src={avatar} alt={name} />
            <div>
              <Heading size="xxs" weight="medium" as="h3">
                {name}
              </Heading>
              <Text size="sm" color="text" shade="7" numberLine={2} truncate="multiline">
                {description}
              </Text>
              <Button variant="outline" color="secondary" icon={<Plus width="16" />}>
                Follow
              </Button>
            </div>
          </Flex>
        ))}
      </div>
      <footer>
        <Button color="secondary" variant="text" size="xs" iconPosition="end" icon={<ArrowRight width="16" />}>
          View all recommendations
        </Button>
      </footer>
    </section>
  )
}

export default feed
