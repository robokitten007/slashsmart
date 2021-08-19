import {RECEIVE_BILL_ERRORS, CLEAR_BILL_ERRORS} from '../actions/bill_actions'

const billErrorsReducer = (state = [], action) => {
    
    switch (action.type) {
    case RECEIVE_BILL_ERRORS:
      return action.errors;
    case CLEAR_BILL_ERRORS:
      return [];
    default:
      return state;
  }
};

export default billErrorsReducer;