import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Pricing from './components/Pricing';
import Landing from './components/Landing';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/' component={Landing} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
