import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import gameServices from '../../apiServices/gameServices'

function GameDetail() {
  const[gameId, setgameId] = useState([])
  const {id} = useParams() 
  useEffect (() => {
    gameServices.getGameById(id)
    .then((data)=> setgameId(data))
  },[id])

  return (
    <div>
      <div>
        <h2>{gameId.title}</h2>
      </div>
    </div>
  )
}

export default GameDetail
