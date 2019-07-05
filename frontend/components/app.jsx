
import React from 'react';
import NavTop from './nav_top/nav_top';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignUpFormContainer from './nav_top/session_form/signup_form_container';
import LogInFormContainer from './nav_top/session_form/login_form_container';
import { 
  AuthRoute, 
  ProtectedRoute 
  } from '../util/route_util';

const App = () => {
  return (
    <div>

      <Switch>
        <Route exact path='/' component={NavTop} />
        <AuthRoute exact path='/signup' component={SignUpFormContainer} />
        <AuthRoute exact path='/login' component={LogInFormContainer} />
        <Redirect to='/' component={NavTop} />
      </Switch>
    </div>
  );
};

export default App;