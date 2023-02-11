import { Avatar, Flex, IconButton, Text } from '@components/core'
import { Eye, Tag, Target } from '@components/icons'
import { useBoolean } from '@hooks/userBoolean'
import { Link } from 'react-router-dom'
import { JobProps } from './job.type'

const Job = ({ name, avatar, type, location, company, date, slug }: JobProps) => {
  const { state, handleToggle } = useBoolean(false)
  return (
    <Flex className="job-container" as="article" gap="sm">
      <header>
        <Avatar corner="sharp" title="helllo" image={avatar} />
      </header>
      <div className="u_flex-1">
        <Text color="primary" shade="6" weight="medium">
          <Link to={slug}>{name}</Link>
        </Text>
        <Text>{company}</Text>
        <Text size="sm" color="text" shade="6">
          {location} ({type})
        </Text>
        <Flex items="center" gap="2xs">
          <Target width="20" fill="var(--color-success-7)" />
          <Text color="text" shade="6" size="sm">
            Actively recruiting
          </Text>
        </Flex>
        <Text color="success" size="xs" shade="7">
          {date.toDateString()}
        </Text>
      </div>
      <Flex as="footer">
        <IconButton
          size="lg"
          title="Dismiss job REMOTE React Developer"
          icon={<Eye width="20" fill="var(--color-text-6)" />}
          className="job--eye-button"
        />
        <IconButton
          title="Save job REMOTE React Developer"
          icon={<Tag fill={state ? 'var(--color-text-6)' : 'none'} strokeWidth={2} stroke="var(--color-text-6)" />}
          onClick={handleToggle}
        />
      </Flex>
    </Flex>
  )
}

export default Job
