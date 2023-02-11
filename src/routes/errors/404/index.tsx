import { Button, Flex, Heading, Text } from '@components/core'
import { LinkdinLogo } from '@components/logos'
import { Link } from 'react-router-dom'

const FourOFour = () => {
  return (
    <section className="error">
      <Flex as="header" items="center" className="error__header">
        <div className="l_center">
          <LinkdinLogo width="100" fill="var(--color-primary-6)" />
        </div>
      </Flex>
      <Flex as="main" direction="column" items="center" justify="center" className="error__main l_flow">
        <img width="200" src="https://static-exp1.licdn.com/sc/h/3p7p6a7q99wymlzghijta8d3p" alt="" />
        <Heading size="sm">This page doesn’t exist</Heading>
        <Text>Please check your URL or return to LinkedIn home.</Text>
        <Button variant="outline">Go to your feed</Button>
      </Flex>
      <Flex as="footer" className="error__footer">
        <Flex items="center" justify="center" className="l_center">
          <span>
            <LinkdinLogo width="50" /> © 2022{' '}
          </span>
          <Flex inline gap="xs" as="ul">
            <li>User Agreement</li>
            <li>Privacy Policy</li>
            <li>Community Guidelines</li>
            <li>Cookie Policy</li>
            <li>Copyright Policy</li>
            <li> Guest Controls</li>
          </Flex>
        </Flex>
      </Flex>
    </section>
  )
}

export default FourOFour
