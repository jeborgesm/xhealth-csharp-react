import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FacilitiesList = () => {
    const [facilities, setFacilities] = useState([]);

    useEffect(() => {
        fetch('/api/home/facilities')
            .then(response => response.json())
            .then(data => setFacilities(data));
    }, []);

    return (
        <div className="container mt-5">
            <h1>Facilities</h1>
            <Link to="/add-facility" className="btn btn-primary mb-3">Add Facility</Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {facilities.map(facility => (
                        <tr key={facility.id}>
                            <td>{facility.name}</td>
                            <td>{facility.address}</td>
                            <td>
                                <Link to={`/edit-facility/${facility.id}`} className="btn btn-secondary btn-sm">Edit</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FacilitiesList;
