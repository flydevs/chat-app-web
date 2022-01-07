import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import "./App.scss";
import { AuthProvider, AuthContext } from "./stores/AuthContext";
import BackDrop from "./components/BackDrop/Backdrop";
import LoginPage from "./pages/Login";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

function App(){
  return(
    <AuthProvider><Everything/></AuthProvider>
  )
}

function Everything() {
  let logged = useContext(AuthContext).logged 
  return (
    <Router>
      <div className="wrapper">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
          <LoginPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
