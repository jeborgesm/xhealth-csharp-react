import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PatientsList from './components/PatientsList';
import AddPatient from './components/AddPatient';
import EditPatient from './components/EditPatient';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PatientsList />} />
                <Route path="/list" element={<PatientsList />} />
                <Route path="/add" element={<AddPatient />} />
                <Route path="/edit/:id" element={<EditPatient />} />
            </Routes>
        </Router>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);