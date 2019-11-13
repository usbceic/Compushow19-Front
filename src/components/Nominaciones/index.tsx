import React from "react";
import styles from './styles'
import { Typography } from '@material-ui/core'

import { Switch, Route, RouteComponentProps, Redirect } from 'react-router'
import { withStyles, CssBaseline, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import * as usuariosActions from "../../actions/usuariosActions";

const Nominaciones = (props: any) => {


  const banner = (component: any) => <div>
  <div style={{height: '40vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'blue', zIndex: 5}}>
      <div className={classes.avatarBanner} />
  </div>
  <div style={{height: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px'}}>
    <div>
    <Typography variant="h6" className={classes.h6}>{component}</Typography>
    </div>
  </div>
</div>

console.log(props)


  return (
      <React.Fragment>
        <CssBaseline />
        <Route
          path={`${props.match.path}/gordito`}
          exact
          render={() =>
            banner(<Typography>gordito</Typography>)
          }/>
          <Route
          path={`${props.match.path}/love`}
          exact
          render={() =>
            banner(<Typography>love</Typography>)
          }/>
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
