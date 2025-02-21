import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddFacility = () => {
    const [facility, setFacility] = useState({ name: '', address: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFacility({ ...facility, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/home/facilities', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(facility)
        }).then(response => {
            if (response.ok) {
                alert('Facility added successfully');
                navigate('/facilities');
            } else {
                alert('Failed to add facility');
            }
        });
    };

    return (
        <div className="container mt-5">
            <h1>Add Facility</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input name="name" value={facility.name} onChange={handleChange} className="form-control" placeholder="Name" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input name="address" value={facility.address} onChange={handleChange} className="form-control" placeholder="Address" />
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div>
    );
};

export default AddFacility;
