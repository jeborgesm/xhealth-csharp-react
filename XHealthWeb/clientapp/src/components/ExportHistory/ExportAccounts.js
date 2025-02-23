import React from 'react';

const ExportAccounts = () => {
    const handleExport = () => {
        fetch('/api/home/export-accounts')
            .then(response => {
                if (response.ok) {
                    return response.blob();
                }
                throw new Error('Failed to export accounts');
            })
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-gh.data.dat`;
                document.body.appendChild(a);
                a.click();
                a.remove();
            })
            .catch(error => {
                alert(error.message);
            });
    };

    return (
        <div className="container mt-5">
            <h1>Export Accounts</h1>
            <button onClick={handleExport} className="btn btn-primary">Export</button>
        </div>
    );
};

export default ExportAccounts;

