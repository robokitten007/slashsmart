
import { connect } from 'react-redux';
import FriendRemove from './friend_remove';
import { deleteFriend} from '../../actions/friend_actions';
import { deleteBill } from '../../actions/bill_actions'
 



const mSTP = (state, ownProps)=>{
    let friendshipId
    let friendId
    let friendships = Object.values(state.entities.friends)
    if (friendships.length > 0){
        friendships.forEach((friendship) =>{
  
            if (friendship.friend_id === parseInt(ownProps.match.params.userId)) {
                
                return friendshipId = friendship.id
    
            }
        })
    }
    return ({
        id: friendshipId,
        friendId: parseInt(ownProps.match.params.userId),
        currentUser: state.entities.users[state.session.id],
        bills: Object.values(state.entities.bills)
    })
    

}

const mDTP = dispatch =>({
    deleteFriend: (id) => dispatch(deleteFriend(id)),
    deleteBill: (id)=>dispatch(deleteBill(id))
    
})

export default connect(mSTP, mDTP)(FriendRemove)