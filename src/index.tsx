import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';

// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import rootReducer from './reducer';

// import reducers from "./App/Reducers/index";
// import { createLogger } from "redux-logger";
// import thunk from "redux-thunk";
import App from './components/app';

// const store = createStore<any, any, any, any>(rootReducer);

// import reducers from "./App/reducers.js";

// let logger = createLogger();

// const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk, logger));

// import Projects from './Components/Projects';

// const App = () => <Projects />;

ReactDOM.render(
  // <Provider store={store}>
    <App />,
  // </Provide>,
  document.getElementById('root') as HTMLElement);
