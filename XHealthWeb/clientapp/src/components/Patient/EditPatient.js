﻿import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditPatient = () => {
    const { id } = useParams();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [socialSecurityNumber, setSocialSecurityNumber] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`/api/home/patients/${id}`)
            .then(response => response.json())
            .then(data => {
                setFirstName(data.firstName);
                setLastName(data.lastName);
                setMiddleName(data.middleName);
                setSocialSecurityNumber(data.socialSecurityNumber);
            });
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`/api/home/patients/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, firstName, lastName, middleName, socialSecurityNumber }),
        });
        if (response.ok) {
            alert('Patient updated successfully');
            navigate('/patients');
        } else {
            alert('Failed to update patient');
        }
    };

    return (
        <div className="container mt-5">
            <h1>Edit Patient</h1>
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
                <button type="submit" className="btn btn-primary">Update Patient</button>
            </form>
        </div>
    );
};

export default EditPatient;
