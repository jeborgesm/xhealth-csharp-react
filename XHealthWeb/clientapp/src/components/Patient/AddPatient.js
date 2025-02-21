import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddPatient = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [socialSecurityNumber, setSocialSecurityNumber] = useState('');
    const history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/home/patients', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firstName, lastName, middleName, socialSecurityNumber }),
        });
        if (response.ok) {
            alert('Patient added successfully');
            history.push('/');
        } else {
            alert('Failed to add patient');
        }
    };

    return (
        <div className="container mt-5">
            <h1>Add Patient</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">First Name</label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="form-control" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Last Name</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="form-control" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Middle Name</label>
                    <input type="text" value={middleName} onChange={(e) => setMiddleName(e.target.value)} className="form-control" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Social Security Number</label>
                    <input type="text" value={socialSecurityNumber} onChange={(e) => setSocialSecurityNumber(e.target.value)} className="form-control" required />
                </div>
                <button type="submit" className="btn btn-primary">Add Patient</button>
            </form>
        </div>
    );
};

export default AddPatient;
