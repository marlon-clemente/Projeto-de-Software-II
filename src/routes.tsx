import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Schools from './pages/Schools';
import School from './pages/SchoolShow';

const Routes = () =>{
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/app" component={Schools} exact/>
        <Route path="/app/school/:id" component={School} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
