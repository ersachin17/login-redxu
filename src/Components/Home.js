import React from 'react'
import Navbar from './Navbar'
import { useSelector } from 'react-redux'
const Home = () => {
  const playerId = useSelector((state)=>state.auth.user?.player)
  return (
    <div>
      <Navbar/>
      <div className='text-center items-center text-2xl h-screen bg-slate-300'>
      Welcome to Admin DashBoard --{playerId}Player
      </div>
    </div>
  )
}

export default Home
