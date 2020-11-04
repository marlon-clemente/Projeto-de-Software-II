import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Schools from './pages/Schools';

const Routes = () =>{
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/app" component={Schools} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
