import { combineReducers } from "redux";

import sessionErrorsReducer from "./session_errors_reducer";
import friendErrorsReducer from "./friend_errors_reducer";
import billErrorsReducer from "./bills_errors_reducer";
const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  friend: friendErrorsReducer,
  bill: billErrorsReducer
});

export default errorsReducer;

