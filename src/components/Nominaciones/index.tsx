import React from "react";
import styles from './styles'
import { Typography } from '@material-ui/core'

import { withStyles, CssBaseline } from "@material-ui/core";
import { connect } from "react-redux";
import * as usuariosActions from "../../actions/usuariosActions";

const Nominaciones = (props: any) => {

  return (
      <React.Fragment>
        <CssBaseline />
        <div style={{height: '40px'}}>
          <Typography>asfasfa</Typography>
        </div>
        <div>
          <div style={{height: '40vh', width: '100%', background: 'blue'}}>
            <div style={{width: '20px', height: '20px'}}>
              aasafas
            </div>
          </div>
          <div style={{height: '60vh'}}>

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
