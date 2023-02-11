import { PostUserModel } from '@api/posts/posts.type'

export interface ActivityItemProps extends Omit<PostUserModel, 'slug'> {}
