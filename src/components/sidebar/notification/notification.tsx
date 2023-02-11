import { Heading, Text } from '@components/core'
import { Link } from 'react-router-dom'

const notification = () => {
  return (
    <section className="l_box">
      <Heading>Notifications</Heading>
      <Text color="text" shade="7">
        You have new notifications
      </Text>

      <Text size="sm" color="text" shade="7">
        Improve your notifications
      </Text>
      <Link to="">View Settings</Link>
    </section>
  )
}

export default notification
