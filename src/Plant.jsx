import React from 'react';
import './css/index.css';

const plantconst = {
  name: 'Votre forêt enchantée',
};

function Plant() {
  return (
    <>
      <div className='plant'>
        <h2>{plantconst.name}</h2>
        <div className='items'>
          <div className='item'>
            <img src='' alt='' />
            <div className='overflow'></div>
          </div>
          <div className='item'>
            <img src='' alt='' />
            <div className='overflow'></div>
          </div>
          <div className='item'>
            <img src='' alt='' />
            <div className='overflow'></div>
          </div>
          <div className='item'>
            <img src='' alt='' />
            <div className='overflow'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Plant 