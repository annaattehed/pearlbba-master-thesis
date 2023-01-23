import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.scss';

const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src="https://images.pexels.com/photos/3556665/pexels-photo-3556665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <button>
                    <Link className='link' to="/products/1">Bracelets</Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
            <img src="https://images.pexels.com/photos/3556665/pexels-photo-3556665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <button>
                    <Link className='link' to="/products/1">Necklaces</Link>
                </button>
            </div>
        </div>
        <div className="col col-1">
            <div className="row">
                <div className="col">
                    <div className="row">
                    <img src="https://images.pexels.com/photos/3556665/pexels-photo-3556665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <button>
                    <Link className='link' to="/products/1">Sale</Link>
                </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                    <img src="https://images.pexels.com/photos/3556665/pexels-photo-3556665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <button>
                    <Link className='link' to="/products/1">New arrivals</Link>
                </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Categories