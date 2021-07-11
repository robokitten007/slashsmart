import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FriendsIndexContainer from '../friends/friends_index_container';


class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }
    

    render(){

        return (
            <div>
                <p>dashboard here: I am dashboard component</p>
                
                <FriendsIndexContainer />
            
            </div>
        )
    }
}

export default Dashboard