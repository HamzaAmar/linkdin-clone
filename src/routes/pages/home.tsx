import { getPosts } from '@api/posts'
import { MyCard, PostCard } from '@components/articles'
import { Footer } from '@components/common'
import { Grid } from '@components/core'
import { Feed, HomeHeaderSection, Recent } from '@components/section'
import { FEEDS } from '@constants/feeds'

// export function loader() {
//   return getDocs(postsCollection)
//     .then((snapShot) => {
//       let values = [] as PostModel[]
//       snapShot.docs.forEach((doc) => {
//         values.push({ ...doc.data(), id: doc.id })
//       })
//       return values
//     })
//     .catch((err) => {
//       console.log(err.message)
//     })
// }

const home = () => {
  console.log(getPosts())

  return (
    <Grid gap="lg" columns="minmax(0, 1fr) minmax(0, 2.5fr) minmax(0, 1.5fr)">
      <div className="l_flow">
        <MyCard />
        <div className="sticky--section">
          <Recent />
        </div>
      </div>
      <div className="l_flow">
        <HomeHeaderSection />

        {getPosts().map(({ id, content, ...rest }) => (
          <PostCard {...rest}>{content}</PostCard>
        ))}
      </div>
      <div className="">
        <Feed feeds={FEEDS} />
        <div className="sticky--section">
          <Footer />
        </div>
      </div>
    </Grid>
  )
}

export default home
