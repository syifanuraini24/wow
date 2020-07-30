import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles/style.css";

import Home from "./components/home";
import Login from "./components/login";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
