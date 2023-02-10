import { HeaderBackpack, HeaderHome, HeaderMessage, HeaderNotification, HeaderUsers } from '@components/icons'
import { NavListProps } from './header.type'

export const NAV_MENU: NavListProps[] = [
  {
    id: 'HOME-HEADER',
    icon: (active: boolean) => <HeaderHome width="24" active={active} />,
    title: 'Home',
    href: '/feed',
  },
  {
    id: 'NETWORK-HEADER',
    icon: (active: boolean) => <HeaderUsers width="24" active={active} />,
    title: 'Network',
    href: '/networks',
  },
  {
    id: 'JOBS-HEADER',
    icon: (active: boolean) => <HeaderBackpack width="24" active={active} />,
    title: 'Jobs',
    href: '/jobs',
  },
  {
    id: 'MESSAGING-HEADER',
    icon: (active: boolean) => <HeaderMessage width="24" active={active} />,
    title: 'Messages',
    href: '/messages',
  },
  {
    id: 'NOTIFICATION-HEADER',
    icon: (active: boolean) => <HeaderNotification width="24" active={active} />,
    title: 'Notifications',
    href: '/notifications',
  },
]
