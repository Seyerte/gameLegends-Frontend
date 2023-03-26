import React from 'react'

export default function GameCard({game}) {
  return (
    <div>
    <img src={game.img} alt={game.title}/>
      <h2>{game.title}</h2>
    </div>
  )
}


