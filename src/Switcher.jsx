import React, { useState } from 'react';
import './css/index.css';
import roundImage from './assets/round.svg';

function Switcher() {
  const [isAutomaticActive, setIsAutomaticActive] = useState(true);

  const handleSwitch = () => {
    if (!isAutomaticActive) {
      setIsAutomaticActive(true);
    }
  };

  const handleManualSwitch = () => {
    if (isAutomaticActive) {
      setIsAutomaticActive(false);
    }
  };

  return (
    <div className='switcher'>
      <h2>Mode de fonctionnement</h2>
      <div className='container'>
        <div className={`round ${isAutomaticActive ? 'active' : ''}`} onClick={handleSwitch}>
          <img className={isAutomaticActive ? 'visible' : 'hidden'} src={roundImage} alt='rond blanc' />
          <a href='#' className='link'>Automatique</a>
        </div>
        <div className={`round ${!isAutomaticActive ? 'active' : ''}`} onClick={handleManualSwitch}>
          <a href='#' className='link'>Manuel</a>
          <img className={!isAutomaticActive ? 'visible' : 'hidden'} src={roundImage} alt='rond blanc' />
        </div>
      </div>
    </div>
  );
}

export default Switcher;
