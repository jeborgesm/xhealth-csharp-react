import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddExportHistory = () => {
    const [exportHistory, setExportHistory] = useState({ exportDate: '', fileName: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExportHistory({ ...exportHistory, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/home/exporthistories', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(exportHistory)
        }).then(response => {
            if (response.ok) {
                alert('Export History added successfully');
                navigate('/exporthistories');
            } else {
                alert('Failed to add export history');
            }
        });
    };

    return (
        <div className="container mt-5">
            <h1>Add Export History</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Export Date</label>
                    <input name="exportDate" value={exportHistory.exportDate} onChange={handleChange} className="form-control" placeholder="Export Date" />
                </div>
                <div className="mb-3">
                    <label className="form-label">File Name</label>
                    <input name="fileName" value={exportHistory.fileName} onChange={handleChange} className="form-control" placeholder="File Name" />
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div>
    );
};

export default AddExportHistory;
