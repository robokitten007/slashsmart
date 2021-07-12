import React from 'react';
import {Link} from 'react-router-dom';

class FriendsIndexItem extends React.Component{

    constructor(props){
        super(props)
    }

    render (){
        const {currentUser, friendship, deleteFriend} = this.props
        return (
           <li>
            
               <Link  to={`/dashboard/${friendship.friend_id}`} className="fas fa-user">
                 <span className='friend-index-item'>{friendship.friend}</span>
                   </Link>
           </li>
        )
    }
}

export default FriendsIndexItem;