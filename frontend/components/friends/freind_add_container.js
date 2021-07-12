
import { connect } from 'react-redux';
import FriendAdd from './friend_add';
import { addFriend} from '../../actions/friend_actions';
 



const mSTP = state =>({
    currentUser: state.entities.users[state.session.id],
    friendships: Object.values(state.entities.friends)
})

const mDTP = dispatch =>({
    addFriend: (email) => dispatch(addFriend(email)),
    
})

export default connect(mSTP, mDTP)(FriendAdd)