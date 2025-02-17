import React from 'react';
import { Link } from 'react-router-dom';

const Client = ({ client }) => {
    return (
        <li>
            <Link to={`/client/${client.id}`}>{client.name}</Link>
        </li>
    );
};

export default Client;