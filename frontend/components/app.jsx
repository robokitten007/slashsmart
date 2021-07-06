import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_until';
import NavBarContainer from './navbar/navbar_container';
import DashboardContainer from './dashboard/dashboard_container';
import Splash from './splash/splash';

const App = () => {

    // return (
    //     'app is working'
    // )
    return(    
    <div>
    <Route path="/" component={NavBarContainer} />
    <Switch>
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/" component={Splash} />
    </Switch>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <ProtectedRoute path="/dashboard" component={DashboardContainer} />
  
  </div>
    )
}

export default App;