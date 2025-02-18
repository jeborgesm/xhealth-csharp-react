import React, { useEffect, useState } from 'react';
    import React, { useEffect, useState } from 'react';
    import { Link } from 'react-router-dom';

    const ClientList = () => {
        const [clients, setClients] = useState([]);

        useEffect(() => {
            fetch('/api/client')
                .then(response => response.json())
                .then(data => setClients(data));
        }, []);

        return (
            <div>
                <h1>Clients</h1>
                <ul>
                    {clients.map(client => (
                        <li key={client.id}>
                            <Link to={`/client/${client.id}`}>{client.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    export default ClientList;
    import React, { useEffect, useState } from 'react';
    import { Link } from 'react-router-dom';

    const ClientList = () => {
        const [clients, setClients] = useState([]);

        useEffect(() => {
            fetch('/api/client')
                .then(response => response.json())
                .then(data => setClients(data));
        }, []);

        return (
            <div>
                <h1>Clients</h1>
                <ul>
                    {clients.map(client => (
                        <li key={client.id}>
                            <Link to={`/client/${client.id}`}>{client.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    export default ClientList;
import axios from 'axios';
import ClientFactory from './ClientFactory';

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
                    // Use the factory to create Client components
                    ClientFactory.createClient('Client', { key: client.id, client })
                ))}
            </ul>
        </div>
    );
};

export default ClientList;
