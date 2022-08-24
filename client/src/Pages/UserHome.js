import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {useCookies} from 'react-cookie'
import axios from 'axios'
import NavBar from '../Components/NavBar/NavBar'
import './pages.css'
import ApplicationForm from '../Components/ApplicationForm/ApplicationForm'


function UserHome() {
  const navigate=useNavigate()
  const [cookies,setCookie,removeCookie]=useCookies([])
  console.log(setCookie)
  useEffect(()=>{
    const verifyUser=async ()=>{
      if(!cookies.access_token){
        navigate('/login')
      }else{
        try {
          const data=await axios.post('/',{},{withCredentials:true})
          console.log(data)
          if(!data.status){
            removeCookie('access_token')
            navigate('login')
          }else{
            console.log('welcome user')
          }
        } catch (err) {
          console.log(err)
        }
        
      }
    }
    verifyUser();
  },[cookies,navigate,removeCookie])
  const logOut=()=>{
    removeCookie('access_token')
    navigate('/login')
  }
  return (
    <div className="userHome">
      <NavBar logout={logOut}/>
      <ApplicationForm/>
    </div>
  )
  
}

export default UserHome