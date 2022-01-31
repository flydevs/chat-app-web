import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import "./App.scss";
import {connect} from 'react-redux'
import Login from "./pages/Login";
import ProtectedRoute from "./components/protectedRoute";

function App({auth} : any) {
  return (

      <Router>
        <div className="wrapper">
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/home">
              <ProtectedRoute path="/home" auth={auth} component={Home}></ProtectedRoute>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

const mapStateToProps = (state: any) => ({
  auth: state.auth
})
export default connect(mapStateToProps)(App);
