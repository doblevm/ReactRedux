import React from "react";
// importing the value of the STATE
import { useSelector, useDispatch } from "react-redux";
// Importing the ACTIONS
import { increment, decrement } from "../actions";

function App() {
  const counter = useSelector(state => state.counterReducer);
  const islogged = useSelector(state => state.loggerReducer);
  //
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {islogged ? <h3>You are Logg In</h3> : ""}
    </div>
  );
}

export default App;
