import { Footer } from '@components/common'
import { Button, Flex, Heading, Text } from '@components/core'
import { ArrowRight } from '@components/icons'
import { Link } from 'react-router-dom'

const jobSeeker = () => {
  return (
    <div>
      <article className="l_box l_flow">
        <header>
          <Heading size="xs">Job seeker guidance</Heading>
          <Text size="xs" color="text" shade="7">
            Recommended based on your activity
          </Text>
        </header>
        <Flex items="center" inline justify="between" as={Link} to="" className="job-seeker--link">
          I want to improve my resume
          <img
            src="https://www.linkedin.com/dms/C4D0DAQFdDVwn9b17iA/learning-public-crop_60_100/0/1568251157263?m=AQKXdFxk4CC1tAAAAYOJHTJRXe5L4hlqWXKpV7v9oV57MYsMPyhH_QEQwg&e=1664539135&v=beta&t=1nxCnKGTUmMOQkXPkOAuEIAZj5-MlunA_jEteLRHhhg"
            alt=""
            className="job-seeker--link-image"
          />
        </Flex>
        <Text size="sm">
          Explore our curated guide of expert-led courses, such as how to improve your resume and grow your network, to
          help you land your next opportunity.
        </Text>
        <footer>
          <Button size="sm" variant="link" iconPosition="end" color="secondary" icon={<ArrowRight width={16} />}>
            Show more
          </Button>
        </footer>
      </article>
      <Footer />
    </div>
  )
}

export default jobSeeker
