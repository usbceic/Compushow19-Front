import React from "react";
import styles from './styles'

import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'

import { withStyles, CssBaseline, Typography, Button } from "@material-ui/core";
import { connect } from "react-redux";
import * as usuariosActions from "../../actions/usuariosActions";

const homeImage = require('../../shared/assets/Home.png')
const compushowLogo = require('../../shared/assets/compushowLogo.svg')

const Home = (props: any) => {
  const { classes } = props;

  if (!props.user.token) {
    return <Redirect to='/login' />
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <div style={{
        width: '100vw', height: '100vh', backgroundImage: `url(${homeImage})`, backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <div style={{ height: '70vh', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '60%' }}>
            <Typography variant="h4" style={{ width: '100%' }} align="center" className={classes.h4}>COMPUTISTA, BIENVENIDO AL</Typography>
            <br />
            <div style={{ width: '100%', textAlign: 'center' }}>
              <img src={`${compushowLogo}`} alt="" className={classes.compushowLogo} />
            </div>
            <Typography variant="h4" style={{ width: '100%' }} align="center" className={classes.h4}>LA EPOCA DE LAS MOTOCICLETAS, LAS CHAQUETAS DE CUERO, EL GEL EN EL CABELLO Y EL BAILE.</Typography>
            <br />
            <Typography variant="h4" style={{ width: '100%' }} align="center" className={classes.h4}>EN ESTE MOMENTO, NECESITAMOS DE TU AYUDA PARA QUE NOS DIGAS QUIENES SON LOS PROSPECTOS A SER LOS PROTAGONISTAS DE NUESTRO MAGNO EVENTO.</Typography>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Link to="/nominaciones">
                <Button variant="contained" style={{ color: 'white', textTransform: 'capitalize', background: '#FF0000', width: '300px', height: '40px', marginTop: '60px' }}>Ir A Nominar</Button>
              </Link>
            </div>
          </div>
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
)(withStyles(styles)(Home));
