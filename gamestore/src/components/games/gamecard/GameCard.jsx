import React from 'react'
import CategoryItem from '../../categories/CategoryItem'
import './GameCard.css'
import GameButton from '../gamebuy-button/GameButton';

const GameCard = ({ game }) => {

  return (
    <div className='gamecard'>
			<div className='game-cover' style={{backgroundImage: `url(${game.image})`, objectFit: 'cover'}} />
			<div className='game-about'>
				<h3 className='game-title'>{game.name}</h3>
				<div className='game-genre'>
					{game.genre.map(genre => <CategoryItem category={genre} key={genre.slug}/>)}
				</div>
				<h2 className='game-price'>Price: {game.price}$</h2>
				<h3 className='game-year'>Release year: {game.year}</h3>
				<GameButton game={game} />
			</div>
    </div>
  )
}

export default GameCard