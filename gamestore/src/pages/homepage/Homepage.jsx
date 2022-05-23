import React from 'react'
import MyCarousel from '../../components/carousel/Carousel'
import Categories from '../../components/categories/Categories'
import GameList from '../../components/games/gamelist/GameList'
import Header from '../../components/header/Header'
import './Homepage.css'

const Homepage = () => {
  return (
    <div>
      <MyCarousel />
			<div className='main_content'>
				<Categories />
        <GameList />
			</div>
    </div>
  )
}

export default Homepage