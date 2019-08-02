import React from "react";
import ReactDOM from 'react-dom'
// import reducers from "./App/Reducers/index";
// import {createStore, applyMiddleware} from "redux";
// import { createLogger } from "redux-logger";
// import thunk from "redux-thunk";
import App from "./components/app";
import "./index.scss";

function render() {
  ReactDOM.render(<App />, document.getElementById("root"));
}
render();

// import reducers from "./App/reducers.js";

// let logger = createLogger();

// const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk, logger));
