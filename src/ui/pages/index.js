import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Containers
import Home from '../containers/Home/Home';

const App = () => (
  <>
    <Helmet>
      <title>Cooperativa | Coopeuch</title>
    </Helmet>

    <HashRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </HashRouter>
  </>
);

export default App;
