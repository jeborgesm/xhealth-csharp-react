import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditClient = () => {
    const [client, setClient] = useState({ name: '', email: '', phone: '' });
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        fetch(`/api/home/clients/${id}`)
            .then(response => response.json())
            .then(data => setClient(data));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setClient({ ...client, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`/api/home/clients/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(client)
        }).then(() => navigate('/clients'));
    };

    return (
        <div className="container mt-5">
            <h1>Edit Client</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input name="name" value={client.name} onChange={handleChange} className="form-control" placeholder="Name" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input name="email" value={client.email} onChange={handleChange} className="form-control" placeholder="Email" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input name="phone" value={client.phone} onChange={handleChange} className="form-control" placeholder="Phone" />
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        </div>
    );
};

export default EditClient;
