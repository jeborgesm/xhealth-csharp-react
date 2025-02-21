import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddClient = () => {
    const [client, setClient] = useState({ name: '', email: '', phone: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setClient({ ...client, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/home/clients', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(client)
        }).then(response => {
            if (response.ok) {
                alert('Client added successfully');
                navigate('/clients');
            } else {
                alert('Failed to add client');
            }
        });
    };

    return (
        <div className="container mt-5">
            <h1>Add Client</h1>
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
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div>
    );
};

export default AddClient;
