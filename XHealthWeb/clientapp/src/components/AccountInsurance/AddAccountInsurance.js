import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddAccountInsurance = () => {
    const [accountInsurance, setAccountInsurance] = useState({ accountId: '', insuranceId: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAccountInsurance({ ...accountInsurance, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/home/accountinsurances', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(accountInsurance)
        }).then(response => {
            if (response.ok) {
                alert('Account Insurance added successfully');
                navigate('/accountinsurances');
            } else {
                alert('Failed to add account insurance');
            }
        });
    };

    return (
        <div className="container mt-5">
            <h1>Add Account Insurance</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Account ID</label>
                    <input name="accountId" value={accountInsurance.accountId} onChange={handleChange} className="form-control" placeholder="Account ID" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Insurance ID</label>
                    <input name="insuranceId" value={accountInsurance.insuranceId} onChange={handleChange} className="form-control" placeholder="Insurance ID" />
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div>
    );
};

export default AddAccountInsurance;
