import {counterReducer} from "./counterReducer";
import {authReducer} from "./authReducer";
import {combineReducers} from "redux";

export const rootReducer = combineReducers({
    Counter: counterReducer,
    AuthReducer: authReducer,
})