import { combineReducers } from "redux";
import { operationsReducer } from "./todoapp/recuders/operation";

export const rootReducer = combineReducers({
    operationsReducer,
})