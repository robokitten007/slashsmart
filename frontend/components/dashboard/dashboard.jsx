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
            <div className='main-dash'>

                <div className='left-dash'>
                <h1>left bar of dashboard</h1> 
                <ul>
                    <li><FriendsIndexContainer /></li>
                    <li> <FriendAddContainer /> </li>
                </ul>
                 
                </div>

                <div className='mid-dash'>

                    <Switch>
                        <Route path='/dashboard/:userId' component={FriendRemoveContainer} />
                    </Switch>

                </div>

                <div className='right-dash'>
                        {/* <FriendRemoveContainer />  */}
                </div>
               
            </div>
        )
    }
}

export default Dashboard