import * as Dialog from '@radix-ui/react-dialog'
import * as Tabs from '@radix-ui/react-tabs'
import { Avatar, Button, Flex, Heading, IconButton } from '@components/core'
import { REACTION_LIST } from '@components/articles/hoverCard/like'
import { Cross } from '@components/icons'
import { useBoolean } from '@hooks/userBoolean'

const LikeTab = () => {
  return (
    <Tabs.Root defaultValue="all">
      <Tabs.List className="likes--tablist">
        <Tabs.Trigger className="likes--tablist-button" value="all">
          ALL
        </Tabs.Trigger>
        <Tabs.Trigger className="likes--tablist-button" value="like">
          Likes
        </Tabs.Trigger>
        <Tabs.Trigger className="likes--tablist-button" value="love">
          Love
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content asChild value="all">
        <section>
          <Flex justify="between" as="header">
            <Heading>All</Heading>
          </Flex>
        </section>
      </Tabs.Content>
      <Tabs.Content asChild value="like">
        <section>
          <Flex justify="between" as="header">
            <Heading>Love</Heading>
          </Flex>
        </section>
      </Tabs.Content>
      <Tabs.Content asChild value="love">
        <section>
          <Flex justify="between" as="header">
            <Heading>Sex</Heading>
          </Flex>
        </section>
      </Tabs.Content>
    </Tabs.Root>
  )
}

const Likes = () => {
  const { state, handleToggle, handleFalse } = useBoolean(false)
  return (
    <Dialog.Root open={state} onOpenChange={handleToggle}>
      <Dialog.Trigger asChild>
        <Button className="post-card--review-button" variant="link" color="secondary" size="xs">
          <Avatar.Group size="2xs">
            {REACTION_LIST.slice(3).map(({ slug, thumbnail, label }) => (
              <Avatar key={slug} image={thumbnail} title={label} />
            ))}
          </Avatar.Group>
          Kent and 239 others
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog--overlay">
          <Dialog.Content asChild>
            <section className="dialog--content l_box">
              <Flex justify="between" as="header">
                <Heading>Reaction</Heading>
                <IconButton onClick={handleFalse} icon={<Cross />} title="Dismiss" />
              </Flex>
              <LikeTab />
            </section>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default Likes
