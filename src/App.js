import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';


import Register from './components/register';
import Login from './components/login';


function App() {
  return (
    <Router>
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />       
          <Redirect to="/login" />
      </Switch>
    </Router>
  );
}

export default App;
