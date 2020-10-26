import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Erro404 from './Erro404';
import Route from '~/utils/Route';

const PagesRoot = () => {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} isPrivate/>
        <Route path="/home" component={ Home} isPrivate/>
        <Route path="/login" component={Login}/>
        <Route path="/" component={Erro404} />  
      </Switch>
    </Router>
  );
}

export default PagesRoot;
