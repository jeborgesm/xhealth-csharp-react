import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();

    const cards = [
        { title: 'Patients', backcolor: 'white', color: 'border-bottom-primary', route: '/patients', addroute: '/add-patient', text: 'Manage patient records.' },
        { title: 'Accounts', backcolor: 'white', color: 'border-bottom-secondary', route: '/accounts', addroute: '/add-account', text: 'Manage account records.' },
        { title: 'Account Insurances', backcolor: 'white', color: 'border-bottom-success', route: '/accountinsurances', addroute: '/add-accountinsurance', text: 'Manage account insurances.' },
        { title: 'Clients', backcolor: 'white', color: 'border-bottom-info', route: '/clients', addroute: '/add-client', text: 'Manage client records.' },
        { title: 'Export Histories', backcolor: 'white', color: 'border-bottom-warning', route: '/exporthistories', addroute: '/add-exporthistory', text: 'Manage export histories.' },
        { title: 'Facilities', backcolor: 'white', color: 'border-bottom-danger', route: '/facilities', addroute: '/add-facility', text: 'Manage facilities.' },
        { title: 'Insurances', backcolor: 'white', color: 'border-bottom-dark', route: '/insurances', addroute: '/add-insurance', text: 'Manage insurances.' },
    ];

    const handleCardClick = (route) => {
        navigate(route);
    };

    const handleDropdownClick = (route) => {
        navigate(route);
    };

    return (
        <div className="container mt-5">
            <div className="row">
                {cards.map((card, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card shadow mb-4" style={{ backgroundColor: card.backcolor }}>
                            <div className="card-header bg-gradient-primary py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-white">{card.title}</h6>
                                <div className="dropdown no-arrow">
                                    <button className="btn btn-link dropdown-toggle" type="button" id={`dropdownMenuButton${index}`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby={`dropdownMenuButton${index}`}>
                                        <div className="dropdown-header">Actions:</div>
                                        <button className="dropdown-item" onClick={() => handleDropdownClick(card.route)}>List</button>
                                        <button className="dropdown-item" onClick={() => handleDropdownClick(card.addroute)}>Add</button>
                                    </div>
                                </div>
                            </div>
                            <div className={`card-body ${card.color}`} onClick={() => handleCardClick(card.route)}>
                                <p className="card-text">{card.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
