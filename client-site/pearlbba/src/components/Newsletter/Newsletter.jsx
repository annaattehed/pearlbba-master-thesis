import React from 'react';
import './Newsletter.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


const Newsletter = () => {
  return (
    <div className='newsletter'>
        <div className="newsletter-wrapper">
            <span>Subrsribe to our Newsletter:</span>
            <div className="mail">
                <input type="text" placeholder="Enter your email &hearts;" />
                <button className='submit-button'>Join team Pearlbba</button>
            </div>
            <div className="icons">
                <FacebookIcon/>
                <TwitterIcon/>
                <InstagramIcon/>
            </div>
        </div>
    </div>
  )
}

export default Newsletter