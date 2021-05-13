import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import PageA from './pages/PageA';
import PageB from './pages/PageB';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/pageA">
        <PageA />
      </Route>
      <Route path="/pageB">
        <PageB />
      </Route>
      <Route path="/">
        <PageA />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
