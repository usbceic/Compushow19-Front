import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./Navbar/Menu";
import Usuarios from "./Usuarios";
import Login from "./Login";
const Tareas = () => <div>Tareas</div>;

const App = () => (
  <BrowserRouter>
    <Menu />
    <div style={{ height: '100vh', overflow: 'auto' }}>
      <Route exact path="/" component={Usuarios} />
      <Route exact path="/tareas" component={Tareas} />
      <Route exact path="/login" component={Login} />
    </div>
  </BrowserRouter>
);

export default App;
