import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FriendsIndexContainer from '../friends/friends_index_container';
import FriendAddContainer from '../friends/freind_add_container';
import FriendRemoveContainer from '../friends/friend_remove_container';

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render(){

        return (
         <div className='main-dash-container'>
            
            <div className='main-dash'>

                <div className='left-dash'>
                <h1>
                    <a href="#/dashboard">Dashboard</a>
                </h1> 
                <div>
                    <h1>
                    <a href="#/dashboard">All expenses</a>
                </h1>
                </div>

                <div className='friends-index-container'>
                    <div className='friend-index-header'>
                        <h2>FRIENDS</h2>
                    </div>
                    <FriendsIndexContainer />
                    <FriendAddContainer />
                </div>
                 
                </div>
                <div className='content-container'>
                    <div className='mid-dash'>
                        <h1>this is the mid-dash</h1>
                        {/* <Switch>
                            <Route path='/dashboard/:userId' component={FriendRemoveContainer} />
                        </Switch> */}

                    </div>

                    <div className='right-dash'>
                            <Switch>
                            <Route path='/dashboard/:userId' component={FriendRemoveContainer} />
                        </Switch>
                    </div>
                </div>
            </div>
         </div>
        )
    }
}

export default Dashboard