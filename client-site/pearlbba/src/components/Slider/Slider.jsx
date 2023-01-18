import React from 'react';
import './Slider.scss';
import KeyboardDoubleArrowLeftTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowLeftTwoTone';
import KeyboardDoubleArrowRightTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowRightTwoTone';

const data = [
    "https://www.pexels.com/photo/body-of-water-under-cloudy-blue-sky-4784378/",
    "https://www.pexels.com/photo/aerial-shot-of-beach-3204755/",
    "https://www.pexels.com/photo/bird-s-eye-view-of-sea-water-1456291/",
];

const Slider = () => {
  return (
    <div className='slider'>
        <div className="slider-container">
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
        </div>
        <div className='icons'>
            <div className="icon"> <KeyboardDoubleArrowLeftTwoToneIcon/> </div>
            <div className="icon"> <KeyboardDoubleArrowRightTwoToneIcon/> </div>
        </div>

    </div>
  )
}

export default Slider