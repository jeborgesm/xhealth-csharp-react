import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

const ClientForm = () => {
    const [client, setClient] = useState({ name: '' });
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            axios.get(`/api/client/${id}`)
                .then(response => setClient(response.data))
                .catch(error => console.error('There was an error fetching the client!', error));
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setClient({ ...client, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            axios.put(`/api/client/${id}`, client)
                .then(() => history.push('/'))
                .catch(error => console.error('There was an error updating the client!', error));
        } else {
            axios.post('/api/client', client)
                .then(() => history.push('/'))
                .catch(error => console.error('There was an error creating the client!', error));
        }
    };

    return (
        <div>
            <h1>{id ? 'Edit Client' : 'Add Client'}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={client.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">{id ? 'Update' : 'Create'}</button>
            </form>
        </div>
    );
};

export default ClientForm;
