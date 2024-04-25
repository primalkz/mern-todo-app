import React from "react";
import "../../style.css";
import Register from "./Register";
import Login from "./Login";
import Success from "./Success";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Auth = ({ updateToken, updateUsername }) => {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/success">
            <Success />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login updateToken={updateToken} />
          </Route>
          <Route path="/">
            <Login updateToken={updateToken} updateUsername={updateUsername} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Auth;
