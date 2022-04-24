import { combineReducers, createStore } from "redux";
import { numSumRed } from "./reducer";


const reducer = combineReducers({
    nobat : numSumRed
})

export const store = createStore(reducer)