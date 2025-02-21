import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ClientsList = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        fetch('/api/home/clients')
            .then(response => response.json())
            .then(data => setClients(data));
    }, []);

    return (
        <div className="container mt-5">
            <h1>Clients</h1>
            <Link to="/add-client" className="btn btn-primary mb-3">Add Client</Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map(client => (
                        <tr key={client.id}>
                            <td>{client.name}</td>
                            <td>{client.email}</td>
                            <td>{client.phone}</td>
                            <td>
                                <Link to={`/edit-client/${client.id}`} className="btn btn-secondary btn-sm">Edit</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ClientsList;
