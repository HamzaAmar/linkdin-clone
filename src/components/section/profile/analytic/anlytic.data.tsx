import { Analytics, Search, Users } from '@components/icons'

export const ANALYTIC_LIST = [
  {
    slug: 'slug--im-against',
    title: 'Profile View',
    description: "Discover who's viewed your profile",
    icon: <Users width="24" fill="var(--color-text-7)" />,
    href: '/',
    number: 22,
  },
  {
    slug: 'slug--im-against',
    title: 'post impressions',
    description: "Check out who's engaging with your posts.",
    icon: <Analytics width="24" fill="var(--color-text-7)" />,
    href: '',
    number: 272,
  },
  {
    slug: 'slug--im-against',
    title: 'search appearances',
    description: 'See how often you appear in search results.',
    icon: <Search width="24" fill="var(--color-text-7)" />,
    href: '',
    number: 24,
  },
]
