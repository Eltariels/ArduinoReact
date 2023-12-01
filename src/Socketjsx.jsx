// Socketjsx.jsx

import React, { useEffect } from 'react';
import io from 'socket.io-client';

const Socketjsx = ({ setMqttData }) => {
  useEffect(() => {
    const socket = io('http://localhost:3000');

    socket.on('mqttData', (data) => {
      const textDecoder = new TextDecoder('utf-8');
      const jsonString = textDecoder.decode(data);
      const jsonObject = JSON.parse(jsonString);
      const payload = jsonObject.uplink_message.decoded_payload.bytes;
      const texte = String.fromCharCode(...payload);

      // Mettre à jour la valeur de mqttData
      setMqttData(texte);
    });

    return () => {
      socket.disconnect();
    };
  }, [setMqttData]);

  return null;
};

export default Socketjsx;
