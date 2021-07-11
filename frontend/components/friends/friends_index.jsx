import React from 'react';
import FriendsIndexItem from './friends_index_item';

class FriendsIndex extends React.Component{

    constructor(props){
        super(props);
  
    }

    componentDidMount(){
        this.props.fetchFriends();
    }
    render(){
        const {currentUser, friendships} = this.props;
        if(!currentUser){
            return null;
        }
        const { deleteFriend} = this.props;
        return (
           <div>
               <p>friend index here</p>
               <ul>

            {friendships.map((friendship)=>(
            
                <FriendsIndexItem
                    key={friendship.id}
                    currentUser={currentUser}
                    friendship={friendship}
                    deleteFriend ={deleteFriend}
                    />           
            ))}
                <p>bottom of friend index here</p>
            </ul>
        </div>   

        )
    }
}

export default FriendsIndex;