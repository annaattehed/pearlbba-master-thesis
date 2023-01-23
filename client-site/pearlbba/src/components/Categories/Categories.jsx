import React from 'react';
import './Categories.scss';

const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">row1</div>
            <div className="row">row2</div>
        </div>
        <div className="col">
            <div className="row">r3</div>
        </div>
        <div className="col col-1">
            <div className="row">
                <div className="col">
                    <div className="row">row4</div>
                </div>
                <div className="col">
                    <div className="row">row5</div>
                </div>
            </div>
            <div className="row">row6</div>
        </div>
    </div>
  )
}

export default Categories