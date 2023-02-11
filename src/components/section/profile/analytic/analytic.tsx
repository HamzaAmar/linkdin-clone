import { Flex, Heading, Text } from '@components/core'
import { Eye } from '@components/icons'
import { Link } from 'react-router-dom'
import { AnalyticItemProps } from './analytic.type'
import { ANALYTIC_LIST } from './anlytic.data'

const AnalyticItem = ({ icon, href, title, description, number }: AnalyticItemProps) => {
  return (
    <Flex className="profile-analytic--item" gap="sm" items="start">
      {icon}
      <div>
        <Link className="profile-analytic--link" to={href}>
          {number} {title}
        </Link>
        <Text size="sm">{description}</Text>
      </div>
    </Flex>
  )
}

const analytic = () => {
  return (
    <section className="l_box l_flow">
      <header>
        <Heading as="h2">Analytics</Heading>
        <Text size="sm" color="text" shade="7">
          <Eye width={16} />
          Private to you
        </Text>
      </header>
      <Flex gap="sm" wrap>
        {ANALYTIC_LIST.map(({ slug, ...rest }) => (
          <AnalyticItem key={slug} {...rest} />
        ))}
      </Flex>
    </section>
  )
}

export default analytic
