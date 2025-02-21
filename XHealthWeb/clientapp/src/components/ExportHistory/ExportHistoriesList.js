import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ExportHistoriesList = () => {
    const [exportHistories, setExportHistories] = useState([]);

    useEffect(() => {
        fetch('/api/home/exporthistories')
            .then(response => response.json())
            .then(data => setExportHistories(data));
    }, []);

    return (
        <div className="container mt-5">
            <h1>Export Histories</h1>
            <Link to="/add-exporthistory" className="btn btn-primary mb-3">Add Export History</Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Export Date</th>
                        <th>File Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {exportHistories.map(exportHistory => (
                        <tr key={exportHistory.id}>
                            <td>{exportHistory.exportDate}</td>
                            <td>{exportHistory.fileName}</td>
                            <td>
                                <Link to={`/edit-exporthistory/${exportHistory.id}`} className="btn btn-secondary btn-sm">Edit</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ExportHistoriesList;
