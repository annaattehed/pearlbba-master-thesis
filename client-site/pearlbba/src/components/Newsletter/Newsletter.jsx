import React from 'react';
import './Newsletter.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

// container over footer to "sign up" for our newsletter 

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <div className="newsletter-wrapper">
            <span>SUBSCRIBE TO OUR NEWSLETTER</span>
            <div className="mail">
                <input type="text" placeholder="ENTER EMAIL &hearts;" />
                <button className='submit-button'>JOIN TEAM PEARLBBA</button>
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