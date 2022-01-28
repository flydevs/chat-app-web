import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import "./App.scss";
import {Provider} from 'react-redux'
import store from './stores/reduxStore'
import Login from "./pages/Login";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="wrapper">
          <Switch>
            <Route path="/">
              <Login />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}
export default App;
