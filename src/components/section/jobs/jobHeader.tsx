import { Button, Flex, Heading, Text } from '@components/core'
import { Chevron } from '@components/icons'
import { useBoolean } from '@hooks/userBoolean'
import { JOB_LIST } from './job.data'

const JobHeader = () => {
  const { state, handleToggle } = useBoolean(false)
  const recommendedJobs = JOB_LIST.slice(0, !state ? 3 : JOB_LIST.length)
  return (
    <article className="job-header l_box l_flow">
      <Flex as="header" justify="between">
        <Heading weight="medium" size="xs">
          Recent job searches
        </Heading>
        <Button size="sm" color="secondary" variant="text">
          Clear
        </Button>
      </Flex>
      <div className="job-header--list">
        {recommendedJobs.map(({ id, name, city, number }) => (
          <div key={id}>
            <Text as="span" size="sm" color="text" shade="3" weight="medium">
              {name}
            </Text>{' '}
            ·{' '}
            <Text as="span" shade="6" color="success" size="xs">
              {number} new
            </Text>
            <Text size="xs" color="text" shade="7">
              {city}
            </Text>
          </div>
        ))}
      </div>
      <Flex className="job-header--footer" justify="center" items="center">
        <Button
          onClick={handleToggle}
          icon={<Chevron width={16} direction={!state ? 'down' : 'up'} />}
          iconPosition="end"
          variant="text"
        >
          See {!state ? 'More' : 'Less'}
        </Button>
      </Flex>
    </article>
  )
}

export default JobHeader
