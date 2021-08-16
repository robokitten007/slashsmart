import { combineReducers } from 'redux';

import modal from './modal_reducer';
import singleBillReducer from './singlebill_reducer'; 

export default combineReducers({
    
  modal,
  singleBill: singleBillReducer
});
