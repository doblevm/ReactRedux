import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import { createStore } from "redux";

// STORE --> Globalized STADE

// ACTION --> it will always be a function that returns an object
// Action INCREMENT
const increment = () => {
  return {
    type: "INCREMENT"
  };
};
// Action DECREMENT
const decrement = () => {
  return {
    type: "DECREMENT"
  };
};

// REDUCER --> depending which action was take this is gonna change the STORE
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

// Let's create a store --> let store = createStore(reducer)
let store = createStore(counter);

// display in the console
store.subscribe(() => console.log(store.getState()));

// DISPATCH --> in this instance it's execute the ACTION
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());

ReactDOM.render(<App />, document.getElementById("root"));
