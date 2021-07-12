
import { connect } from 'react-redux';
import FriendRemove from './friend_remove';
import { deleteFriend} from '../../actions/friend_actions';
 



const mSTP = (state, ownProps)=>{
    let friendshipId
    let friendships = Object.values(state.entities.friends)
    if (friendships.length > 0){
        friendships.forEach((friendship) =>{
  
            if (friendship.friend_id === parseInt(ownProps.match.params.userId)) {
                
                return friendshipId = friendship.id
    
            }
        })
    }
    return ({
        id: friendshipId
    })
    

}

const mDTP = dispatch =>({
    deleteFriend: (id) => dispatch(deleteFriend(id)),
    
})

export default connect(mSTP, mDTP)(FriendRemove)