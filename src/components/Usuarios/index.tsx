import * as React from "react";
import { connect } from "react-redux";
import * as usuariosActions from "../../actions/usuariosActions";

const Usuarios = (props: any) => {
  React.useEffect(() => {
    props.traerTodos();
  }, []);

  console.log(props);

  return (
    <div>
      <table className="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>
          {props.usuarios.map((item: any, i: number) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (reducers: any) => {
  return reducers.usuariosReducer;
};

export default connect(
  mapStateToProps,
  usuariosActions
)(Usuarios);
