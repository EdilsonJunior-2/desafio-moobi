import React from 'react';
import Home from './home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import { Container } from './styles';

function Screens() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    );
}

export default Screens;