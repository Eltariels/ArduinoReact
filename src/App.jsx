import React from 'react';
import Switcher from './Switcher.jsx';
import Greenhouse from './Greenhouse.jsx';
import Plant from './Plant.jsx';
// import MyMQTTComponent from './mqtt.jsx';
import './css/index.css';

function App() {
  return (
    <>
      <React.StrictMode>
        <Switcher />
        <Greenhouse />
        <Plant />
        {/* <MyMQTTComponent /> */}
      </React.StrictMode>
    </>
  );
}

export default App;