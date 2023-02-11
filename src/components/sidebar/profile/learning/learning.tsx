import { Flex, Text } from '@components/core'
import { Linkdin } from '@components/icons'
import { Link } from 'react-router-dom'

const learning = () => {
  return (
    <div className="l_flow l_box">
      <header>
        <Text size="xs" transform="uppercase">
          <Linkdin fill="var(--color-primary-6)" width="16" />
          learning
        </Text>
        <Text>Add new skills with these courses, free for 24 hours</Text>
      </header>
      <div className="profile-learning--list l_flow">
        <Flex gap="sm">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E0DAQE_xNcW-E00pA/learning-public-crop_60_100/0/1586288301276?e=1665234000&v=beta&t=kk4R80CEWzGRfOSTj0bMOQPRYGqNZTMYWQqehC-9RK8"
            alt=""
          />
          <Link to="" className="u_font-medium">
            React: Securing Applications
          </Link>
        </Flex>
        <Flex gap="sm">
          <img
            src="https://media-exp1.licdn.com/dms/image/C560DAQHawuKiTmk1dA/learning-public-crop_60_100/0/1650557638050?e=1665234000&v=beta&t=N28v6SPcTcgshX5BF7sTM00erTfu2rwXBDb6IKKK50E"
            alt=""
          />
          <Link to="" className="u_font-medium">
            Vue.js: The Documentary
          </Link>
        </Flex>
        <Flex gap="sm">
          <img
            src="https://media-exp1.licdn.com/dms/image/C560DAQGV_DbGe20ISw/learning-public-crop_60_100/0/1639686562275?e=1665234000&v=beta&t=_x5lg1eM0t9T7BFPzSSqcSPqg5W2RPl_TuAPqxHzXlg"
            alt=""
          />
          <Link to="" className="u_font-medium">
            JavaScript as a Second Language
          </Link>
        </Flex>
      </div>
      <footer></footer>
    </div>
  )
}

export default learning
