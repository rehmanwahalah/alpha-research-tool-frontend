import React from 'react'
import withAuth from '../component/hoc/withAuth.component'
import Login from '../module/login/Login'
import Project from '../module/project/Project'

const project = () => {
  return (
    <Project />
  )
}

// export default withAuth(project)
export default project