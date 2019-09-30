import * as React from "react";
import { connect } from "react-redux";
import * as usuariosActions from "../../actions/usuariosActions";
import { Button, CssBaseline, withStyles } from "@material-ui/core";
import styles from "./styles";

const Usuarios = (props: any) => {
  const { classes } = props;
  React.useEffect(() => {
    props.traerTodos();
  }, []);

  console.log(props);

  return (
    <React.Fragment>
      <CssBaseline />
      <Button color="primary" variant="contained">
        Submit
      </Button>
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
              <td className={classes.test1}>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

const mapStateToProps = (reducers: any) => {
  return reducers.usuariosReducer;
};

export default connect(
  mapStateToProps,
  usuariosActions
)(withStyles(styles)(Usuarios));
