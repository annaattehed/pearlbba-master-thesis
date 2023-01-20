import React from 'react'
import Bestsellers from '../../components/BestSellers/Bestsellers'
import Slider from '../../components/Slider/Slider'
import './Homepage.scss'

const Homepage = () => {
  return (
    <div className='homepage'>
      <Slider/>
      <Bestsellers type="bestselling"/>
      <Bestsellers type="newestarrival"/>
    </div>
  )
}

export default Homepage