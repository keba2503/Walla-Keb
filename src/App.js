import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Register from './components/register';
import Login from './components/login';
import Ads from './components/ad';
import Details from './components/adDetail'



function App() {
  return (
    <Router>
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />  
            <Route path="/anuncios" component={Ads} />  
            <Route exact path="/detail/:_id" component={Details} />
          <Redirect to="/login" />
      </Switch>
    </Router>
  );
}

export default App;
