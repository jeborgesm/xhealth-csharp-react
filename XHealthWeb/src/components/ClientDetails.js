import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ClientDetails = () => {
    const { id } = useParams();
    const [client, setClient] = useState(null);
    const [exportHistory, setExportHistory] = useState([]);

    useEffect(() => {
        axios.get(`/api/Client/${id}`)
            .then(response => {
                setClient(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the client!', error);
            });

        axios.get(`/api/ExportHistory/${id}`)
            .then(response => {
                setExportHistory(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the export history!', error);
            });
    }, [id]);

    const handleExport = () => {
        axios.get(`/api/Export/${id}`, { responseType: 'blob' })
            .then(response => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', `export-${new Date().toISOString().split('T')[0]}.zip`);
                document.body.appendChild(link);
                link.click();
            })
            .catch(error => {
                console.error('There was an error exporting the data!', error);
            });
    };

    if (!client) return <div>Loading...</div>;

    return (
        <div>
            <h1>{client.name}</h1>
            <button onClick={handleExport}>Export Data</button>
            <h2>Accounts</h2>
            <ul>
                {client.accounts.map(account => (
                    <li key={account.id}>Account Number: {account.accountNumber}, Balance: {account.balance}</li>
                ))}
            </ul>
            <h2>Export History</h2>
            <ul>
                {exportHistory.map(history => (
                    <li key={history.id}>
                        Date: {new Date(history.exportDate).toLocaleString()}, 
                        Number of Accounts: {history.numberOfAccounts}, 
                        Total Balance: {history.totalBalance}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClientDetails;