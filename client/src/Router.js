import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import Create from "./components/auth/Create";
import UpdateFUD from "./components/personalPortal/UpdateFUD";
import Navbar from "./components/misc/Navbar";

function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <UpdateFUD />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
