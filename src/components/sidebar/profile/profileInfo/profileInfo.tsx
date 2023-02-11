import { Flex, IconButton, Text } from '@components/core'
import { Question } from '@components/icons'

const profileInfo = () => {
  return (
    <section className="profile-info l_box">
      <Flex items="center" justify="between">
        <Text>Edit public profile & URL</Text>
        <IconButton
          size="sm"
          icon={<Question width="16" />}
          title="See and edit how you look to people who are not signed in, and find you through search engines (ex: Google, Bing)."
        />
      </Flex>
      <Flex items="center" justify="between">
        <Text>Add profile in another language</Text>
        <IconButton
          size="sm"
          icon={<Question width="16" />}
          title="See and edit how you look to people who are not signed in, and find you through search engines (ex: Google, Bing)."
        />
      </Flex>
    </section>
  )
}

export default profileInfo
