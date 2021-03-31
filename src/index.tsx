import ReactDom from "react-dom";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./App";
import About from "./About";

function RootRoute() {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/about" component={About}></Route>
      </Switch>
    </BrowserRouter>
  );
}

ReactDom.render(<RootRoute />, document.querySelector("#root"));