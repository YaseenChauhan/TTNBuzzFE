import {combineReducers} from "redux";

import userReducer from './user.reducer';
import buzzReducer from './buzz.reducer';
import complaintReducer from './complaint.reducer';

const mainReducer = combineReducers({
    user: userReducer,
    buzz: buzzReducer,
    complaint: complaintReducer
})

export default mainReducer;