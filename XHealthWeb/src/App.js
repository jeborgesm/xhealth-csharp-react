import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ClientList from './components/ClientList';
import ClientDetails from './components/ClientDetails';
import ClientForm from './components/ClientForm';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={ClientList} />
                <Route path="/client/:id" component={ClientDetails} />
                <Route path="/add-client" component={ClientForm} />
                <Route path="/edit-client/:id" component={ClientForm} />
            </Switch>
        </Router>
    );
};

export default App;