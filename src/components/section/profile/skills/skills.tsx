import { Button, Flex, Heading, IconButton, Text } from '@components/core'
import { ArrowRight, ClipboardCheck, Pencil, Plus, Users } from '@components/icons'

const LANGUAGES = [
  {
    slug: 'react',
    name: 'React.js',
    assessment: true,
    endorsements: ['hallo', 'user', 'word'],
    company: 'Freelance web developer company',
    projects: ['hello', 'world', 'my name is ', 'hamza Miloud Amar'],
  },
  {
    slug: 'next-js',
    name: 'Next.js',
    assessment: true,
    endorsements: ['hallo', 'user', 'word'],
  },
  {
    slug: 'css',
    name: 'Cascading Style Sheets (CSS)',
    endorsements: ['hallo'],
    assessment: false,
  },
  {
    slug: 'html',
    name: 'HTML',
    assessment: false,
  },
  {
    slug: 'scss',
    name: 'SCSS',
    assessment: false,
  },
  {
    slug: 'remix',
    name: 'Remix',
    assessment: false,
  },
  {
    slug: 'git',
    name: 'GIT',
    assessment: false,
  },
  {
    slug: 'typescript',
    name: 'Typescript',
    assessment: false,
  },
]

const skills = () => {
  return (
    <section className="profile-language l_box">
      <div>
        <Flex items="center" justify="between">
          <Heading weight="medium" size="sm" as="h2">
            Skills
          </Heading>

          <Flex items="center" gap="sm" className="profile-language--buttons">
            <Button variant="outline">Demonstrate skills</Button>
            <IconButton icon={<Plus width={24} />} title="Add new language" />
            <IconButton icon={<Pencil width={24} />} title="View languages detail screen" />
          </Flex>
        </Flex>
      </div>
      <div className="profile-language--list">
        {LANGUAGES.map(({ slug, name, assessment, endorsements, company, projects }) => {
          const endorsementLength = endorsements?.length ?? 0
          return (
            <div className="profile-skill--item l_flow" key={slug}>
              <Text weight="medium">{name}</Text>
              {company && (
                <Flex gap="sm">
                  <img width="80" height="20" src="https://picsum.photos/id/52/80/20" alt="" />
                  <Text size="sm">{company}</Text>
                </Flex>
              )}
              {assessment && (
                <Text size="sm">
                  <ClipboardCheck fill="var(--color-primary-6)" width="24" />
                  Passed LinkedIn Skill Assessment
                </Text>
              )}
              {endorsements && (
                <Text size="sm">
                  <Users width="24" fill="var(--color-text-4)" />
                  {endorsementLength} {`endorsement${endorsementLength > 1 ? 's' : ''}`}
                </Text>
              )}

              {projects && (
                <Button
                  className="profile-skill--more-detail-button"
                  variant="text"
                  iconPosition="end"
                  color="secondary"
                  icon={<ArrowRight width={16} />}
                >
                  Show all 5 details
                </Button>
              )}
            </div>
          )
        })}
      </div>
      <footer className="profile-skill--footer">
        <Button variant="text" fluid iconPosition="end" color="secondary" icon={<ArrowRight width={16} />}>
          Show all 8 skills
        </Button>
      </footer>
    </section>
  )
}

export default skills
