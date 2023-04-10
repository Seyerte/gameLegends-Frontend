import React, { useState } from 'react'
import styles from './GameForm.module.css'
import gameServices from '../../apiServices/gameServices.js'
import { useNavigate } from 'react-router-dom';

const addNewGame = {
  title: '',
  genre: '',
  platform: '',
  img: '',
};

export default function GameForm() {

  const [newGame, setNewGame] = useState (addNewGame);
  const navigator = useNavigate ();


  const handlerSubmit = async (e) => {
    e.preventDefault();
    await gameServices.create(newGame);
    navigator('/games');
  };


  const handleOnChange = (e) => {

  console.log("target:", e.target);
  console.log("name:", e.target.name);
  console.log("value:", e.target.value);

    setNewGame({
      ...newGame,
      [e.target.name]: e.target.value,
    });
    
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handlerSubmit}>
      <div>
        <div className={styles.formContainer}>
          <div className={styles.formGroup}>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={newGame.title}
              onChange={handleOnChange}
              name= "title"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="genre">Genre:</label>
            <select
              id="genre"
              value={newGame.genre}
              onChange={handleOnChange}
              name= "genre"
              required
            >
              <option value="">-- Select genre --</option>
              <option value="Action">Action</option>
              <option value="Adventure">Adventure</option>
              <option value="RPG">RPG</option>
              <option value="Strategy">Strategy</option>
              <option value="Sports">Sports</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="platform">Platform:</label>
            <select
              id="platform"
              value={newGame.platform}
              onChange={handleOnChange}
              name= "platform"
              required
            >
              <option value="">-- Select platform --</option>
              <option value="PC">PC</option>
              <option value="PlayStation">Ps4</option>
              <option value="PlayStation">Ps5</option>
              <option value="Xbox">Xbox</option>
              <option value="Nintendo">Nintendo</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="img">Image URL:</label>
            <input
              type="text"
              id="img"
              value={newGame.img}
              onChange={handleOnChange}
              name= "img"
            />
          </div>
        </div>
        <div className={styles.imgContainer}>
          <div className={styles.formGroup}>
            <label htmlFor="imgPreview">Image preview:</label>
            <img
              id="imgPreview"
              className={styles.imgPreview}
              src={
              newGame.img !== ''
                ? newGame.img
                : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
              }
              alt={newGame.title}
              />
          </div>
        </div>
        </div>
        <div>
        <div>
          <button type="submit">Add game</button>
        </div>
        </div>
      </form>
    </div>
  )
}


