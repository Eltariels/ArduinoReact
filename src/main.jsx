import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './css/index.css';

console.log('%c LA FORET ENCHANTEE', 'background: #4CAF50; color: white; padding: 10px; border-radius: 15px; border: 2px solid #006400; font-size: 18px; font-weight: bold;');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
