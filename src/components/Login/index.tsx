import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import styles from './styles'
import Typography from '@material-ui/core/Typography'

import { withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import * as usuariosActions from "../../actions/usuariosActions";

// import GoogleLogin from 'react-google-login';
import { GoogleLogin } from 'react-google-login';

const compushowLogo = require('../../shared/assets/compushowLogo.svg')

const SignIn = (props: any) => {
  const { classes } = props;

  const responseGoogle = (response: any) => {
    console.log(response);
  }

  return (
    <Container component="main" maxWidth="sm" style={{ height: 'calc(80vh - 60px)', display: 'flex', alignItems: 'center', position: 'relative' }} >
      <CssBaseline />
      <div className={classes.paper}>
        <div style={{ width: '100%', textAlign: 'center' }}>
          <img src={`${compushowLogo}`} className={classes.compushowLogo} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <Typography variant="h5" align="center" className={classes.h5}>ESTE AÑO INICIA SESIÓN CON TU USBID</Typography>
        </div>
        <GoogleLogin
          clientId="497166089120-vga3nqat0j4m6crg2n5mo5060j3geugk.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />,
      {document.getElementById('googleButton')}
      </div>
    </Container>
  );
}

const mapStateToProps = (reducers: any) => {
  return reducers.usuariosReducer;
};

export default connect(
  mapStateToProps,
  usuariosActions
)(withStyles(styles)(SignIn));
