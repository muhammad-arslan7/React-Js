import React from 'react'
import { useContext } from 'react'
import userContext from '../context/userContext'

function profile() {
  const {user} = useContext(userContext)
  if (!user){
    return (
      <h1 className='welcome-heading'>NOT LOGGED IN</h1>
    )
  }
  return (
    <div>
        <div className="welcome-heading"> Welcome : {user.username} </div>
    </div>
  )
}

export default profile