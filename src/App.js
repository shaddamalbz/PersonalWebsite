import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import NotFound from "./pages/404";

export default function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}
