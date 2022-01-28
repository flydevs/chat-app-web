import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import "./App.scss";
import {Provider} from 'react-redux'
import store from './stores/reduxStore'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="wrapper">
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}
export default App;
