import React from 'react'
import useFetch from '../../Hooks/useFetch'


function UserTable() {
    const {data,loading,error}=useFetch('/admin/users')
    console.log(data)
    console.log(loading,error)
    // console.log(loading,error)
  return (
    <div>
        {
            data.map(obj=>{
                return(
                    <p >{obj.name}</p>
                )
            })
        }
    </div>
  )
}

export default UserTable