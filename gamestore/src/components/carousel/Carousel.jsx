import React from 'react'
import { Carousel } from 'antd';
import 'antd/dist/antd.min.css';
import AC from './assets/ACV.jpg';
import Cyberpunk from './assets/Cyberpunk.jpg';
import ACO from './assets/ACO.jpg';
import GOW from './assets/GOW.jpg';
import './Carousel.css'


const contentStyle = {
  height: '600px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const MyCarousel = () => {
	return (
		<div>
			<Carousel autoplay>
				<div>
					<h3 style={contentStyle}>
						<img className='carousel__img' src={AC} />
					</h3>
				</div>
				<div>
					<h3 style={contentStyle}>
						<img className='carousel__img' src={Cyberpunk} />
					</h3>
				</div>
				<div>
					<h3 style={contentStyle}>
						<img className='carousel__img' src={GOW} />
					</h3>
				</div>
				<div>
					<h3 style={contentStyle}>
						<img className='carousel__img' src={ACO} />
					</h3>
				</div>
			</Carousel>
		</div>
	)
}

export default MyCarousel;