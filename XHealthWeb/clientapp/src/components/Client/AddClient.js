import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddClient = () => {
    const [client, setClient] = useState({ name: '', email: '', phone: '', accounts: [] });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setClient({ ...client, [name]: value });
    };

    const validate = () => {
        const errors = {};
        if (!client.name) errors.name = 'Name is required';
        if (!client.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(client.email)) {
            errors.email = 'Email is invalid';
        }
        if (!client.phone) {
            errors.phone = 'Phone is required';
        } else if (!/^\d{10}$/.test(client.phone)) {
            errors.phone = 'Phone number is invalid';
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        fetch('/api/home/clients', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(client)
        }).then(response => {
            if (response.ok) {
                alert('Client added successfully');
                navigate('/clients');
            } else {
                response.json().then(data => {
                    alert('Failed to add client: ' + JSON.stringify(data));
                });
            }
        });
    };

    return (
        <div className="container mt-5">
            <h1>Add Client</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        name="name"
                        value={client.name}
                        onChange={handleChange}
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        placeholder="Name"
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        name="email"
                        value={client.email}
                        onChange={handleChange}
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        placeholder="Email"
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input
                        name="phone"
                        value={client.phone}
                        onChange={handleChange}
                        className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                        placeholder="Phone"
                    />
                    {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div>
    );
};

export default AddClient;
