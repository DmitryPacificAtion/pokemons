import React from "react";
import {render} from "react-dom";
// import App from "./App/App.jsx.js";
// import reducers from "./App/Reducers/index";
// import {createStore, applyMiddleware} from "redux";
// import { createLogger } from "redux-logger";
// import thunk from "redux-thunk";
import App from "./App/app";
// import reducers from "./App/reducers.js";

// let logger = createLogger();

// const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk, logger));

render(<App/>, document.getElementById("root"));