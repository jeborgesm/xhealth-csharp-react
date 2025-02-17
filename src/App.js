import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ClientList from './components/ClientList';
import ClientDetails from './components/ClientDetails';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={ClientList} />
                <Route path="/client/:id" component={ClientDetails} />
            </Switch>
        </Router>
    );
};

export default App;