import React from 'react'
import Bestsellers from '../../components/BestSellers/Bestsellers'
import Categories from '../../components/Categories/Categories'
import Slider from '../../components/Slider/Slider'
import './Homepage.scss'

const Homepage = () => {
  return (
    <div className='homepage'>
      <Slider/>
      <Bestsellers type="bestselling"/>
      <Categories/>
      <Bestsellers type="new"/>
    </div>
  )
}

export default Homepage