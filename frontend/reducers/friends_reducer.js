import {RECEIVE_FRIENDS, RECEIVE_FRIEND, REMOVE_FRIEND } from '../actions/friend_actions';

const friendsReducer =(state={}, action) =>{

    Object.freeze(state);
    let newState = Object.assign({},state)
    switch(action.type){
        case RECEIVE_FRIENDS:
            return Object.assign({},state, action.friends);
        case RECEIVE_FRIEND:
            console.log("action = "+JSON.stringify(action));
            newState[action.friend.id] = action.friend
            return newState
        case REMOVE_FRIEND:
         delete newState[action.id]
         return newState;
        default:
            return state;
        
    }
}

export default friendsReducer;