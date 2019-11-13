import React from "react";
import styles from './styles'
import { Typography } from '@material-ui/core'

import { Route } from 'react-router'
import { withStyles, CssBaseline } from "@material-ui/core";
import { connect } from "react-redux";
import * as usuariosActions from "../../actions/usuariosActions";


const bannerImage = require('../../shared/assets/Main.png')
const adoptado = require('../../shared/assets/Portadas/adoptado.png')
const cartoon = require('../../shared/assets/Portadas/cartoon.png')
const chancero = require('../../shared/assets/Portadas/chancero.png')
const comadre = require('../../shared/assets/Portadas/comadre.png')
const compadre = require('../../shared/assets/Portadas/compadre.png')
const cono = require('../../shared/assets/Portadas/cono.png')
const falso = require('../../shared/assets/Portadas/falso.png')
const fitness = require('../../shared/assets/Portadas/fitness.png')
const gordito = require('../../shared/assets/Portadas/gordito.png')
const inmamable = require('../../shared/assets/Portadas/inmamable.png')
const love = require('../../shared/assets/Portadas/love.png')
const papi = require('../../shared/assets/Portadas/papi.png')
const pro = require('../../shared/assets/Portadas/pro.png')
const team = require('../../shared/assets/Portadas/team.png')

const Nominaciones = (props: any) => {
  const { classes } = props

  const banner = (component: any, img: any) => <div>
    <div style={{ height: '45vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5, backgroundImage: `url(${bannerImage})` }}>
      <img src={`${img}`} style={{ maxWidth: '216px', maxHeight: '216px' }} alt="" />
    </div>
    <div style={{ height: '55vh', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
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
        path={`${props.match.path}/adoptado`}
        exact
        render={() =>
          banner(<Typography>adoptado</Typography>, adoptado)
        } />
      <Route
        path={`${props.match.path}/cartoon`}
        exact
        render={() =>
          banner(<Typography>cartoon</Typography>, cartoon)
        } />
      <Route
        path={`${props.match.path}/chancero`}
        exact
        render={() =>
          banner(<Typography>chancero</Typography>, chancero)
        } />
      <Route
        path={`${props.match.path}/comadre`}
        exact
        render={() =>
          banner(<Typography>comadre</Typography>, comadre)
        } />
      <Route
        path={`${props.match.path}/compadre`}
        exact
        render={() =>
          banner(<Typography>compadre</Typography>, compadre)
        } />
      <Route
        path={`${props.match.path}/cono`}
        exact
        render={() =>
          banner(<Typography>cono</Typography>, cono)
        } />
      <Route
        path={`${props.match.path}/falso`}
        exact
        render={() =>
          banner(<Typography>falso</Typography>, falso)
        } />
      <Route
        path={`${props.match.path}/fitness`}
        exact
        render={() =>
          banner(<Typography>fitness</Typography>, fitness)
        } />
      <Route
        path={`${props.match.path}/gordito`}
        exact
        render={() =>
          banner(<Typography>gordito</Typography>, gordito)
        } />
      <Route
        path={`${props.match.path}/inmamable`}
        exact
        render={() =>
          banner(<Typography>inmamable</Typography>, inmamable)
        } />
      <Route
        path={`${props.match.path}/love`}
        exact
        render={() =>
          banner(<Typography>love</Typography>, love)
        } />
      <Route
        path={`${props.match.path}/papi`}
        exact
        render={() =>
          banner(<Typography>papi</Typography>, papi)
        } />
      <Route
        path={`${props.match.path}/pro`}
        exact
        render={() =>
          banner(<Typography>pro</Typography>, pro)
        } />
      <Route
        path={`${props.match.path}/team`}
        exact
        render={() =>
          banner(<Typography>team</Typography>, team)
        } />
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
