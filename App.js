import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import SignedOutLinks from "./components/layout/SignedOutLinks";
import Signin from "./components/auth/Signin";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <SignedOutLinks />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/login" component={Signin} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
