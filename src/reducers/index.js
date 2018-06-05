import { combineReducers } from "redux"
import { routerReducer } from 'react-router-redux'
import counter from "./counterReducer"
import toggle from "./toggleReducer"

const thereducer = combineReducers({
  counter,
  toggle,
  routing: routerReducer 
});

export default thereducer;