import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PatientsList = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        fetch('/api/home/patients')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Fetched patients:', data);
                setPatients(data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }, []);

    const handleDelete = async (id) => {
        await fetch(`/api/home/patients/${id}`, {
            method: 'DELETE',
        });
        setPatients(patients.filter(patient => patient.id !== id));
    };

    return (
        <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">Patients</h1>
            <Link to="/add-patient" className="btn btn-primary mb-3">Add Patient</Link>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Patients List</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Middle Name</th>
                                    <th>Social Security Number</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {patients.map(patient => (
                                    <tr key={patient.id}>
                                        <td>{patient.firstName}</td>
                                        <td>{patient.lastName}</td>
                                        <td>{patient.middleName}</td>
                                        <td>{patient.socialSecurityNumber}</td>
                                        <td>
                                            <Link to={`/edit-patient/${patient.id}`} className="btn btn-secondary btn-sm">Edit</Link>
                                            <button onClick={() => handleDelete(patient.id)} className="btn btn-danger btn-sm ms-2">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientsList;
