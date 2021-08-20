
import {RECEIVE_BILLS, RECEIVE_BILL, REMOVE_BILL} from '../actions/bill_actions'

const billsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_BILLS:
            return action.bills
        case RECEIVE_BILL:
            // return {[action.bill.id]: action.bill}
            newState[action.bill.id] = action.bill
            return newState
        case REMOVE_BILL:
            delete newState[action.id]
            return newState;
        default:
            return state;
    }
}

export default billsReducer