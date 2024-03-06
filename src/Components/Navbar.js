import React from 'react'
import { useSelector } from 'react-redux'
const Navbar = () => {
  const playerId = useSelector((state)=>state.auth.user?.player)
  return (
    <div>
     {playerId &&(
      <p>Player Id {playerId}</p>
     )}
    </div>
  )
}

export default Navbar
