import React from "react";
import styles from './styles'

import { withStyles, CssBaseline } from "@material-ui/core";
import { connect } from "react-redux";
import * as usuariosActions from "../../actions/usuariosActions";

const Nominaciones = (props: any) => {
  const { classes } = props;

  return (
      <React.Fragment>
        <CssBaseline />
        <div>
          <div style={{height: '50vh'}}>

          </div>
          <div style={{height: '50vh'}}>

          </div>
        </div>
      </React.Fragment>
  );
}

const mapStateToProps = (reducers: any) => {
  return reducers.usuariosReducer;
};

export default connect(
  mapStateToProps,
  usuariosActions
)(withStyles(styles)(Nominaciones));
