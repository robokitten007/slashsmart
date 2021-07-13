import * as FriendsUtil from '../util/friend_util';

export const RECEIVE_FRIENDS = 'RECEIVE_FRIENDS';
export const RECEIVE_FRIEND = 'RECEIVE_FRIEND';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';
export const FRIEND_ERRORS = 'FRIEND_ERRORS';
export const CLEAR_FRIEND_ERRORS = 'CLEAR_FRIEND_ERRORS';


const receiveFriends = (friends)=>({
    type: RECEIVE_FRIENDS,
    friends 
})

const receiveFriend = (friend)=>({
    type: RECEIVE_FRIEND,
    friend
})

const removeFriend = (id)=>({
    type: REMOVE_FRIEND,
    id
})

const friendErrors = (errors) =>({
    type: FRIEND_ERRORS,
    errors
})

export const clearFriendErrors = () =>({
    type: CLEAR_FRIEND_ERRORS
})

export const fetchFriends = ()=>dispatch =>(
    FriendsUtil.fetchFriends()
        .then(friends => (dispatch(receiveFriends(friends))),
        err => dispatch(friendErrors(err.responseJSON)))
)


export const addFriend = (email) => dispatch =>(
    FriendsUtil.addFriend(email)
        .then(friend => (dispatch(receiveFriend(friend))),
        err => dispatch(friendErrors(err.responseJSON)))
)

export const deleteFriend = (id) => dispatch =>(
    FriendsUtil.removeFriend(id)
        .then((id)=>(dispatch(removeFriend(id))),
        err => dispatch(friendErrors(err.responseJSON)))
)

