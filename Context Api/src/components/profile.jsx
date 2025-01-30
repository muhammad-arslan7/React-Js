import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/userContext'

function profile() {
  const {user} = useContext(UserContext)
  if (!user){
    return (
      <h1 className='welcome-heading'>NOT LOGGED IN</h1>
    )
  }
  return (
    <div>
        <div className="welcome-heading"> Welcome : {user.username} with password : {user.password}</div>
    </div>
  )
}

export default profile