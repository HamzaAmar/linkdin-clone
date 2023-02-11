import { Job } from '@components/articles'
import { Button, Heading, Text } from '@components/core'
import React from 'react'

// TODO  MAKE THE FAKE API AND GET IT AS DATA LOADER
const JOB = {
  name: 'Hamza Miloud Amar',
  avatar: 'https://picsum.photos/id/157/150/150',
  slug: 'hamza-miloud-amar-463b24167',
  date: new Date(),
  location: 'New York LA',
  type: 'remote',
  company: 'Atos',
} as const

const jobs = () => {
  return (
    <section className="jobs-container l_box">
      <header className="jobs--header">
        <Heading size="xs" as="h2">
          Recommended for you
        </Heading>
        <Text size="sm" color="text" shade="7">
          Based on your profile and search history
        </Text>
      </header>
      <div className="jobs--list">
        <Job {...JOB} />
        <Job {...JOB} />
        <Job {...JOB} />
        <Job {...JOB} />
        <Job {...JOB} />
      </div>
      <footer>
        <Button radius="sm" variant="text" color="secondary" fluid>
          Show All
        </Button>
      </footer>
    </section>
  )
}

export default jobs
