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
            
               <Link className='friend-index-item' to={`/dashboard/${friendship.friend_id}`}>{friendship.friend}</Link>
               {/* <button onClick={()=>deleteFriend(friendship.id)}>delete {friendship.friend}</button> */}
           </li>
        )
    }
}

export default FriendsIndexItem;