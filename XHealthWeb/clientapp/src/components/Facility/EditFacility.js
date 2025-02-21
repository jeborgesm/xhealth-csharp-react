import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditFacility = () => {
    const [facility, setFacility] = useState({ name: '', address: '' });
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        fetch(`/api/home/facilities/${id}`)
            .then(response => response.json())
            .then(data => setFacility(data));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFacility({ ...facility, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`/api/home/facilities/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(facility)
        }).then(() => navigate('/facilities'));
    };

    return (
        <div className="container mt-5">
            <h1>Edit Facility</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input name="name" value={facility.name} onChange={handleChange} className="form-control" placeholder="Name" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input name="address" value={facility.address} onChange={handleChange} className="form-control" placeholder="Address" />
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        </div>
    );
};

export default EditFacility;
