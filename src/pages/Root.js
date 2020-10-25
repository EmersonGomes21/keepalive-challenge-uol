import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Erro404 from './Erro404';
import isConnected from '~/utils/isConnected';

const PagesRoot = () => {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={isConnected ? Home : Login} />
        <Route path="/home" component={isConnected ? Home : Login} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Erro404} />
      </Switch>
    </Router>
  );
}

export default PagesRoot;
