import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import styles from './styles'
import Typography from '@material-ui/core/Typography'

import { Redirect } from 'react-router'

import { withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import * as usuariosActions from "../../actions/usuariosActions";

import { GoogleLogin } from 'react-google-login';
import { useSnackbar } from 'notistack'

import axios from 'axios'

const compushowLogo = require('../../shared/assets/compushowLogo.svg')

const SignIn = (props: any) => {
  const { classes } = props;
  const { enqueueSnackbar } = useSnackbar()

  if (props.user.token) {
    return <Redirect to="/home" />
  }

  const onSignUpSuccess = (response: any) => {
    axios.get('https://compushow.link/v1/api/users/me', { params: {}, headers: { 'Authorization': `Bearer ${response.tokenId}` } })
      .then((res: any) => {
        if (res.status === 200) {
          props.dispatchUser({ profile: res.data, token: response.tokenId })
          if (response.tokenId !== props.user.token) props.updateToken(response.tokenId)
          enqueueSnackbar('Bienvenido al CompuShow 2019', { variant: 'success' })
          return props.history.push('/home')
        }
      })
      .catch((err: any) => {
        enqueueSnackbar('Debes usar tu correo @usb.ve (solo computistas)', { variant: 'error' })
      })
  }

  const onSignUpFailure = (response: any) => {
    enqueueSnackbar('Ha ocurrido un error en el login, ¡inténtalo de nuevo!', { variant: 'error' })
  }

  return (
    <Container component="main" maxWidth="sm" style={{ height: 'calc(80vh - 60px)', display: 'flex', alignItems: 'center', position: 'relative' }} >
      <CssBaseline />
      <div className={classes.paper} style={{ width: '100%' }}>
        <div style={{ width: '100%', textAlign: 'center' }}>
          <img src={`${compushowLogo}`} alt="" className={classes.compushowLogo} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <Typography variant="h5" align="center" className={classes.h5}>¡Entra con tu USBID!</Typography>
        </div>
        <GoogleLogin
          clientId="497166089120-vga3nqat0j4m6crg2n5mo5060j3geugk.apps.googleusercontent.com"
          buttonText="Iniciar Sesión"
          onSuccess={onSignUpSuccess}
          onFailure={onSignUpFailure}
          cookiePolicy={'single_host_origin'}
        />
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
