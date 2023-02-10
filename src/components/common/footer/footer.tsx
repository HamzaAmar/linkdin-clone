import { Flex } from '@components/core'
import { LinkdinLogo } from '@components/logos'
import { Link } from 'react-router-dom'

const footer = () => {
  return (
    <Flex direction="column" items="center" className="info-container l_flow">
      <Flex as="ul" inline wrap gap="xs" justify="center">
        <li className="info--item">
          <Link className="info-item--link" to="">
            About
          </Link>
        </li>
        <li className="info--item">
          <Link className="info-item--link" to="">
            Accessibility
          </Link>
        </li>
        <li className="info--item">
          <Link className="info-item--link" to="">
            Help Center
          </Link>
        </li>
        <li className="info--item">
          <button className="info-item--link">Privacy & Terms</button>
        </li>
        <li className="info--item">
          <Link className="info-item--link" to="">
            Ad Choices
          </Link>
        </li>
        <li className="info--item">
          <Link className="info-item--link" to="">
            Advertising
          </Link>
        </li>
        <li className="info--item">
          <button className="info-item--link">Business Services </button>
        </li>
        <li className="info--item">
          <Link className="info-item--link" to="">
            Get the LinkedIn app
          </Link>
        </li>
        <li className="info--item">
          <button className="info-item--link">more </button>
        </li>
      </Flex>
      <div>
        <LinkdinLogo fill="var(--color-primary-7)" width="60" /> LinkedIn Corporation © 2022
      </div>
    </Flex>
  )
}

export default footer
