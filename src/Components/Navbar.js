import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { logout } from '../Redux-auth/UserSlice'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const playerId = useSelector((state)=>state.auth.user?.player)
  const dispatch = useDispatch();
  const tokenId = useSelector((state)=>state.auth.user?.token)
  const navigate = useNavigate();
  return (
    <div className='flex gap-6 justify-end text-xl py-4 px-6 bg-slate-400'>
     {playerId &&(
      <p>Player Id : {playerId}</p>
      )}
      <button className='bg-red-500 px-4  items-center rounded-md' onClick={()=>dispatch(logout(tokenId),navigate("/") )} >Logout</button>
    </div>
  )
}

export default Navbar
