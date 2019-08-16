
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SignUpFormContainer from './nav_top/session_form/signup_form_container';
import LogInFormContainer from './nav_top/session_form/login_form_container';
import Splash from './splash';
import VideoShowContainer from './video/video_show_container';
import VideoUploadContainer from './video/video_upload_form_container';
import VideoEditContainer from './video/video_edit_container';
import SearchIndexContainer from './video/search_index_container';


const App = () => {
  // debugger
  return (
    <div>

      <Switch>
        <AuthRoute exact path='/signup' component={SignUpFormContainer} />
        <AuthRoute exact path='/login' component={LogInFormContainer} />
        <Route path="/watch/:videoId" component={VideoShowContainer} />
        <ProtectedRoute path="/upload" component={VideoUploadContainer} />
        <ProtectedRoute path="/video/:videoId/edit" component={VideoEditContainer} />
        <Route path="/results" component={SearchIndexContainer} />
        <Route exact path='/' component={Splash} />
        <Redirect to='/' component={Splash} />
      </Switch>

    </div>
  );
};

export default App;