import React, { useEffect, useState } from 'react'
import apiServices from '../../apiServices/gameServices'
import GameCard from '../gameCard/GameCard';


export default function GameList() {
  const [game, setGame] = useState([]);

  useEffect(()=>{
    apiServices.getAll()
    .then((data)=>{
      setGame(data);
      console.log(data);
    });
  },[]);


  return (
    <div>
    {game.map((game)=> (
      <GameCard
      key={game.id}
      title={game.title}
      game={game}
      />
    ))}
    </div>
  )
}
