import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createBrowserHistory } from "history";
import { Provider } from "mobx-react";
import { RouterStore, syncHistoryWithStore } from "mobx-react-router";
import { Router } from "react-router";

// stores
import Navigation from "./stores/navigation.store";
import Contents from "./stores/contents.store";

const browserHistory = createBrowserHistory();
const routing = new RouterStore();
const history = syncHistoryWithStore(browserHistory, routing);

const stores = {
  routing,
  Navigation,
  Contents,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider {...stores}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
