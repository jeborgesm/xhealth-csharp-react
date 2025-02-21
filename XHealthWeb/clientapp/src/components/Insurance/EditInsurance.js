import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditInsurance = () => {
    const [insurance, setInsurance] = useState({ planName: '', policy: '', groupNumber: '' });
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        fetch(`/api/home/insurances/${id}`)
            .then(response => response.json())
            .then(data => setInsurance(data));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInsurance({ ...insurance, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`/api/home/insurances/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(insurance)
        }).then(() => navigate('/insurances'));
    };

    return (
        <div className="container mt-5">
            <h1>Edit Insurance</h1>
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
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        </div>
    );
};

export default EditInsurance;
