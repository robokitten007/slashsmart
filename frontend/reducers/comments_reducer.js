import {RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions'

const commentsReducer = (state ={},action)=>{
Object.freeze(state)
let newState = Object.assign({}, state)
    switch(action.type){
        case RECEIVE_COMMENTS:
            return action.commentsReducer;
        case RECEIVE_COMMENT:
            newState[action.commentsReducer.id] = action.comment
            return newState;
        case REMOVE_COMMENT:
            delete newState[action.comment.id]
            return newState
        default:
            return state;
    }

}

export default commentsReducer;