import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Register from './components/register';


function App() {
  return (
    <Router>
          <Switch>
            <Route path="/register" component={Register} />
          <Redirect to="/register" />
      </Switch>
    </Router>
  );
}

export default App;
