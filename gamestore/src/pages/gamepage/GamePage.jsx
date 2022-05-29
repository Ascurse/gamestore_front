import React from 'react'
import { useSelector } from 'react-redux'
import GameCard from '../../components/games/gamecard/GameCard'
import './GamePage.css'

const GamePage = () => {

  const game = useSelector(state => state.games.currentGame)

  if(!game) return null

  return (
    <div className='game-page'>
      <h1 className='game-page__title'>{game.name}</h1>
      <div className='game-page__content'>
        <div className='game-page__left'>
          <iframe
            width="90%"
            height="500px"
            src={game.video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
        </div>
        <div className='game-page__right'>
          <GameCard game={game} />
        </div>
      </div>
      <div className='game-page__about'>
        <h2>About:</h2>
        <p style={{fontSize: "larger"}}>{game.description}</p>
      </div>
    </div>
  )
}

export default GamePage