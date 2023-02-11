import { Button, Flex, Text } from '@components/core'
import {
  ClipboardCheck,
  File,
  Money,
  Notification,
  PencilPaper,
  Settings,
  StickyNote,
  Tag,
  Youtube,
} from '@components/icons'
import { Link } from 'react-router-dom'

const jobOption = () => {
  return (
    <section className="job-option l_flow">
      <div className="job-option--list l_box l_flow">
        <Link to="hello" className="job-option--item">
          <Flex gap="sm">
            <Tag width="24" />
            <Text size="sm">My Jobs</Text>
          </Flex>
        </Link>
        <Link to="hello" className="job-option--item">
          <Flex gap="sm">
            <Notification width="24" />
            <Text size="sm">Job alerts</Text>
          </Flex>
        </Link>
        <Link to="hello" className="job-option--item">
          <Flex gap="sm">
            <Money width="24" />
            <Text size="sm">Salary</Text>
          </Flex>
        </Link>
        <Link to="hello" className="job-option--item">
          <Flex gap="sm">
            <ClipboardCheck width="24" />
            <Text size="sm">Skill Assessments</Text>
          </Flex>
        </Link>
        <Link to="hello" className="job-option--item">
          <Flex gap="sm">
            <StickyNote width="24" />
            <Text size="sm">Interview prep</Text>
          </Flex>
        </Link>
        <Link to="hello" className="job-option--item">
          <Flex gap="sm">
            <File width="24" />
            <Text size="sm">Resume Builder</Text>
          </Flex>
        </Link>

        <Link to="hello" className="job-option--item">
          <Flex gap="sm">
            <Youtube width="24" />
            <Text size="sm">Job seeker guidance</Text>
          </Flex>
        </Link>
        <Link to="hello" className="job-option--item">
          <Flex gap="sm">
            <Settings width="24" />
            <Text size="sm"> Application settings</Text>
          </Flex>
        </Link>
      </div>
      <Button variant="outline" fluid size="lg" icon={<PencilPaper width="24" />}>
        Post a free job
      </Button>
    </section>
  )
}

export default jobOption
