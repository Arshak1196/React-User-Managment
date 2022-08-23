import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import AdminHome from '../Pages/Admin/AdminHome'

function Admin() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login name="Admin"/>}/>
        <Route path='/*' element={<AdminHome/>} />
      </Routes>
    </div>
  )
}

export default Admin