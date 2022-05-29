import React from 'react'
import CategoryItem from '../../categories/CategoryItem'
import './GameCard.css'
import GameButton from '../gamebuy-button/GameButton';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentGame } from '../../../redux/game/reducer';

const GameCard = ({ game }) => {

	const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(setCurrentGame(game));
    navigate(`/${game.name}`);
  }

  return (
    <div className='gamecard' onClick={handleClick}>
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