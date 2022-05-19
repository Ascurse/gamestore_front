import React from 'react'
import MyCarousel from '../../components/carousel/Carousel'
import Header from '../../components/header/Header'
import './Homepage.css'

const Homepage = () => {
  return (
    <div>
      <Header />
      <MyCarousel />
			<div className='main_content'>
				Content
			</div>
    </div>
  )
}

export default Homepage