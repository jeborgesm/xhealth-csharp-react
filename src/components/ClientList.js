import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Client from './Client';

const ClientList = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        axios.get('/api/Client')
            .then(response => {
                setClients(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the clients!', error);
            });
    }, []);

    return (
        <div>
            <h1>Clients</h1>
            <ul>
                {clients.map(client => (
                    <Client key={client.id} client={client} />
                ))}
            </ul>
        </div>
    );
};

export default ClientList;