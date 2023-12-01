import React, { useState } from 'react';
import './css/index.css';
import petitgreenhouseImage from './assets/littlegreenhouse.svg';
import temperatureImage from './assets/temp.svg';
import windImage from './assets/wind.svg';
import waterImage from './assets/water.svg';
import opencloseImage from './assets/openclose.svg';
import anemometreImage from './assets/anemometre.svg';
import courgetteImage from './assets/courgette.svg';
import carotteImage from './assets/carotte.svg';
import radisImage from './assets/radis.svg';
import Socketjsx from './Socketjsx.jsx';

const statsconst = {
  name: 'Température',
  name2: 'Vitesse du vent',
  name3: 'Humidité du sol',
  name4: 'Ouverture de la porte'
};

const statslegumes = {
  name: 'courgettes',
  name2: 'carottes',
  name3: 'radis',
  name4: 'truc'
};

function Stats({ afficherBloc, mqttDataProp }) {
  const renderBlockTitle = () => {
    switch (afficherBloc) {
      case 'tempBlock':
        return (
          <div className='title'>
            <div className='circle-border'>
              <img src={temperatureImage} alt='logo temperature' className='' />
            </div>
            <h2>{statsconst.name}</h2>
          </div>
        );
      case 'windBlock':
        return (
          <div className='title'>
            <div className='circle-border'>
              <img src={windImage} alt='logo wind' className='' />
            </div>
            <h2>{statsconst.name2}</h2>
          </div>
        );
      case 'waterBlock':
        return (
          <div className='title'>
            <div className='circle-border'>
              <img src={waterImage} alt='logo water' className='' />
            </div>
            <h2>{statsconst.name3}</h2>
          </div>
        );
      case 'opencloseBlock':
        return (
          <div className='title'>
            <div className='circle-border'>
              <img src={opencloseImage} alt='logo openclose' className='' />
            </div>
            <h2>{statsconst.name4}</h2>
          </div>
        );
      default:
        return null;
    }
  };

  const renderBlockContent = () => {
    switch (afficherBloc) {
      case 'tempBlock':
        return (
          <div className='container'>
            <div className='contain'>
              <div className='circle-border-second'>
                <img src={petitgreenhouseImage} alt='Serre' />
              </div>
              {/* Utilisez mqttDataProp ici */}
              <p>La température de la serre est à {mqttDataProp} °C</p>
            </div>
            <div className='buttons'>
              <button className='button' value={1}>Je souhaite ouvrir la porte</button>
              <button className='button' value={2}>Je souhaite fermer la porte</button>
            </div>
          </div>
        );
      case 'windBlock':
        return (
          <div className='container'>
            <div className='contain'>
              <div className='circle-border-second'>
                <img src={anemometreImage} alt='Wind' />
              </div>
              <p>La vitesse du vent est à 20 km/h</p>
            </div>
            <div className='buttons'>
              <button className='button' value={1}>Je souhaite ouvrir la porte</button>
              <button className='button' value={2}>Je souhaite fermer la porte</button>
            </div>
          </div>
        );
      case 'waterBlock':
        return (
          <div className='container'>
            <div className='contain' id='divHumidCourgette'>
              <div className='circle-border-second'>
                <img src={courgetteImage} alt='Serre' />
              </div>
              <p>Le sol des {statslegumes.name} contient 20 % d’humidité. Le niveau n’est pas assez élevé par rapport à votre valeur souhaitée</p>
            </div>
            <div className='buttons' id='btnHumidCourgette'>
              <button className='button' value={1}>Je souhaite arroser</button>
            </div>

            <div className='contain' id='divHumidCarotte'>
              <div className='circle-border-second'>
                <img src={carotteImage} alt='Serre' />
              </div>
              <p>Le sol des {statslegumes.name2} contient 20 % d’humidité. Le niveau n’est pas assez élevé par rapport à votre valeur souhaitée</p>
            </div>
            <div className='buttons' id='btnHumidCarotte'>
              <button className='button' value={1}>Je souhaite arroser</button>
            </div>

            <div className='contain' id='divHumidRadis'>
              <div className='circle-border-second'>
                <img src={radisImage} alt='Serre' />
              </div>
              <p>Le sol des {statslegumes.name3} contient 20 % d’humidité. Le niveau n’est pas assez élevé par rapport à votre valeur souhaitée</p>
            </div>
            <div className='buttons' id='btnHumidRadis'>
              <button className='button' value={1}>Je souhaite arroser</button>
            </div>

            <div className='contain' id='divHumidTruc'>
              <div className='circle-border-second'>
                <img src={petitgreenhouseImage} alt='Serre' />
              </div>
              <p>Le sol des {statslegumes.name4} contient 20 % d’humidité. Le niveau n’est pas assez élevé par rapport à votre valeur souhaitée</p>
            </div>
            <div className='buttons' id='btnHumidTruc'>
              <button className='button' value={1}>Je souhaite arroser</button>
            </div>
          </div>
        );
      case 'opencloseBlock':
        return (
          <div className='container'>
            <div className='contain'>
              <div className='circle-border-second'>
                <img src={petitgreenhouseImage} alt='Open / Close' />
              </div>
              <p>La porte est actuellement <span className='openText'>OUVERTE</span><span className='closeText'>FERMÉE</span></p>
            </div>
            <div className='buttons'>
              <button className='button' value={1}>Je souhaite ouvrir la porte</button>
              <button className='button' value={2}>Je souhaite fermer la porte</button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className={`stats ${afficherBloc === null ? 'hidden' : 'visible'}`} id={`${afficherBloc}Block`}>
        {renderBlockTitle()}
        {/* Passer la fonction setMqttData en tant que prop */}
        <Socketjsx setMqttData={setMqttData} />
        {renderBlockContent()}
      </div>
    </>
  );
}

export default Stats;