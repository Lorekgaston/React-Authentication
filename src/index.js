import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ContextProvider as Provider } from "./store/context";
import reducer, { intialState } from "./store/userReducer";

ReactDOM.render(
  <React.StrictMode>
    <Provider initialState={intialState} reducer={reducer}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
