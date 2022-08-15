import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import UserHome from '../Pages/UserHome'

function User() {
  return (
    <div>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login name='User'/>} />
        <Route path='/' element={<UserHome/>} />
      </Routes>
    </div>
  )
}

export default User