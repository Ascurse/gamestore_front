import React from 'react'
import './Header.css'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { Badge } from 'antd'

const Header = () => {
  return (
    <div className='header'>
      <div className='header__left'></div>
      <h1 className='header__title'>Gamer HUB</h1>
      <div className='header__cart'>
        <a href="#">
          <Badge count={5}>
            <ShoppingCartOutlined style={{fontSize: '30px', color: '#FFFFFF'}}/>
          </Badge>
        </a>
        <h2 className='header__total'>Total sum: 29$</h2>
      </div>
    </div>
  )
}

export default Header