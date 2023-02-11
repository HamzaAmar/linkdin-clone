import { Avatar, Button, Flex, Heading, Text } from '@components/core'
import * as Tabs from '@radix-ui/react-tabs'
import { ArrowRight, Check } from '@components/icons'

const Card = ({ name, description, image, type = 'person', followers }: any) => {
  const formatFollowersNumber = new Intl.NumberFormat('en').format(followers)
  return (
    <Flex gap="sm">
      <Avatar corner={type === 'person' ? 'circle' : 'sharp'} image={image} title="Helllo" />
      <div>
        <Text weight="semi-bold">{name}</Text>
        <Text size="sm">{description}</Text>
        <Text color="text" shade="6" size="sm">
          {formatFollowersNumber} follower{followers > 1 ? 's' : ''}
        </Text>
        {(type === 'person' || type === 'group') && (
          <Button icon={<Check width={16} />} variant="outline" color="secondary">
            Following
          </Button>
        )}
      </div>
    </Flex>
  )
}

const Tab = () => (
  <Tabs.Root defaultValue="influencers">
    <Flex gap="sm" className="profile-interest--tablist" as={Tabs.List}>
      <Tabs.Trigger className="profile-interest--tablist-button" value="influencers">
        Influencers
      </Tabs.Trigger>
      <Tabs.Trigger className="profile-interest--tablist-button" value="companies">
        Companies
      </Tabs.Trigger>
      <Tabs.Trigger className="profile-interest--tablist-button" value="groups">
        Groups
      </Tabs.Trigger>
      <Tabs.Trigger className="profile-interest--tablist-button" value="schools">
        Schools
      </Tabs.Trigger>
    </Flex>
    <Tabs.Content value="influencers" className="profile-interest--tabpanel">
      <Flex justify="between">
        <Card
          image="https://picsum.photos/id/120/120/120"
          name="Hamza Miloud Amar"
          description="Chairman and CEO at Microsoft"
          followers="1238"
        />
        <Card
          image="https://picsum.photos/id/121/120/120"
          followers="14253"
          name="Nabil T9alya"
          description="Google Web Developer"
        />
      </Flex>
    </Tabs.Content>

    <Tabs.Content className="profile-interest--tabpanel" value="companies">
      <Flex justify="between">
        <Card
          followers="125421"
          image="https://picsum.photos/id/122/120/120"
          name="Rachel Green"
          description="Tiktok React Native Developer"
          type="company"
        />
        <Card
          followers="124578"
          image="https://picsum.photos/id/123/120/120"
          type="company"
          name="Carlos Mario"
          description="Accessibility Developer"
        />
      </Flex>
    </Tabs.Content>
    <Tabs.Content className="profile-interest--tabpanel" value="groups">
      <Flex justify="between">
        <Card
          followers="122004"
          image="https://picsum.photos/id/124/120/120"
          name="Samir Lamouli"
          description="Design System Creator at Choromatic"
          type="group"
        />
        <Card
          followers="12004"
          image="https://picsum.photos/id/125/120/120"
          name="Lamouni Ligharo"
          description="Chairman and CEO at Microsoft"
          type="group"
        />
      </Flex>
    </Tabs.Content>
    <Tabs.Content className="profile-interest--tabpanel" value="schools">
      <Flex justify="between">
        <Card
          followers="200"
          image="https://picsum.photos/id/126/120/120"
          name="shouf ach kayn"
          description="Codepen Web animation developer"
          type="school"
        />
        <Card
          followers="200"
          image="https://picsum.photos/id/127/120/120"
          name="hello world"
          description="Chairman and CEO at Microsoft"
          type="school"
        />
      </Flex>
    </Tabs.Content>
  </Tabs.Root>
)

const interest = () => {
  return (
    <section className="profile-interest l_box">
      <header className="profile-interest--header">
        <Heading size="sm" weight="semi-bold">
          Interests
        </Heading>
      </header>
      <div>
        <Tab />
      </div>
      <footer>
        <Button icon={<ArrowRight width={16} />} iconPosition="end" fluid color="secondary" variant="text">
          Show all 23 influencers
        </Button>
      </footer>
    </section>
  )
}

export default interest
