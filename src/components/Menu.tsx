import * as React from "react";
import { Link } from "react-router-dom";

const Menu = (props: any) => (
  <nav id="menu">
    <Link to="/">Usuarios</Link>
    <Link to="/tareas">Tareas</Link>
    <Link to="/login">Login</Link>
  </nav>
);

export default Menu;
