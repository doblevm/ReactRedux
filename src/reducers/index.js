import loggedReducer from "./isLogged";
import counterReducer from "./counter";
// when you have more than one reducer you have to combine them
import { combineReducers } from "redux";

const allReducer = combineReducers({
  loggedReducer,
  counterReducer
});

export default allReducer;
