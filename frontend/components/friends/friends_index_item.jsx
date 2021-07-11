import React from 'react';
import {Link} from 'react-router-dom';

class FriendsIndexItem extends React.Component{

    constructor(props){
        super(props)
    }

    render (){
        const {currentUser, friend, deleteFriend} = this.props
        return (
           <li>
               <p>friends index item here</p>
               <Link to='/dashboard'>{friend.name}</Link>
               <button onClick={()=>deleteFriend()}>delete {friend.name}</button>
           </li>
        )
    }
}

export default FriendsIndexItem;