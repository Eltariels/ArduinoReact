import React, { useEffect } from 'react';
import { Client, Message } from 'paho-mqtt';

function MyMQTTComponent() {
    useEffect(() => {
        // Remplacez 'mqtt://broker.example.com' par l'adresse de votre broker MQTT
        const client = new Client("wss://eu1.cloud.thethings.network:1883/mqtt", Number(1883), "theo");
        console.log('Client Configuration:', client);

        // set callback handlers
        client.onConnectionLost = onConnectionLost;
        client.onMessageArrived = onMessageArrived;

        // connect the client
        client.connect({
            onSuccess: onConnect,
            userName: 'arduinoreact@ttn',
            password: 'NNSXS.HYC47W4C44PLFV2LK74XJCFH5MQBQ26QT2YQC3Y.M4VHZCRNRT2FVIQSWRP2QDZ2SLNSEY6TITPUTXY47MKLRR2D3EHQ'
        });

        function onConnect() {
            console.log("Connexion établie avec le broker MQTT");
            client.subscribe('#');
            const message = new Message('Hello');
            message.destinationName = '#';
            client.send(message);
        }

        function onConnectionLost(responseObject) {
            if (responseObject.errorCode !== 0) {
                console.error("La connexion MQTT a été perdue : " + responseObject.errorMessage);
            }
        }

        // called when a message arrives
        function onMessageArrived(message) {
            console.log("Message reçu : " + message.payloadString);
        }

        // Nettoyage lors du démontage du composant
        return () => {
            client.disconnect(); // Ferme la connexion MQTT
        };
    }, []); // La dépendance vide signifie que cela s'exécutera une seule fois lors du montage

    return (
        <div>
            {/* Votre contenu React */}
        </div>
    );
}

export default MyMQTTComponent;