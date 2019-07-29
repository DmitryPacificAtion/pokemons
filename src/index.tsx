import React from "react";
import {render} from "react-dom";
// import reducers from "./App/Reducers/index";
// import {createStore, applyMiddleware} from "redux";
// import { createLogger } from "redux-logger";
// import thunk from "redux-thunk";
import App from "./components/app";

(function() {
  const element = document.createElement("div");
  element.setAttribute("id", "root");
  document.body.appendChild(element);
})();

render(<App />, document.getElementById("root"));

// import reducers from "./App/reducers.js";

// let logger = createLogger();

// const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk, logger));
