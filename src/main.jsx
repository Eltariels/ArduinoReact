import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './css/index.css';

console.log(
  '%c     🌲 !! LA FORÊT ENCHANTÉE !! 🌲',
  'background: #543a34; color: #ffcc00; padding: 10px; font-size: 24px; font-weight: bold; border-radius: 10px;'
);

console.log(
  '%c     👩‍🌾 Réalisée par les enchanteurs de la forêt 👩‍🌾',
  'background: #933d41; color: #ffffff; padding: 10px; font-size: 18px; font-weight: bold; border-radius: 10px;'
);

console.log(
  '%c     🌿 PILOT Célia / BUFFY Jade / CUNSOLO Mathys / BORELLA Théo 🌿',
  'background: #3e6874; color: #ffffff; padding: 10px; font-size: 18px; font-weight: bold; border-radius: 10px;',
);

const style = `
  background-color: #2c2c2c;
  color: #ffffff;
  padding: 20px;
  border-radius: 15px;
  font-size: 16px;
  font-weight: bold;
  border: 2px solid #474747;
`;

console.log(
  '%cSerre Connectée MMI3 Dev Web\n-----------\nDescription:\nLa Serre Connectée pour la Croissance des Plantes est un système intelligent conçu pour optimiser l\'environnement de croissance des plantes en utilisant des technologies modernes. Le projet se compose de plusieurs composants clés :\n-----------\n1. Client Frontend en React:\n   - Interface utilisateur conviviale permettant aux utilisateurs de surveiller et de contrôler l\'environnement de la serre.\n   - Affichage en temps réel des données telles que la température, l\'humidité, la vitesse du vent, et l\'humidité du sol.\n   - Fonctionnalités de contrôle à distance pour ajuster les paramètres de la serre.\n-----------\n2. Serveur Node.js avec LoraWan:\n   - Gestion centralisée des données provenant des capteurs répartis dans la serre.\n   - Communication bidirectionnelle entre le serveur et les dispositifs IoT (Arduino) via le protocole LoRaWAN, assurant une connectivité longue portée et basse consommation d\'énergie.\n-----------\n3. Dispositifs IoT (Arduino):\n   - Capteur DHT11: Mesure de la température et de l\'humidité de l\'air.\n   - Pompe à eau: Contrôle de l\'arrosage en fonction des besoins détectés.\n   - Anémomètre: Mesure de la vitesse du vent pour ajuster les conditions de ventilation.\n   - Capteur d\'humidité du sol: Surveillance de l\'humidité du sol pour optimiser l\'arrosage.\n   - Moteur: Contrôle des mécanismes de ventilation et d\'ombrage.\n-----------\nLe système offre une solution complète pour la gestion automatisée de la serre, améliorant la productivité agricole tout en minimisant la consommation d\'eau et d\'énergie. Grâce à l\'utilisation de technologies comme React, Node.js, LoRaWAN, et Arduino, le projet combine l\'efficacité informatique avec la durabilité environnementale pour favoriser une croissance végétale optimale.',
  style
);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
