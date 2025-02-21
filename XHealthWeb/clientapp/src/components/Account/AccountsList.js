import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AccountsList = () => {
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        fetch('/api/home/accounts')
            .then(response => response.json())
            .then(data => setAccounts(data));
    }, []);

    return (
        <div className="container mt-5">
            <h1>Accounts</h1>
            <Link to="/add-account" className="btn btn-primary mb-3">Add Account</Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Account Number</th>
                        <th>Balance</th>
                        <th>Admit Date</th>
                        <th>Discharge Date</th>
                        <th>Patient ID</th>
                        <th>Facility ID</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {accounts.map(account => (
                        <tr key={account.id}>
                            <td>{account.accountNumber}</td>
                            <td>{account.balance}</td>
                            <td>{account.admitDate}</td>
                            <td>{account.dischargeDate}</td>
                            <td>{account.patientId}</td>
                            <td>{account.facilityId}</td>
                            <td>
                                <Link to={`/edit-account/${account.id}`} className="btn btn-secondary btn-sm">Edit</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AccountsList;
