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
        <div>
            <h1>Add Patient</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                </div>
                <div>
                    <label>Middle Name:</label>
                    <input type="text" value={middleName} onChange={(e) => setMiddleName(e.target.value)} required />
                </div>
                <div>
                    <label>Social Security Number:</label>
                    <input type="text" value={socialSecurityNumber} onChange={(e) => setSocialSecurityNumber(e.target.value)} required />
                </div>
                <button type="submit">Add Patient</button>
            </form>
        </div>
    );
};

export default AddPatient;
