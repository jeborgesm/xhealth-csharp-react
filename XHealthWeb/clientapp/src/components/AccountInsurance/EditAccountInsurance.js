import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditAccountInsurance = () => {
    const [accountInsurance, setAccountInsurance] = useState({ accountId: '', insuranceId: '' });
    const navigate = useNavigate();
    const { accountId, insuranceId } = useParams();

    useEffect(() => {
        fetch(`/api/home/accountinsurances/${accountId}/${insuranceId}`)
            .then(response => response.json())
            .then(data => setAccountInsurance(data));
    }, [accountId, insuranceId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAccountInsurance({ ...accountInsurance, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`/api/home/accountinsurances/${accountId}/${insuranceId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(accountInsurance)
        }).then(() => navigate('/accountinsurances'));
    };

    return (
        <div className="container mt-5">
            <h1>Edit Account Insurance</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Account ID</label>
                    <input name="accountId" value={accountInsurance.accountId} onChange={handleChange} className="form-control" placeholder="Account ID" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Insurance ID</label>
                    <input name="insuranceId" value={accountInsurance.insuranceId} onChange={handleChange} className="form-control" placeholder="Insurance ID" />
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        </div>
    );
};

export default EditAccountInsurance;
