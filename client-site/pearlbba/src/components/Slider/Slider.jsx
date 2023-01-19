import React, { useState, useEffect, setActive } from 'react';
import './Slider.scss';
import KeyboardDoubleArrowLeftTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowLeftTwoTone';
import KeyboardDoubleArrowRightTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowRightTwoTone';



const Slider = () => {

const [currentSlide, setCurrentSlide] = useState(0);


const data = [
    "https://images.pexels.com/photos/1456291/pexels-photo-1456291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/66258/staniel-cay-swimming-pig-seagull-fish-66258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1268874/pexels-photo-1268874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    
];

const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1 )
};
const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1 )
}

  return (
    <div className='slider'>
        <div className="slider-container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
        </div>
        <div className='icons'>
            <div className="icon" onClick={prevSlide}> <KeyboardDoubleArrowLeftTwoToneIcon/> </div>
            <div className="icon" onClick={nextSlide}> <KeyboardDoubleArrowRightTwoToneIcon/> </div>
        </div>

    </div>
  )
}

export default Slider