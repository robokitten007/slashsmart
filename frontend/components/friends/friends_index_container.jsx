import { connect } from 'react-redux';
import FriendsIndex from './friends_index';
import { fetchFriends, addFriend, deleteFriend } from '../../actions/friend_actions'; 



const mSTP = state =>({
    currentUser: state.entities.users[state.session.id],
    friendships: Object.values(state.entities.friends),
      
})

const mDTP = dispatch =>({
    fetchFriends: () => dispatch(fetchFriends()),
    deleteFriend: (id) => dispatch(deleteFriend(id))  
})

export default connect(mSTP, mDTP)(FriendsIndex)