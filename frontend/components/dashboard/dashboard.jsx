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
            <div>
                <p>dashboard here: I am dashboard component</p>
                
                <FriendsIndexContainer />
                <FriendAddContainer />
                {/* <FriendRemoveContainer /> */}
            </div>
        )
    }
}

export default Dashboard