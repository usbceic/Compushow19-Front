import React from "react";
import styles from './styles'
import { Typography, TextField } from '@material-ui/core'

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

  const vote1 = () => (
    <React.Fragment>
    <div style={{display: 'flex'}}>
      <div style={{marginRight: '10px'}}>
      <TextField fullWidth />
      </div>
      <div>
      <TextField fullWidth />
      </div>
    </div>
    </React.Fragment>
  )

  const vote2 = (
    <React.Fragment>
    <div style={{display: 'flex'}}>
      <div style={{marginRight: '10px'}}>
      <TextField fullWidth />
      </div>
      <div>
      <TextField fullWidth />
      </div>
    </div>
    </React.Fragment>
  )

  return (
    <React.Fragment>
      <CssBaseline />
      <Route
        path={`${props.match.path}/adoptado`}
        exact
        render={() =>
          banner(<React.Fragment>

          </React.Fragment>, adoptado)
        } />
      <Route
        path={`${props.match.path}/cartoon`}
        exact
        render={() =>
          banner(<React.Fragment>
            
          </React.Fragment>, cartoon)
        } />
      <Route
        path={`${props.match.path}/chancero`}
        exact
        render={() =>
          banner(<React.Fragment>
            
            </React.Fragment>, chancero)
        } />
      <Route
        path={`${props.match.path}/comadre`}
        exact
        render={() =>
          banner(<React.Fragment>
            
            </React.Fragment>, comadre)
        } />
      <Route
        path={`${props.match.path}/compadre`}
        exact
        render={() =>
          banner(<React.Fragment>
            
            </React.Fragment>, compadre)
        } />
      <Route
        path={`${props.match.path}/cono`}
        exact
        render={() =>
          banner(<React.Fragment>
            
            </React.Fragment>, cono)
        } />
      <Route
        path={`${props.match.path}/falso`}
        exact
        render={() =>
          banner(<React.Fragment>
            
            </React.Fragment>, falso)
        } />
      <Route
        path={`${props.match.path}/fitness`}
        exact
        render={() =>
          banner(<React.Fragment>
            
            </React.Fragment>, fitness)
        } />
      <Route
        path={`${props.match.path}/gordito`}
        exact
        render={() =>
          banner(<React.Fragment>
            
            </React.Fragment>, gordito)
        } />
      <Route
        path={`${props.match.path}/inmamable`}
        exact
        render={() =>
          banner(<React.Fragment>
            
            </React.Fragment>, inmamable)
        } />
      <Route
        path={`${props.match.path}/love`}
        exact
        render={() =>
          banner(<React.Fragment>
            
            </React.Fragment>, love)
        } />
      <Route
        path={`${props.match.path}/papi`}
        exact
        render={() =>
          banner(<React.Fragment>
            
            </React.Fragment>, papi)
        } />
      <Route
        path={`${props.match.path}/pro`}
        exact
        render={() =>
          banner(<React.Fragment>
            
            </React.Fragment>, pro)
        } />
      <Route
        path={`${props.match.path}/team`}
        exact
        render={() =>
          banner(<React.Fragment>
            
            </React.Fragment>, team)
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
