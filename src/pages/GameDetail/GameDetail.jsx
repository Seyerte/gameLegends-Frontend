import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import gameServices from '../../apiServices/gameServices'
import styles from './GameDetail.module.css'

function GameDetail() {
  const[game, setgame] = useState([])
  const {id} = useParams() 
  useEffect (() => {
    gameServices.getGameById(id)
    .then((data)=> setgame(data))
  },[id])

  return (
      <div className={styles.gameDetailContainer}>
        <div className={styles.gameDetailImgInfo}>
          <div className={styles.gameDetailImg}>
            <img src={game.img} alt={game.title} />
          </div>
          <div  className={styles.gameDetailInfo}>
            <h3 className={styles.gameDetailTitle}>{game.title}</h3>
            <h3 className={styles.gameDetailgenre}>{game.genre}</h3>
            <h3 className={styles.gameDetailplatform}>{game.platform}</h3>
          </div>
        </div>
        <div>
          <p className={styles.gameDetailText}>
          Amet ullamco id do sint nostrud est tempor elit velit consectetur ad et. Et elit ea exercitation qui mollit sint. Esse est sunt sunt sunt.
Aliquip irure ea esse nisi fugiat amet. Minim ad occaecat pariatur ex adipisicing excepteur qui amet ad irure in pariatur. Aute dolor aliqua elit veniam elit nulla dolor aute irure. Duis consectetur do exercitation et velit veniam cupidatat exercitation tempor sunt velit irure eu do.
Laboris sint velit elit aute ut excepteur eiusmod. Elit nisi amet laborum incididunt reprehenderit anim sit esse fugiat elit dolor amet. Voluptate pariatur aliquip mollit cillum reprehenderit magna tempor sunt. Dolore nulla fugiat nulla minim proident culpa voluptate ipsum Lorem cupidatat nulla culpa voluptate. Proident aliqua minim tempor culpa sit dolor eu aute eu. Aliquip veniam quis cillum mollit anim culpa culpa minim tempor adipisicing. Nisi laboris anim deserunt consequat cupidatat sunt sint exercitation ullamco cupidatat cillum.
        </p>
      </div>
    </div>
  )
}

export default GameDetail
