import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from './navbar/navbar_container';
import DashboardContainer from './dashboard/dashboard_container';
import Splash from './splash/splash';
import Modal from './modal/modal'
import FriendsIndexContainer from './friends/friends_index_container';
// import FriendBillsContainer from './bills/friend_bills/friend_bills_container'
const App = () => {

    return(    
    <div>
      <Modal />
      <Switch>
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Route path="/" component={NavBarContainer} />
     </Switch>
    <AuthRoute exact path="/" component={Splash} />
    <AuthRoute  path="/login" component={LoginFormContainer} />
    <ProtectedRoute path="/dashboard" component={DashboardContainer} />
    <ProtectedRoute path="/dashboard/:id" component={FriendsIndexContainer} />

  </div>
    )
}

export default App;