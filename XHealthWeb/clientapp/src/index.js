import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PatientsList from './components/Patient/PatientsList';
import AddPatient from './components/Patient/AddPatient';
import EditPatient from './components/Patient/EditPatient';
import AccountsList from './components/Account/AccountsList';
import AddAccount from './components/Account/AddAccount';
import EditAccount from './components/Account/EditAccount';
import AccountInsurancesList from './components/AccountInsurance/AccountInsurancesList';
import AddAccountInsurance from './components/AccountInsurance/AddAccountInsurance';
import EditAccountInsurance from './components/AccountInsurance/EditAccountInsurance';
import ClientsList from './components/Client/ClientsList';
import AddClient from './components/Client/AddClient';
import EditClient from './components/Client/EditClient';
import ExportHistoriesList from './components/ExportHistory/ExportHistoriesList';
import AddExportHistory from './components/ExportHistory/AddExportHistory';
import EditExportHistory from './components/ExportHistory/EditExportHistory';
import FacilitiesList from './components/Facility/FacilitiesList';
import AddFacility from './components/Facility/AddFacility';
import EditFacility from './components/Facility/EditFacility';
import InsurancesList from './components/Insurance/InsurancesList';
import AddInsurance from './components/Insurance/AddInsurance';
import EditInsurance from './components/Insurance/EditInsurance';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PatientsList />} />
                <Route path="/patients" element={<PatientsList />} />
                <Route path="/add-patient" element={<AddPatient />} />
                <Route path="/edit-patient/:id" element={<EditPatient />} />
                <Route path="/accounts" element={<AccountsList />} />
                <Route path="/add-account" element={<AddAccount />} />
                <Route path="/edit-account/:id" element={<EditAccount />} />
                <Route path="/accountinsurances" element={<AccountInsurancesList />} />
                <Route path="/add-accountinsurance" element={<AddAccountInsurance />} />
                <Route path="/edit-accountinsurance/:accountId/:insuranceId" element={<EditAccountInsurance />} />
                <Route path="/clients" element={<ClientsList />} />
                <Route path="/add-client" element={<AddClient />} />
                <Route path="/edit-client/:id" element={<EditClient />} />
                <Route path="/exporthistories" element={<ExportHistoriesList />} />
                <Route path="/add-exporthistory" element={<AddExportHistory />} />
                <Route path="/edit-exporthistory/:id" element={<EditExportHistory />} />
                <Route path="/facilities" element={<FacilitiesList />} />
                <Route path="/add-facility" element={<AddFacility />} />
                <Route path="/edit-facility/:id" element={<EditFacility />} />
                <Route path="/insurances" element={<InsurancesList />} />
                <Route path="/add-insurance" element={<AddInsurance />} />
                <Route path="/edit-insurance/:id" element={<EditInsurance />} />
            </Routes>
        </Router>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
