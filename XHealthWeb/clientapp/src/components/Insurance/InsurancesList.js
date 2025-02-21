import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const InsurancesList = () => {
    const [insurances, setInsurances] = useState([]);

    useEffect(() => {
        fetch('/api/home/insurances')
            .then(response => response.json())
            .then(data => setInsurances(data));
    }, []);

    return (
        <div className="container mt-5">
            <h1>Insurances</h1>
            <Link to="/add-insurance" className="btn btn-primary mb-3">Add Insurance</Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Plan Name</th>
                        <th>Policy</th>
                        <th>Group Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {insurances.map(insurance => (
                        <tr key={insurance.id}>
                            <td>{insurance.planName}</td>
                            <td>{insurance.policy}</td>
                            <td>{insurance.groupNumber}</td>
                            <td>
                                <Link to={`/edit-insurance/${insurance.id}`} className="btn btn-secondary btn-sm">Edit</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default InsurancesList;
