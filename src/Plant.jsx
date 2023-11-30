import React, { useState } from 'react';
import './css/index.css';
import courgetteImage from './assets/courgette.svg';
import carotteImage from './assets/carotte.svg';
import radisImage from './assets/radis.svg';
import croixImage from './assets/croix.svg';
import Details from './Details.jsx';

const plantconst = {
  name: 'Votre forêt enchantée',
};

function Plant() {
  const [afficherBloc, setAfficherBloc] = useState(null);

  const gererAffichage = (bloc) => {
    // Si afficherBloc est le même que le bloc actuel, on le désactive en passant à null
    setAfficherBloc((prevBloc) => (prevBloc === bloc ? null : bloc));
  };
  return (
    <>
      <div className='plant'>
        <h2>{plantconst.name}</h2>
        <div className='items'>
          <div className={`item ${afficherBloc === 'courgette' ? 'visible clicked' : 'hidden'}`} id='courgette' onClick={() => gererAffichage('courgette')}>
            <div className='circle-border'>
              <img src={courgetteImage} alt='Courgette' />
            </div>
            <div className='overflow'></div>
          </div>
          <div className={`item ${afficherBloc === 'carotte' ? 'visible clicked' : 'hidden'}`} id='carotte' onClick={() => gererAffichage('carotte')}>
            <div className='circle-border'>
              <img src={carotteImage} alt='Carotte' />
            </div>
            <div className='overflow'></div>
          </div>
          <div className={`item ${afficherBloc === 'radis' ? 'visible clicked' : 'hidden'}`} id='radis' onClick={() => gererAffichage('radis')}>
            <div className='circle-border'>
              <img src={radisImage} alt='Radis' />
            </div>
            <div className='overflow'></div>
          </div>
          <div className={`item ${afficherBloc === 'truc' ? 'visible clicked' : 'hidden'}`} id='truc' onClick={() => gererAffichage('truc')}>
            <div className='circle-border-green'>
              <img src={croixImage} alt='Truc' />
            </div>
            <div className='overflow'></div>
          </div>
        </div>
      </div>
      <React.StrictMode>
        <Details afficherBloc={afficherBloc}/>
      </React.StrictMode>
    </>
  )
}

export default Plant