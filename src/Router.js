import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Loggingbar from "./components/Loggingbar";
import Page from "./components/Page";

function Router() {
  return (
    <BrowserRouter>
      <Loggingbar />
      <Routes>
        <Route exact path="/" element={<Page />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
