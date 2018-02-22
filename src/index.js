import React from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello";

import {createStore} from 'redux';
import connect from 'react-redux';
import count from './reducers';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const store = createStore(count);

const App = () => (
  <div style={styles}>
    <Hello/>
    <h2>This is just a test</h2>
  </div>
);

const render=()=>ReactDOM.render(
  <Hello 
  value={store.getState()}
  onIncrement={()=>store.dispatch({type: 'INCREMENT'})}
  onDecrement={()=>store.dispatch({type: 'DECREMENT' })}
  />
  , document.getElementById("root"));

render()
store.subscribe(render)