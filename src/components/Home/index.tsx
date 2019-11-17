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
        width: '100vw', height: '100vh', paddingTop: '30px', backgroundImage: `url(https://compushow.s3.us-east-2.amazonaws.com/backgrounds/Home.png)`, backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <div style={{ height: '70vh', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div className={classes.homeDiv}>
            <Typography variant="h3" style={{ width: '100%' }} align="center" className={classes.h3}>Computista, bienvenido al</Typography>
            <br />
            <div style={{ width: '100%', textAlign: 'center', marginTop: '15px', marginBottom: '15px' }}>
              <img src={`${compushowLogo}`} alt="" className={classes.compushowLogo} />
            </div>
            <div style={{ display: 'flex', height: '45px', justifyContent: 'center' }}>
              <Link style={{ textDecoration: 'none' }} to="/nominaciones">
                <Button variant="contained" style={{ color: 'white', textTransform: 'capitalize', background: '#FF0000', width: '300px', height: '40px', marginTop: '20px' }}>Ver Categorías</Button>
              </Link>
            </div>
            <Typography variant="h4" style={{ width: '100%', marginTop: '60px' }} align="center" className={classes.h4}>Es la época de las motocicletas, las chaquetas de cuero, el gel en el cabello y el baile por doquier</Typography>
            <br />
            <Typography variant="h4" style={{ width: '100%' }} align="center" className={classes.h4}>¡Necesitamos de tu ayuda para conocer quiénes serán los protagonistas de nuestro magno evento!</Typography>
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
