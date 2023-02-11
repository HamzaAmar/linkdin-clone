interface Feed {
  name: string
  description: string
  avatar: string
  slug: string
}

export interface FeedProps {
  feeds: Feed[]
}
