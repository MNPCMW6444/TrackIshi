import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Loggingbar from "./components/Loggingbar";
import Page from "./components/Page";
import Inforole from "./components/info/Inforole";

function Router() {
  return (
    <BrowserRouter>
      <Loggingbar />
      <Switch>
        <Route exact path="/">
          <Page />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/info/role">
          <Inforole />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
