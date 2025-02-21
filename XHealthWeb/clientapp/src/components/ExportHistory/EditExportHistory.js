import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditExportHistory = () => {
    const [exportHistory, setExportHistory] = useState({ exportDate: '', fileName: '' });
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        fetch(`/api/home/exporthistories/${id}`)
            .then(response => response.json())
            .then(data => setExportHistory(data));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExportHistory({ ...exportHistory, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`/api/home/exporthistories/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(exportHistory)
        }).then(() => navigate('/exporthistories'));
    };

    return (
        <div className="container mt-5">
            <h1>Edit Export History</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Export Date</label>
                    <input name="exportDate" value={exportHistory.exportDate} onChange={handleChange} className="form-control" placeholder="Export Date" />
                </div>
                <div className="mb-3">
                    <label className="form-label">File Name</label>
                    <input name="fileName" value={exportHistory.fileName} onChange={handleChange} className="form-control" placeholder="File Name" />
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        </div>
    );
};

export default EditExportHistory;
