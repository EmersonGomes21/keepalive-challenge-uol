import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Erro404 from './Erro404';

const PagesRoot = () => (
  <Router>
    <Switch>
      <Route path="/home" exact component={Home}/>
      <Route path="/" exact component={Home}/>
      <Route path="/login" component={Login} />
      <Route path="/" component={Erro404} />
    </Switch>
  </Router>
);

export default PagesRoot;
