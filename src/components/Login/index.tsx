import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import styles from './styles'
import Typography from '@material-ui/core/Typography'

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

  var config = {
    headers: { 'Content-Type': 'application/json', 'Authorization': "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImEwNjgyNGI3OWUzOTgyMzk0ZDVjZTdhYzc1YmY5MmNiYTMwYTJlMjUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNDk3MTY2MDg5MTIwLXZnYTNucWF0MGo0bTZjcmcybjVtbzUwNjBqM2dldWdrLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNDk3MTY2MDg5MTIwLXZnYTNucWF0MGo0bTZjcmcybjVtbzUwNjBqM2dldWdrLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA2MTE3NDg5NTUxOTM2NDU3OTQ5IiwiaGQiOiJ1c2IudmUiLCJlbWFpbCI6IjE1LTEwNDYwQHVzYi52ZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiN09GaDJYWmpoVGJHUl8yS1FsSUdadyIsIm5hbWUiOiJQZWRybyBTYW11ZWwgZGUgTmF6YXJldGggRmFndW5kZXogQ2FtYXJhIiwicGljdHVyZSI6Imh0dHBzOi8vbGg1Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tNThVZ2pOdVJVWG8vQUFBQUFBQUFBQUkvQUFBQUFBQUFBQUEvQUNIaTNyZEViaFZzYlN0QzV2WUdsMWFVeXB4MmVodnB3QS9zOTYtYy9waG90by5qcGciLCJnaXZlbl9uYW1lIjoiUGVkcm8gU2FtdWVsIGRlIE5hemFyZXRoIiwiZmFtaWx5X25hbWUiOiJGYWd1bmRleiBDYW1hcmEiLCJsb2NhbGUiOiJlcyIsImlhdCI6MTU3MzY5NTg4MiwiZXhwIjoxNTczNjk5NDgyLCJqdGkiOiIxZTlmMmE2NzRlOTM1N2YzYjkwMTVlMmIzMTE5YzFlNGNhZTc5OWM2In0.CinnA4TnxpwE-STD_Z49BAuhsMA4hRSzDtVv7pyzfgtheLB90Pzlge5wyrR3n3c3f_hGl5czhuI8FbsO9cL0mw_ycyylKLbjN-eLGIsdjkmBjez6Qiz48uSRiA82iAnHty9VnEOV7UutYF7x9FHWbRSAtIBjRO0gAInVXlTXFCD9lKYdR0bF79mRAF0lRkItE8WILEoDBxNiMnIUDBV3_iJOnjIkrCXpfRmJlPNO4bZ70SwD12QwdURHO3hZiKLKGGThcYldjhstVVALM2OXSHIQYi2UWiF-OfU6qcE7RGW--SJCABrQpuORvm4hdz1JMOLPYd2IIAXjBVU8kHItng" }
  }

  React.useEffect(() => {
    axios.get('https://compushow.link/v1/api/users/me', { headers: { Authorization: "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImRiMDJhYjMwZTBiNzViOGVjZDRmODE2YmI5ZTE5NzhmNjI4NDk4OTQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNDk3MTY2MDg5MTIwLXZnYTNucWF0MGo0bTZjcmcybjVtbzUwNjBqM2dldWdrLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNDk3MTY2MDg5MTIwLXZnYTNucWF0MGo0bTZjcmcybjVtbzUwNjBqM2dldWdrLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA2MTE3NDg5NTUxOTM2NDU3OTQ5IiwiaGQiOiJ1c2IudmUiLCJlbWFpbCI6IjE1LTEwNDYwQHVzYi52ZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoicHB1ZHhDdHp3VzlQaE8tbnFDbmEzQSIsIm5hbWUiOiJQZWRybyBTYW11ZWwgZGUgTmF6YXJldGggRmFndW5kZXogQ2FtYXJhIiwicGljdHVyZSI6Imh0dHBzOi8vbGg1Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tNThVZ2pOdVJVWG8vQUFBQUFBQUFBQUkvQUFBQUFBQUFBQUEvQUNIaTNyZEViaFZzYlN0QzV2WUdsMWFVeXB4MmVodnB3QS9zOTYtYy9waG90by5qcGciLCJnaXZlbl9uYW1lIjoiUGVkcm8gU2FtdWVsIGRlIE5hemFyZXRoIiwiZmFtaWx5X25hbWUiOiJGYWd1bmRleiBDYW1hcmEiLCJsb2NhbGUiOiJlcyIsImlhdCI6MTU3MzY5NzIzOSwiZXhwIjoxNTczNzAwODM5LCJqdGkiOiIxMTI0ODk0MDZjNGI2NTljMGMwZDI5MDFkZTk1ZDg0N2E4ZTkxOGM0In0.pVQB6X9eQ81mSK1CT52lnb-FLvnpA6Ncw4A4-7KOPxdFPmqAOWxi72C0g2frtR1Ot46AKYBHNQOM9zXEyP9f5Wl4GvO9uboV93TPZgpFhtCQfDdRy3zfdaEtA-V27LD0UvIR5ReeTKx2BPXqy7YVoUSK4r7LxyCBd-KSswWwp1tpu3sQ-0zwk4WdL8ZAhmCziEY-kORwzdIXyIB1Lc25l3OdhY6KrUkoln6JTNppAMsoOpIAH9qK8eVZDzeX7-lG4m5zN_2zTpkMVEszAPKAPxU3mO9M4rZh_4Qkpo2N0T_j6euYwn9ylcj7iY_MPw2u9ojEHg70AkCslYL3wjTlMg" } }).then((res: any) => console.log(res))
      .catch((err: any) => console.log(err))
  }, [])

  const onSignUpSuccess = (response: any) => {
    console.log(response);
    // enqueueSnackbar('Login successfull', { variant: 'success' })
  }

  const onSignUpFailure = (response: any) => {
    enqueueSnackbar('Login failure', { variant: 'error' })
  }

  return (
    <Container component="main" maxWidth="sm" style={{ height: 'calc(80vh - 60px)', display: 'flex', alignItems: 'center', position: 'relative' }} >
      <CssBaseline />
      <div className={classes.paper} style={{ width: '100%' }}>
        <div style={{ width: '100%', textAlign: 'center' }}>
          <img src={`${compushowLogo}`} className={classes.compushowLogo} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <Typography variant="h5" align="center" className={classes.h5}>ESTE AÑO INICIA SESIÓN CON TU USBID</Typography>
        </div>
        <GoogleLogin
          clientId="497166089120-vga3nqat0j4m6crg2n5mo5060j3geugk.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={onSignUpSuccess}
          onFailure={onSignUpFailure}
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
