import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./core/store/store";
import { createBrowserHistory, createHashHistory } from "history";
import { ConnectedRouter } from "./core/components/connected-router";
import { PageRoutes } from "./pages/page-routes";
import "./style.css";
import { environment } from "./environments/environment";

const createHistory = () => {
  if (environment.useHash) {
    return createHashHistory();
  } else {
    return createBrowserHistory();
  }
};

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={createHistory()}>
      <PageRoutes />
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
