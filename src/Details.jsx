import React, { useState } from 'react';
import './css/index.css';
import temperatureImage from './assets/temp.svg';
import windImage from './assets/wind.svg';
import waterImage from './assets/water.svg';
import opencloseImage from './assets/openclose.svg';
import courgetteImage from './assets/courgette.svg';
import carotteImage from './assets/carotte.svg';
import radisImage from './assets/radis.svg';
import croixImage from './assets/croix.svg';
import SwitcherDetails from './SwitcherDetails.jsx';

const detailsconst = {
    name: 'Courgette',
    name2: 'Carottes',
    name3: 'Radis',
    name4: 'Truc'
};

function Details({ afficherBloc }) {
    // Separate state variables for each input
    const [courgettehumidityValue, setcourgetteHumidityValue] = useState('');
    const [courgettewindValue, setcourgetteWindValue] = useState('');
    const [courgettetemperatureValue, setcourgetteTemperatureValue] = useState('');

    const [carottehumidityValue, setcarotteHumidityValue] = useState('');
    const [carottewindValue, setcarotteWindValue] = useState('');
    const [carottetemperatureValue, setcarotteTemperatureValue] = useState('');

    const [radishumidityValue, setradisHumidityValue] = useState('');
    const [radiswindValue, setradisWindValue] = useState('');
    const [radistemperatureValue, setradisTemperatureValue] = useState('');

    const [truchumidityValue, settrucHumidityValue] = useState('');
    const [trucwindValue, settrucWindValue] = useState('');
    const [tructemperatureValue, settrucTemperatureValue] = useState('');

    const handleInputChange = (event, setValue) => {
        setValue(event.target.value);
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
                                    <img src={waterImage} alt='Eau' />
                                </div>
                                <p>QUEL EST LE TAUX D’HUMIDITÉ DANS LE SOL SOUHAITÉ ?</p>
                            </div>
                            <div className='bottom'>
                                <input type='text' placeholder='20°C' value={courgettehumidityValue} onChange={(e) => handleInputChange(e, setcourgetteHumidityValue)} />
                            </div>
                        </div>
                        <div className='contain'>
                            <div className='top'>
                                <div className='circle-border-second'>
                                    <img src={windImage} alt='Vent' />
                                </div>
                                <p>À PARTIR DE QUELLE VITESSE DU VENT SOUHAITEZ-VOUS FERMER LA SERRE ?</p>
                            </div>
                            <div className='bottom'>
                                <input type='text' placeholder='20°C' value={courgettewindValue} onChange={(e) => handleInputChange(e, setcourgetteWindValue)} />
                            </div>
                        </div>
                        <div className='contain'>
                            <div className='top'>
                                <div className='circle-border-second'>
                                    <img src={temperatureImage} alt='Température' />
                                </div>
                                <p>À QUELLE TEMPÉRATURE SOUHAITEZ-VOUS FERMER LA SERRE ?</p>
                            </div>
                            <div className='bottom'>
                                <input type='text' placeholder='20°C' value={courgettetemperatureValue} onChange={(e) => handleInputChange(e, setcourgetteTemperatureValue)} />
                            </div>
                        </div>
                        <div className='contain'>
                            <div className='top'>
                                <div className='circle-border-second'>
                                    <img src={opencloseImage} alt='OpenClose' />
                                </div>
                                <p>OUVERTURE & FERMETURE DE LA SERRE</p>
                            </div>
                            <div className='bottom'>
                                <React.StrictMode>
                                    <SwitcherDetails />
                                </React.StrictMode>
                            </div>
                        </div>
                    </div>
                );
            case 'carotte':
                return (
                    <div className='container'>
                        <div className='contain'>
                            <div className='top'>
                                <div className='circle-border-second'>
                                    <img src={waterImage} alt='Eau' />
                                </div>
                                <p>QUEL EST LE TAUX D’HUMIDITÉ DANS LE SOL SOUHAITÉ ?</p>
                            </div>
                            <div className='bottom'>
                                <input type='text' placeholder='20°C' value={carottehumidityValue} onChange={(e) => handleInputChange(e, setcarotteHumidityValue)} />
                            </div>
                        </div>
                        <div className='contain'>
                            <div className='top'>
                                <div className='circle-border-second'>
                                    <img src={windImage} alt='Vent' />
                                </div>
                                <p>À PARTIR DE QUELLE VITESSE DU VENT SOUHAITEZ-VOUS FERMER LA SERRE ?</p>
                            </div>
                            <div className='bottom'>
                                <input type='text' placeholder='20°C' value={carottewindValue} onChange={(e) => handleInputChange(e, setcarotteWindValue)} />
                            </div>
                        </div>
                        <div className='contain'>
                            <div className='top'>
                                <div className='circle-border-second'>
                                    <img src={temperatureImage} alt='Température' />
                                </div>
                                <p>À QUELLE TEMPÉRATURE SOUHAITEZ-VOUS FERMER LA SERRE ?</p>
                            </div>
                            <div className='bottom'>
                                <input type='text' placeholder='20°C' value={carottetemperatureValue} onChange={(e) => handleInputChange(e, setcarotteTemperatureValue)} />
                            </div>
                        </div>
                        <div className='contain'>
                            <div className='top'>
                                <div className='circle-border-second'>
                                    <img src={opencloseImage} alt='OpenClose' />
                                </div>
                                <p>OUVERTURE & FERMETURE DE LA SERRE</p>
                            </div>
                            <div className='bottom'>
                                <React.StrictMode>
                                    <SwitcherDetails />
                                </React.StrictMode>
                            </div>
                        </div>
                    </div>
                );
            case 'radis':
                return (
                    <div className='container'>
                        <div className='contain'>
                            <div className='top'>
                                <div className='circle-border-second'>
                                    <img src={waterImage} alt='Eau' />
                                </div>
                                <p>QUEL EST LE TAUX D’HUMIDITÉ DANS LE SOL SOUHAITÉ ?</p>
                            </div>
                            <div className='bottom'>
                                <input type='text' placeholder='20°C' value={radishumidityValue} onChange={(e) => handleInputChange(e, setradisHumidityValue)} />
                            </div>
                        </div>
                        <div className='contain'>
                            <div className='top'>
                                <div className='circle-border-second'>
                                    <img src={windImage} alt='Vent' />
                                </div>
                                <p>À PARTIR DE QUELLE VITESSE DU VENT SOUHAITEZ-VOUS FERMER LA SERRE ?</p>
                            </div>
                            <div className='bottom'>
                                <input type='text' placeholder='20°C' value={radiswindValue} onChange={(e) => handleInputChange(e, setradisWindValue)} />
                            </div>
                        </div>
                        <div className='contain'>
                            <div className='top'>
                                <div className='circle-border-second'>
                                    <img src={temperatureImage} alt='Température' />
                                </div>
                                <p>À QUELLE TEMPÉRATURE SOUHAITEZ-VOUS FERMER LA SERRE ?</p>
                            </div>
                            <div className='bottom'>
                                <input type='text' placeholder='20°C' value={radistemperatureValue} onChange={(e) => handleInputChange(e, setradisTemperatureValue)} />
                            </div>
                        </div>
                        <div className='contain'>
                            <div className='top'>
                                <div className='circle-border-second'>
                                    <img src={opencloseImage} alt='OpenClose' />
                                </div>
                                <p>OUVERTURE & FERMETURE DE LA SERRE</p>
                            </div>
                            <div className='bottom'>
                                <React.StrictMode>
                                    <SwitcherDetails />
                                </React.StrictMode>
                            </div>
                        </div>
                    </div>
                );
            case 'truc':
                return (
                    <div className='container'>
                        <div className='contain'>
                            <div className='top'>
                                <div className='circle-border-second'>
                                    <img src={waterImage} alt='Eau' />
                                </div>
                                <p>QUEL EST LE TAUX D’HUMIDITÉ DANS LE SOL SOUHAITÉ ?</p>
                            </div>
                            <div className='bottom'>
                                <input type='text' placeholder='20°C' value={truchumidityValue} onChange={(e) => handleInputChange(e, settrucHumidityValue)} />
                            </div>
                        </div>
                        <div className='contain'>
                            <div className='top'>
                                <div className='circle-border-second'>
                                    <img src={windImage} alt='Vent' />
                                </div>
                                <p>À PARTIR DE QUELLE VITESSE DU VENT SOUHAITEZ-VOUS FERMER LA SERRE ?</p>
                            </div>
                            <div className='bottom'>
                                <input type='text' placeholder='20°C' value={trucwindValue} onChange={(e) => handleInputChange(e, settrucWindValue)} />
                            </div>
                        </div>
                        <div className='contain'>
                            <div className='top'>
                                <div className='circle-border-second'>
                                    <img src={temperatureImage} alt='Température' />
                                </div>
                                <p>À QUELLE TEMPÉRATURE SOUHAITEZ-VOUS FERMER LA SERRE ?</p>
                            </div>
                            <div className='bottom'>
                                <input type='text' placeholder='20°C' value={tructemperatureValue} onChange={(e) => handleInputChange(e, settrucTemperatureValue)} />
                            </div>
                        </div>
                        <div className='contain'>
                            <div className='top'>
                                <div className='circle-border-second'>
                                    <img src={opencloseImage} alt='OpenClose' />
                                </div>
                                <p>OUVERTURE & FERMETURE DE LA SERRE</p>
                            </div>
                            <div className='bottom'>
                                <React.StrictMode>
                                    <SwitcherDetails />
                                </React.StrictMode>
                            </div>
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