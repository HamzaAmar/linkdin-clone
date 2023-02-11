import { Button, Flex, IconButton, Text } from '@components/core'
import { Chevron, Hash } from '@components/icons'
import { useBoolean } from '@hooks/userBoolean'
import { Link } from 'react-router-dom'

const RecentItem = ({ title, max = 4 }: any) => {
  const { state, handleToggle } = useBoolean(true)
  const { state: showMore, handleToggle: handleShowMoreToggle } = useBoolean(false)
  const RealMax = max > 10 ? 10 : max
  const maxLine = !showMore ? RealMax : 10

  return (
    <>
      <Flex items="center" justify="between" className="recent--header">
        <Text size="xs">{title}</Text>
        <IconButton
          className="recent--hide-list-button"
          size="sm"
          icon={<Chevron direction={state ? 'up' : 'down'} />}
          title="Hide list of recent you are following"
          onClick={handleToggle}
        />
      </Flex>
      <ul className="recent--list" data-close={!state}>
        {Array.from({ length: maxLine }).map((_, index) => {
          return (
            <li className="recent--list-item recent--list-item-close" key={index}>
              <Flex as={Link} gap="xs" className="recent--item-link" to="">
                <Hash fill="var(--color-text-3)" aria-label="hashtag" width="16" />
                <Text as="span" truncate="multiline" numberLine={1} size="xs">
                  frontend developer
                </Text>
              </Flex>
            </li>
          )
        })}
        {max < 10 && (
          <li>
            <Button
              iconPosition="end"
              icon={<Chevron width="16" direction={showMore ? 'up' : 'down'} />}
              onClick={handleShowMoreToggle}
              variant="link"
              color="secondary"
              size="xs"
            >
              Show {showMore ? 'Less' : 'More'}
            </Button>
          </li>
        )}
      </ul>
    </>
  )
}

const Recent = () => {
  return (
    <article className="recent l_box">
      <RecentItem title="Recent" max={5} />
      <RecentItem title="Group" />
      <RecentItem title="Event" />
      <RecentItem title="Followed Hashtags" />
    </article>
  )
}

export default Recent
