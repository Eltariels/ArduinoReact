import React from 'react';
import './css/index.css';
import courgetteImage from './assets/courgette.svg';
import carotteImage from './assets/carotte.svg';
import radisImage from './assets/radis.svg';
import croixImage from './assets/croix.svg';

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
            <div className='circle-border'>
              <img src={courgetteImage} alt='Courgette' />
            </div>
            <div className='overflow'></div>
          </div>
          <div className='item'>
            <div className='circle-border'>
              <img src={carotteImage} alt='Carotte' />
            </div>
            <div className='overflow'></div>
          </div>
          <div className='item'>
            <div className='circle-border'>
              <img src={radisImage} alt='Radis' />
            </div>
            <div className='overflow'></div>
          </div>
          <div className='item'>
            <div className='circle-border-green'>
              <img src={croixImage} alt='Croix' />
            </div>
            <div className='overflow'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Plant