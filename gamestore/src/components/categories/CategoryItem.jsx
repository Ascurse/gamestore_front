import React from 'react'
import './CategoryItem.css'

const CategoryItem = ({ category }) => {
  return (
    <div className='categoryitem' style={{color: category.color, borderColor: category.color}}>
        {category.name}
    </div>
  )
}

export default CategoryItem