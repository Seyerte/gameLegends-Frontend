import React from 'react'
import Footer from '../../components/Footer/Footer'
import GameList from '../../components/gameList/GameList'
import Navbar from '../../components/Navbar/Navbar'

function Games() {
  return (
    <div>
      <Navbar/>
      <GameList/>
      <Footer/>
    </div>
  )
}

export default Games
