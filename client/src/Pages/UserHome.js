import React, { useContext } from 'react'
import {AuthContext} from '../Context/AuthContext'

function UserHome() {
  const{user}=useContext(AuthContext)
  return (
    <div>UserHome
      {
        user? user.name:'login/signup'
      }
    </div>
  )
}

export default UserHome