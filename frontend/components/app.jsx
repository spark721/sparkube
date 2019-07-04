
import React from 'react';
import NavTop from './nav_top/nav_top';
import { Route } from 'react-router-dom';
import SignUpFormContainer from './nav_top/session_form/signup_form_container';
import LogInFormContainer from './nav_top/session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
  return (
    <div>
      <AuthRoute path='/signup' component={SignUpFormContainer} />
      <AuthRoute path='/login' component={LogInFormContainer} />
      
      <Route exact path='/' component={NavTop} />
    </div>
  );
};

export default App;