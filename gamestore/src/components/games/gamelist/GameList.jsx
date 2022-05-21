import React, { useState, useEffect } from 'react'
import GameCard from '../gamecard/GameCard';
import './GameList.css'

const GameList = () => {
  const axios = require('axios').default;
	const [games, setGames] = useState([])

	useEffect(() => {
		axios.get('http://127.0.0.1:8000/api/v1/games/')
		.then(function (response) {
			setGames(response.data)
		})
	}, [])

  return (
    <div className='gamelist'>
      {games.map(game => <GameCard game={game} key={game.id}/>)}
    </div>
  )
}

export default GameList