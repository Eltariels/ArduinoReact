import React, { useState } from 'react';
import './css/index.css';
import roundImage from './assets/round.svg';

function SwitcherDetails() {
  const [isOpenActive, setIsOpenActive] = useState(true);

  const handleSwitch = () => {
    if (!isOpenActive) {
      setIsOpenActive(true);
    }
  };

  const handleManualSwitch = () => {
    if (isOpenActive) {
      setIsOpenActive(false);
    }
  };

  return (
    <div className='switcher'>
      <div className='container'>
        <div className={`round ${isOpenActive ? 'active' : ''}`} onClick={handleSwitch}>
          <img className={isOpenActive ? 'visible' : 'hidden'} src={roundImage} alt='rond blanc' />
          <a href='#' className='link'>Ouverture</a>
        </div>
        <div className={`round ${!isOpenActive ? 'active' : ''}`} onClick={handleManualSwitch}>
          <a href='#' className='link'>Fermeture</a>
          <img className={!isOpenActive ? 'visible' : 'hidden'} src={roundImage} alt='rond blanc' />
        </div>
      </div>
    </div>
  );
}

export default SwitcherDetails;
