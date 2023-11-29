import React, { useState } from 'react';
import './css/index.css';
import greenhouseImage from './assets/greenhouse.svg';
import wind from './assets/wind.svg';
import water from './assets/water.svg';
import openclose from './assets/openclose.svg';
import temp from './assets/temp.svg';
import Stats from './Stats.jsx';

const greenhouseconst = {
  name: 'La forêt enchantée',
};

function Greenhouse() {
  const [afficherBloc, setAfficherBloc] = useState(null);

  const gererAffichage = (bloc) => {
    // Si afficherBloc est le même que le bloc actuel, on le désactive en passant à null
    setAfficherBloc((prevBloc) => (prevBloc === bloc ? null : bloc));
  };

  return (
    <>
      <div className='greenhouse'>
        <h2>Votre serre : {greenhouseconst.name}</h2>
        <div className='container'>
          <img src={greenhouseImage} alt='Serre' />
          <div className='overflow'>
            <div className={`button wind ${afficherBloc === 'windBlock' ? 'visible clicked' : 'hidden'}`} id='wind' onClick={() => gererAffichage('windBlock')}>
              <img src={wind} alt='image de vent' />
            </div>
            <div className={`button temp ${afficherBloc === 'tempBlock' ? 'visible clicked' : 'hidden'}`} id='temp' onClick={() => gererAffichage('tempBlock')}>
              <img src={temp} alt='image de température' />
            </div>
            <div className={`button openclose ${afficherBloc === 'opencloseBlock' ? 'visible clicked' : 'hidden'}`} id='openclose' onClick={() => gererAffichage('opencloseBlock')}>
              <img src={openclose} alt='image de open / close' />
            </div>
            <div className={`button water ${afficherBloc === 'waterBlock' ? 'visible clicked' : 'hidden'}`} id='water' onClick={() => gererAffichage('waterBlock')}>
              <img src={water} alt='Image goutte eau' />
            </div>
          </div>
        </div>
      </div>
      <React.StrictMode>
        <Stats afficherBloc={afficherBloc} />
      </React.StrictMode>
    </>
  );
}

export default Greenhouse;
