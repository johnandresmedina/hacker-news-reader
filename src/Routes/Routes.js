import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from '../Layout';
import App from '../App';
import About from '../About';

const Routes = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <App />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default Routes;
