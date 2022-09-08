import { combineReducers } from "redux";

import TodoReducer from "./Todo/TodoSlice";


const rootReducer = combineReducers({
Todo: TodoReducer,

});

export default rootReducer;
