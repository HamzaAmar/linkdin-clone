import {
  EducationProfile,
  ExperienceProfile,
  HeaderProfile,
  SkillsProfile,
  Activity,
  Interest,
  Language,
  Analytic,
  Resource,
} from '@components/section'
import { Learning, PeopleList, ProfileInfo } from '@components/sidebar'
import { USER1, USER2 } from '@constants/users'

const profile = () => {
  return (
    <div className="profile">
      <div className="profile-content">
        <div className="profile--main l_flow">
          {/* Header */}
          <HeaderProfile />
          {/* Analytic */}
          <Analytic />
          {/* Activity */}
          <Activity />
          {/* Experience */}
          <ExperienceProfile />
          {/* EducationE */}
          <EducationProfile />
          {/* Skills */}
          <SkillsProfile />
          {/* Language */}
          <Language />
          {/* Resource */}
          <Resource />
          {/* Interest */}
          <Interest />
        </div>

        <div className="profile--sidebar l_flow">
          {/* Profile Info */}
          <ProfileInfo />
          {/* People also viewed */}
          <PeopleList title="People also viewed" users={USER1} />
          {/* People you may know */}
          <PeopleList title="People you may know" users={USER2} />
          {/*  LEARNING */}
          <Learning />
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  )
}

export default profile
