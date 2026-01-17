import React from 'react'
import authService from "../../appwrite/auth_service"
import {logout} from "../../store/auth.slice"
import { useDispatch } from "react-redux"
function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = ()=>{
        authService.logOut().then(()=>{
        dispatch(logout())
    })
    }

  return (
    <div>
      <button onClick={logoutHandler} className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'> Logout </button>
    </div>
  )
}

export default LogoutBtn
