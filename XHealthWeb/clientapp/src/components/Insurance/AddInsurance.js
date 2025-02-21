import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddInsurance = () => {
    const [insurance, setInsurance] = useState({ planName: '', policy: '', groupNumber: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInsurance({ ...insurance, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/home/insurances', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(insurance)
        }).then(response => {
            if (response.ok) {
                alert('Insurance added successfully');
                navigate('/insurances');
            } else {
                alert('Failed to add insurance');
            }
        });
    };

    return (
        <div className="container mt-5">
            <h1>Add Insurance</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Plan Name</label>
                    <input name="planName" value={insurance.planName} onChange={handleChange} className="form-control" placeholder="Plan Name" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Policy</label>
                    <input name="policy" value={insurance.policy} onChange={handleChange} className="form-control" placeholder="Policy" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Group Number</label>
                    <input name="groupNumber" value={insurance.groupNumber} onChange={handleChange} className="form-control" placeholder="Group Number" />
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div>
    );
};

export default AddInsurance;
