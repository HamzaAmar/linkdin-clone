interface People {
  name: string
  avatar: string
  slug: string
  description: string
  isFriend: Boolean
}

export interface PeopleItemProps extends Omit<People, 'slug'> {}

export interface PeopleList {
  title: string
  users: People[]
}
