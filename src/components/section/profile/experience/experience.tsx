import { Avatar, Flex, Heading, IconButton, Text } from '@components/core'
import { Pencil, Plus } from '@components/icons'
import { formatDate, getDate } from '@utils/date'
import type { ExperienceType, ExperienceItemProps } from './experience.type'

const EXPERIENCES: ExperienceType[] = [
  {
    slug: 'Frontend Web Developer',
    name: 'Frontend Web Developer',
    company: 'agency-site-maker',
    employmentType: 'Full-time',
    country: 'Morocco',
    startDate: getDate({ years: -5, month: -3 }),
    endDate: getDate({ years: -3, month: -3 }),
    image: 'https://picsum.photos/id/123/120/120',
    skills: [
      'HTML5',
      'Cascading Style Sheets (CSS)',
      'Front-End Development',
      ' Next.js',
      'JavaScript',
      'remix',
      'React',
      'SCSS',
      'HTML',
      'TypeScript',
      'Accessibility',
    ],
    projects: [
      {
        name: 'V5 - (06) - Fin dashboard.jpg',
        description: 'a french gamer website to organize tournament',
      },
      {
        name: 'À propos du Morocco Film Locations Fixer',
        description: 'a french gamer website to organize tournament',
      },
      {
        name: 'Home Page – Hamza Miloud Amar',
        description: 'My Little Portfolio',
      },
    ],
  },
  {
    slug: 'frontend-web-developer-freelancer',
    name: 'Frontend Web Developer',
    employmentType: 'Freelance',
    country: 'Morocco',
    company: 'Freelancer',
    startDate: getDate({ years: -3 }),
    endDate: getDate({ years: -2, month: 3 }),
    image: 'https://picsum.photos/id/132/120/120',
    skills: ['Cascading Style Sheets (CSS)', 'React', 'HTML5'],
  },
]

const ExperienceItem = ({ skills, name, employmentType, country, image, startDate, endDate }: ExperienceItemProps) => {
  const stringSkills = skills.join(' · ')

  return (
    <article>
      <Flex gap="2xs">
        <Avatar corner="sharp" image={image} title={name} />
        <div className="l_flow">
          <div>
            <Heading size="xs" weight="medium">
              {name}
            </Heading>
            <Text size="sm">{employmentType}</Text>
            <Text size="sm" color="text" shade="7">
              {formatDate(startDate, { month: 'short' }, 'en')} {formatDate(startDate, { year: 'numeric' }, 'en')}{' '}
              {' - '}
              {typeof endDate === 'string'
                ? 'Present'
                : `${formatDate(endDate, { month: 'short' }, 'en')} ${formatDate(
                    endDate,
                    { year: 'numeric' },
                    'en'
                  )}`}{' '}
              · 2 yrs 10 mos
            </Text>
            <Text size="sm" color="text" shade="7">
              {country}
            </Text>
          </div>
          <Text size="sm">
            <span className="u_font-semi-bold">Skills:</span>
            {stringSkills}
          </Text>
        </div>
      </Flex>
    </article>
  )
}

const experience = () => {
  return (
    <section className="l_box">
      <Flex as="header" justify="between" items="center">
        <Heading size="sm" weight="medium">
          Experience
        </Heading>
        <Flex>
          <IconButton icon={<Plus />} title="Add new experience" />
          <IconButton icon={<Pencil />} title="View experience detail screen" />
        </Flex>
      </Flex>
      <div className="profile-experience--list">
        {EXPERIENCES.map(({ slug, ...rest }) => (
          <ExperienceItem key={slug} {...rest} />
        ))}
      </div>
    </section>
  )
}

export default experience
