import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Error404 from './pages/404';
import Landing from './pages/Landing';
import Schools from './pages/MapSchools';
import School from './pages/SchoolShow';

const Routes = () =>{
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/app" component={Schools} exact/>
        <Route path="/app/school/:id" component={School} />
        <Route path="*" component={Error404} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
