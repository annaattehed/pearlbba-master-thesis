import React from 'react';
import './Slider.scss';
import KeyboardDoubleArrowLeftTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowLeftTwoTone';
import KeyboardDoubleArrowRightTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowRightTwoTone';

const data = [
    "https://images.pexels.com/photos/1456291/pexels-photo-1456291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/66258/staniel-cay-swimming-pig-seagull-fish-66258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1268874/pexels-photo-1268874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    
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