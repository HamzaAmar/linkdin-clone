import { Job, JobHeader } from '@components/section'
import { JobOption, JobSeeker } from '@components/sidebar'

const jobs = () => {
  return (
    <div className="tree-column-container">
      <JobOption />
      <div className="l_flow">
        <JobHeader />
        <Job />
      </div>
      <JobSeeker />
    </div>
  )
}

export default jobs
