import React from 'react';
import Switcher from './Switcher.jsx';
import Greenhouse from './Greenhouse.jsx';
import Plant from './Plant.jsx';
import './css/index.css';

function App() {
  return (
    <>
      <React.StrictMode>
        <Switcher />
        <Greenhouse />
        <Plant />
      </React.StrictMode>
    </>
  )
}

export default App
