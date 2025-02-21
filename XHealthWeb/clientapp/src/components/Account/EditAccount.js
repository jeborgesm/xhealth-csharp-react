import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditAccount = () => {
    const [account, setAccount] = useState({ accountNumber: '', balance: 0, admitDate: '', dischargeDate: '', patientId: 0, facilityId: 0 });
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        fetch(`/api/home/accounts/${id}`)
            .then(response => response.json())
            .then(data => setAccount(data));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAccount({ ...account, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`/api/home/accounts/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(account)
        }).then(() => navigate('/accounts'));
    };

    return (
        <div className="container mt-5">
            <h1>Edit Account</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Account Number</label>
                    <input name="accountNumber" value={account.accountNumber} onChange={handleChange} className="form-control" placeholder="Account Number" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Balance</label>
                    <input name="balance" value={account.balance} onChange={handleChange} className="form-control" placeholder="Balance" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Admit Date</label>
                    <input name="admitDate" value={account.admitDate} onChange={handleChange} className="form-control" placeholder="Admit Date" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Discharge Date</label>
                    <input name="dischargeDate" value={account.dischargeDate} onChange={handleChange} className="form-control" placeholder="Discharge Date" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Patient ID</label>
                    <input name="patientId" value={account.patientId} onChange={handleChange} className="form-control" placeholder="Patient ID" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Facility ID</label>
                    <input name="facilityId" value={account.facilityId} onChange={handleChange} className="form-control" placeholder="Facility ID" />
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        </div>
    );
};

export default EditAccount;
