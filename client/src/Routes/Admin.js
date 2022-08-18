import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Users from '../Pages/AdminHome'

function Admin() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login name="Admin"/>}/>
        <Route path='/users' element={<Users/>} />
      </Routes>
    </div>
  )
}

export default Admin