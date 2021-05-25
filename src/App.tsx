import React from "react";
import { Route, Switch } from "react-router";
import HomePage from "./components/HomePage";
import "./App.style.scss";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route>404 page not found</Route>
    </Switch>
  );
}

export default App;
