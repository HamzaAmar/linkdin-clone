import { Flex, Heading, IconButton, Text } from '@components/core'
import { Pencil, Plus } from '@components/icons'

const LANGUAGES = [
  { slug: 'arabic', name: 'Arabic', description: 'Native or bilingual proficiency' },
  { slug: 'english', name: 'English', description: 'Professional working proficiencyProfessional working proficiency' },
  { slug: 'french', name: 'French', description: 'Professional working proficiency' },
]

const language = () => {
  return (
    <section className="profile-language l_box">
      <div>
        <Flex items="center" justify="between">
          <Heading weight="medium" size="sm" as="h2">
            Languages
          </Heading>

          <Flex gap="sm" className="profile-language--buttons">
            <IconButton icon={<Plus width={24} />} title="Add new language" />
            <IconButton icon={<Pencil width={24} />} title="View languages detail screen" />
          </Flex>
        </Flex>
      </div>
      <div className="profile-language--list">
        {LANGUAGES.map(({ slug, name, description }) => (
          <div key={slug}>
            <Text weight="medium">{name}</Text>
            <Text size="sm" color="text" shade="7">
              {description}
            </Text>
          </div>
        ))}
      </div>
    </section>
  )
}

export default language
