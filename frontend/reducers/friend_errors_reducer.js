import {
  FRIEND_ERRORS,
  CLEAR_FRIEND_ERRORS,
  RECEIVE_FRIEND,
  REMOVE_FRIEND
} from '../actions/friend_actions';

const friendErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case FRIEND_ERRORS:
      return action.errors;
    case CLEAR_FRIEND_ERRORS:
      return [];
    case RECEIVE_FRIEND:
      return [];
    case REMOVE_FRIEND:
      return [];
    default:
      return state;
  }
};

export default friendErrorsReducer;