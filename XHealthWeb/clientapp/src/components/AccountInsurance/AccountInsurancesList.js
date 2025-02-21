import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AccountInsurancesList = () => {
    const [accountInsurances, setAccountInsurances] = useState([]);

    useEffect(() => {
        fetch('/api/home/accountinsurances')
            .then(response => response.json())
            .then(data => setAccountInsurances(data));
    }, []);

    return (
        <div className="container mt-5">
            <h1>Account Insurances</h1>
            <Link to="/add-accountinsurance" className="btn btn-primary mb-3">Add Account Insurance</Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Account ID</th>
                        <th>Insurance ID</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {accountInsurances.map(accountInsurance => (
                        <tr key={accountInsurance.accountId}>
                            <td>{accountInsurance.accountId}</td>
                            <td>{accountInsurance.insuranceId}</td>
                            <td>
                                <Link to={`/edit-accountinsurance/${accountInsurance.accountId}/${accountInsurance.insuranceId}`} className="btn btn-secondary btn-sm">Edit</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AccountInsurancesList;
