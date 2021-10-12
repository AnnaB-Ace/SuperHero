import React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import "./App.css";
import mainRoutes from "./AppRouter";

function App() {
  return (
    <div className="container-fluid containerGlobal">
      <BrowserRouter>
        <React.Suspense
          fallback={<div style={{ color: "white" }}>Cargando ...</div>}
        >
          <Switch>
            {mainRoutes.map((route, i) => (
              <Route
                key={i}
                path={route.path}
                component={route.component}
                name={route.name}
                exact={route.exact}
              />
            ))}

            <Redirect to="/home" />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
