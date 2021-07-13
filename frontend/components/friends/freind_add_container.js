
import { connect } from 'react-redux';
import FriendAdd from './friend_add';
import { addFriend, clearFriendErrors} from '../../actions/friend_actions';
 



const mSTP = state =>({
    currentUser: state.entities.users[state.session.id],
    friendships: Object.values(state.entities.friends),
    errors: state.errors.friend
})

const mDTP = dispatch =>({
    addFriend: (email) => dispatch(addFriend(email)),
    clearFriendErrors: ()=>dispatch(clearFriendErrors())
    
})

export default connect(mSTP, mDTP)(FriendAdd)