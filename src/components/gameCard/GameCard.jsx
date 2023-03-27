import React from 'react'
import styles from './GameCard.module.css'

export default function GameCard({game}) {
  return (
    <div className={styles.gameCard}>
      <img 
        className={styles.img} 
        src={game.img} 
        alt={game.title}/>
      <h2 className={styles.title}>{game.title}</h2>
    </div>
  )
}


