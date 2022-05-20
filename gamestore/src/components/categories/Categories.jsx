import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './Categories.css'
import CategoryItem from './CategoryItem';

const Categories = () => {
	const axios = require('axios').default;
	const [categories, setCategories] = useState([])

	useEffect(() => {
		axios.get('http://127.0.0.1:8000/api/v1/genres/')
		.then(function (response) {
			setCategories(response.data)
		})
	}, [])

  return (
    <div className='categories'>
			{categories.map(category => <CategoryItem category={category} key={category.slug}/>)}
    </div>
  )
}

export default Categories