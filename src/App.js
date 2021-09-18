import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/404";

export default function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}
