import React from 'react';
import './css/index.css';
import petitgreenhouseImage from './assets/littlegreenhouse.svg';
import temperatureImage from './assets/temp.svg';
import windImage from './assets/wind.svg';
import waterImage from './assets/water.svg';
import opencloseImage from './assets/openclose.svg';
import courgetteImage from './assets/courgette.svg';
import carotteImage from './assets/carotte.svg';
import radisImage from './assets/radis.svg';
import croixImage from './assets/croix.svg';

const detailsconst = {
    name: 'Courgette',
    name2: 'Carottes',
    name3: 'Radis',
    name4: 'Truc'
};

function Details({ afficherBloc }) {
    const [humidityValue, setHumidityValue] = React.useState(0);

    const handleHumidityChange = (event) => {
        setHumidityValue(event.target.value);
    };

    const renderBlockTitle = () => {
        switch (afficherBloc) {
            case 'courgette':
                return (
                    <div className='title'>
                        <div className='circle-border'>
                            <img src={courgetteImage} alt='logo temperature' className='' />
                        </div>
                        <h2>{detailsconst.name}</h2>
                    </div>
                );
            case 'carotte':
                return (
                    <div className='title'>
                        <div className='circle-border'>
                            <img src={carotteImage} alt='logo wind' className='' />
                        </div>
                        <h2>{detailsconst.name2}</h2>
                    </div>
                );
            case 'radis':
                return (
                    <div className='title'>
                        <div className='circle-border'>
                            <img src={radisImage} alt='logo water' className='' />
                        </div>
                        <h2>{detailsconst.name3}</h2>
                    </div>
                );
            case 'truc':
                return (
                    <div className='title'>
                        <div className='circle-border'>
                            <img src={croixImage} alt='logo openclose' className='' />
                        </div>
                        <h2>{detailsconst.name4}</h2>
                    </div>
                );
            default:
                return null;
        }
    };

    const renderBlockContent = () => {
        switch (afficherBloc) {
            case 'courgette':
                return (
                    <div className='container'>
                        <div className='contain'>
                            <div className='top'>
                                <div className='circle-border-second'>
                                    <img src={waterImage} alt='Serre' />
                                </div>
                                <p>QUEL EST LE TAUX D’HUMIDITÉ DANS LE SOL SOUHAITÉ ?</p>
                            </div>
                            <div className='bottom'>
                                <input type='text' placeholder='20°C' value={humidityValue} onChange={handleHumidityChange} />
                            </div>
                        </div>
                        <div className='contain'>
                            <div className='top'>
                                <div className='circle-border-second'>
                                    <img src={waterImage} alt='Serre' />
                                </div>
                                <p>QUEL EST LE TAUX D’HUMIDITÉ DANS LE SOL SOUHAITÉ ?</p>
                            </div>
                            <div className='bottom'>
                                <input type='text' placeholder='20°C' value={humidityValue} onChange={handleHumidityChange} />
                            </div>
                        </div>
                        <div className='contain'>
                            <div className='top'>
                                <div className='circle-border-second'>
                                    <img src={waterImage} alt='Serre' />
                                </div>
                                <p>QUEL EST LE TAUX D’HUMIDITÉ DANS LE SOL SOUHAITÉ ?</p>
                            </div>
                            <div className='bottom'>
                                <input type='text' placeholder='20°C' value={humidityValue} onChange={handleHumidityChange} />
                            </div>
                        </div>
                        <div className='contain'>
                            <div className='top'>
                                <div className='circle-border-second'>
                                    <img src={waterImage} alt='Serre' />
                                </div>
                                <p>QUEL EST LE TAUX D’HUMIDITÉ DANS LE SOL SOUHAITÉ ?</p>
                            </div>
                            <div className='bottom'>

                            </div>
                        </div>
                    </div>
                );
            case 'carotte':
                return (
                    <div className='container'>
                        <div className='contain'>
                            <div className='circle-border-second'>
                                <img src={waterImage} alt='Wind' />
                            </div>
                            <p>La vitesse du vent est à 20 km/h</p>
                        </div>
                        <div className='buttons'>
                            <button className='button' value={1}>Je souhaite ouvrir la porte</button>
                            <button className='button' value={2}>Je souhaite fermer la porte</button>
                        </div>
                    </div>
                );
            case 'radis':
                return (
                    <div className='container'>
                        <div className='contain'>
                            <div className='circle-border-second'>
                                <img src={waterImage} alt='Serre' />
                            </div>
                        </div>
                    </div>
                );
            case 'truc':
                return (
                    <div className='container'>
                        <div className='contain'>
                            <div className='circle-border-second'>
                                <img src={waterImage} alt='Open / Close' />
                            </div>
                            <p>La porte est actuellement <span className='opentext'>OUVERTE</span><span className='closetext'>FERMER</span></p>
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
            <div className={`details ${afficherBloc === null ? 'hidden' : 'visible'}`} id={`${afficherBloc}`}>
                {renderBlockTitle()}
                {renderBlockContent()}
            </div>
        </>
    );
}

export default Details 