import React from 'react'
import { Link } from 'react-router-dom'
import styles from './GameCard.module.css'

export default function GameCard({game}) {
  return (
    <div className={styles.gameCard}>
      <Link className={styles.link} to={`/gamedetail/${game.id}`}>
      <img 
        className={styles.img} 
        src={game.img} 
        alt={game.title}/>
      <h2 className={styles.title}>{game.title}</h2>
      </Link>
    </div>
  )
}


