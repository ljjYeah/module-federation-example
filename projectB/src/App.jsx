import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import PageC from './pages/PageC';
import PageD from './pages/PageD';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/pageC">
        <PageC />
      </Route>
      <Route path="/pageD">
        <PageD />
      </Route>
      <Route path="/">
        <PageC />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
