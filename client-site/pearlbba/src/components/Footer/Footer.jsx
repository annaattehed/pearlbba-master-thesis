import React from 'react'

const Footer = () => {

  const today = new Date();
  const year = today.getFullYear();

  return (
    <div className='footer'>
      <div className='section-top-footer'>
        <div className='section-links'>
            <h1>Categories</h1>
            <span>Necklaces</span>
            <span>Bracelets</span>
            <span>Rings</span>
            <span>Bestsellers</span>
            <span>New arrivals</span>
        </div>
        <div className='footer-information'>
            <h1>Contact</h1>
            <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
            </span>
        </div>
        <div className='footer-information'>
            <h1>About Us</h1>
            <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
            </span>
        </div>
      </div>
      <div className='section-bottom-footer'>
          <div className='left-section'>
            <span>här ska det vara en bild tror jag.</span>
          </div>
          <div className="right-section">
              <small>Copyright © {year} PEARLBBA</small>
          </div>
      </div>
    </div>
  )
}

export default Footer