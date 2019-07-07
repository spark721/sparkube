
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SignUpFormContainer from './nav_top/session_form/signup_form_container';
import LogInFormContainer from './nav_top/session_form/login_form_container';
import Splash from './splash';


const App = () => {
  return (
    <div>

      <Switch>
        <AuthRoute exact path='/signup' component={SignUpFormContainer} />
        <AuthRoute exact path='/login' component={LogInFormContainer} />
        <Route exact path='/' component={Splash} />
        <Redirect to='/' component={Splash} />
      </Switch>

    </div>
  );
};

export default App;