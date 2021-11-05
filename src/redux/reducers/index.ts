import { combineReducers } from "redux";
import {userReducer, errorReducer} from "./userReducer";

const reducers = combineReducers({
    user: userReducer,
    error: errorReducer,
});

export default reducers

export type State = ReturnType<typeof reducers>