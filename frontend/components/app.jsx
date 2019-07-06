
import React from 'react';
import NavTop from './nav_top/nav_top';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignUpFormContainer from './nav_top/session_form/signup_form_container';
import LogInFormContainer from './nav_top/session_form/login_form_container';
import { 
  AuthRoute, 
  ProtectedRoute 
  } from '../util/route_util';

import VideoIndexContainer from './video/video_index_container';

const App = () => {
  return (
    <div>

      <Switch>
        <AuthRoute exact path='/signup' component={SignUpFormContainer} />
        <AuthRoute exact path='/login' component={LogInFormContainer} />
        <Route exact path='/' component={NavTop} />
        <Redirect to='/' component={NavTop} />
      </Switch>

      <VideoIndexContainer />
    </div>
  );
};

export default App;