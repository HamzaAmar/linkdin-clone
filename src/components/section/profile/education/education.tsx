import { Avatar, Flex, Heading, IconButton, Text } from '@components/core'
import { Pencil, Plus } from '@components/icons'
import { formatDate, getDate } from '@utils/date'

const LANGUAGES = [
  {
    slug: 'arabic',
    name: 'Arabic',
    description: 'Native or bilingual proficiency',
    startDate: getDate({ years: -5, month: -3 }),
    endDate: getDate({ years: -3, month: -3 }),
    image: 'https://picsum.photos/id/123/120/120',
  },
  {
    slug: 'english',
    name: 'English',
    description: 'Professional working proficiencyProfessional working proficiency',
    startDate: getDate({ years: -3 }),
    endDate: getDate({ years: -2, month: 3 }),
    image: 'https://picsum.photos/id/132/120/120',
  },
  {
    slug: 'french',
    name: 'French',
    description: 'Professional working proficiency',
    startDate: getDate({ years: -2, month: 5 }),
    endDate: 'present',
    image: 'https://picsum.photos/id/143/120/120',
  },
]

const education = () => {
  return (
    <section className="profile-language l_box">
      <div>
        <Flex items="center" justify="between">
          <Heading weight="medium" size="sm" as="h2">
            Education
          </Heading>

          <Flex gap="sm" className="profile-language--buttons">
            <IconButton icon={<Plus width={24} />} title="Add new language" />
            <IconButton icon={<Pencil width={24} />} title="View languages detail screen" />
          </Flex>
        </Flex>
      </div>
      <div className="profile-language--list">
        {LANGUAGES.map(({ slug, name, description, startDate, endDate, image }) => (
          <Flex gap="sm" key={slug}>
            <Avatar corner="sharp" image={image} title={name} />
            <div>
              <Text weight="medium">{name}</Text>
              <Text size="sm">{description}</Text>
              <Text size="xs" color="text" shade="7">
                {formatDate(startDate, { month: 'short' }, 'en')} {formatDate(startDate, { year: 'numeric' }, 'en')}{' '}
                {' - '}
                {typeof endDate === 'string'
                  ? 'Present'
                  : `${formatDate(endDate, { month: 'short' }, 'en')} ${formatDate(
                      endDate,
                      { year: 'numeric' },
                      'en'
                    )}`}
              </Text>
            </div>
          </Flex>
        ))}
      </div>
    </section>
  )
}

export default education
