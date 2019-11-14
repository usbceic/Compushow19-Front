import React from "react";
import styles from './styles'
import { Typography, TextField, InputAdornment, Button } from '@material-ui/core'

import { Route, Redirect } from 'react-router'
import { withStyles, CssBaseline } from "@material-ui/core";
import { connect } from "react-redux";
import * as usuariosActions from "../../actions/usuariosActions";

import Search from '@material-ui/icons/Search'

import axios from 'axios'


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
const chapita = require('../../shared/assets/Portadas/chapita.png')

const princeso = require('../../shared/assets/Portadas/princeso.png')
const tukky = require('../../shared/assets/Portadas/tukky.png')


const Nominaciones = (props: any) => {
  const { classes } = props

  const [computistas, setComputistas] = React.useState([])

  const [categorias, setCategorias] = React.useState([])

  React.useEffect(() => {
    axios.get('https://compushow.link/v1/api/categories', { params: {}, headers: { 'Authorization': `Bearer ${props.user.token}` } })
      .then((res: any) => {
        setCategorias(res.data)
      })
      .catch((err: any) => {
        console.log(err)
      })
  }, [])

  React.useEffect(() => {
    axios.get('https://compushow.link/v1/api/users/all', { params: {}, headers: { 'Authorization': `Bearer ${props.user.token}` } })
      .then((res: any) => {
        setComputistas(res.data)
      })
      .catch((err: any) => {
        console.log(err)
      })
  }, [])

  const banner = (component: any, img: any) => <div>
    <div style={{
      height: '45vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5, backgroundImage: `url(${bannerImage})`, backgroundSize: '100% 100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <img src={`${img}`} className={classes.bannerAvatar} alt="" />
    </div>
    <div style={{ height: '55vh', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {component}
        <div style={{ width: '25%', marginTop: '60px' }}>
          <Button color="secondary" fullWidth style={{ textTransform: 'capitalize', background: '#FF0000', color: 'white' }}>Nominar</Button>
        </div>
      </div>
    </div>
  </div>

  const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'lightgray',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'lightgray',
        },
        '&:hover fieldset': {
          borderColor: 'lightgray',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#FE000A',
        },
      },
    },
  })(TextField);

  const vote1 = () => (
    <React.Fragment>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
        <CssTextField variant="outlined" placeholder="Nombre" fullWidth InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search style={{ color: 'gray' }} />
            </InputAdornment>
          ),
        }} />
      </div>
    </React.Fragment>
  )

  const vote2 = () => (
    <React.Fragment>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
        <div style={{ marginRight: '10px' }}>
          <CssTextField variant="outlined" placeholder="Nombre 1" fullWidth InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search style={{ color: 'gray' }} />
              </InputAdornment>
            ),
          }} />
        </div>
        <div>
          <CssTextField variant="outlined" placeholder="Nombre 2" fullWidth InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search style={{ color: 'gray' }} />
              </InputAdornment>
            ),
          }} />
        </div>
      </div>
    </React.Fragment>
  )

  return (
    <React.Fragment>
      <CssBaseline />
      {/* {['adoptado', 'cartoon', 'chancero', 'comadre', 'compadre', 'cono', 'falso', 'fitness', 'gordito', 'inmamable', 'love', 'papi', 'pro', 'team']} */}
      <Route
        path={`${props.match.path}/adoptado`}
        exact
        render={() =>
          banner(<React.Fragment>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography align="center" variant="h4" className={classes.h4}>Adoptado</Typography>
              <div className={classes.vote1Div} style={{ marginTop: '45px' }}>
                {vote1()}
              </div>
            </div>
          </React.Fragment>, adoptado)
        } />
      <Route
        path={`${props.match.path}/cartoon`}
        exact
        render={() =>
          banner(<React.Fragment>
            <Typography align="center" variant="h4" className={classes.h4}>Cartoon</Typography>
            <div className={classes.vote2Div} style={{ marginTop: '45px' }}>
              {vote2()}
            </div>
          </React.Fragment>, cartoon)
        } />
      <Route
        path={`${props.match.path}/chancero`}
        exact
        render={() =>
          banner(<React.Fragment>
            <Typography align="center" variant="h4" className={classes.h4}>Chancero</Typography>
            <div className={classes.vote1Div} style={{ marginTop: '45px' }}>
              {vote1()}
            </div>
          </React.Fragment>, chancero)
        } />
      <Route
        path={`${props.match.path}/comadre`}
        exact
        render={() =>
          banner(<React.Fragment>
            <Typography align="center" variant="h4" className={classes.h4}>Comadre</Typography>
            <div className={classes.vote1Div} style={{ marginTop: '45px' }}>
              {vote1()}
            </div>
          </React.Fragment>, comadre)
        } />
      <Route
        path={`${props.match.path}/compadre`}
        exact
        render={() =>
          banner(<React.Fragment>
            <Typography align="center" variant="h4" className={classes.h4}>Compadre</Typography>
            <div className={classes.vote1Div} style={{ marginTop: '45px' }}>
              {vote1()}
            </div>
          </React.Fragment>, compadre)
        } />
      <Route
        path={`${props.match.path}/cono`}
        exact
        render={() =>
          banner(<React.Fragment>
            <Typography align="center" variant="h4" className={classes.h4}>Cono</Typography>
            <div className={classes.vote1Div} style={{ marginTop: '45px' }}>
              {vote1()}
            </div>
          </React.Fragment>, cono)
        } />
      <Route
        path={`${props.match.path}/falso`}
        exact
        render={() =>
          banner(<React.Fragment>
            <Typography align="center" variant="h4" className={classes.h4}>Falso</Typography>
            <div className={classes.vote1Div} style={{ marginTop: '45px' }}>
              {vote1()}
            </div>
          </React.Fragment>, falso)
        } />
      <Route
        path={`${props.match.path}/fitness`}
        exact
        render={() =>
          banner(<React.Fragment>
            <Typography align="center" variant="h4" className={classes.h4}>Fitness</Typography>
            <div className={classes.vote1Div} style={{ marginTop: '45px' }}>
              {vote1()}
            </div>
          </React.Fragment>, fitness)
        } />
      <Route
        path={`${props.match.path}/gordito`}
        exact
        render={() =>
          banner(<React.Fragment>
            <Typography align="center" variant="h4" className={classes.h4}>Gordito</Typography>
            <div className={classes.vote1Div} style={{ marginTop: '45px' }}>
              {vote1()}
            </div>
          </React.Fragment>, gordito)
        } />
      <Route
        path={`${props.match.path}/inmamable`}
        exact
        render={() =>
          banner(<React.Fragment>
            <Typography align="center" variant="h4" className={classes.h4}>Inmamable</Typography>
            <div className={classes.vote1Div} style={{ marginTop: '45px' }}>
              {vote1()}
            </div>
          </React.Fragment>, inmamable)
        } />
      <Route
        path={`${props.match.path}/love`}
        exact
        render={() =>
          banner(<React.Fragment>
            <Typography align="center" variant="h4" className={classes.h4}>Love</Typography>
            <div className={classes.vote2Div} style={{ marginTop: '45px' }}>
              {vote2()}
            </div>
          </React.Fragment>, love)
        } />
      <Route
        path={`${props.match.path}/papi`}
        exact
        render={() =>
          banner(<React.Fragment>
            <Typography align="center" variant="h4" className={classes.h4}>Papi</Typography>
            <div className={classes.vote1Div} style={{ marginTop: '45px' }}>
              {vote1()}
            </div>
          </React.Fragment>, papi)
        } />
      <Route
        path={`${props.match.path}/pro`}
        exact
        render={() =>
          banner(<React.Fragment>
            <Typography align="center" variant="h4" className={classes.h4}>Pro</Typography>
            <div className={classes.vote1Div} style={{ marginTop: '45px' }}>
              {vote1()}
            </div>
          </React.Fragment>, pro)
        } />
      <Route
        path={`${props.match.path}/team`}
        exact
        render={() =>
          banner(<React.Fragment>
            <Typography align="center" variant="h4" className={classes.h4}>Team</Typography>
            <div className={classes.vote1Div} style={{ marginTop: '45px' }}>
              {vote1()}
            </div>
          </React.Fragment>, team)
        } />
      <Route
        path={`${props.match.path}/chapita`}
        exact
        render={() =>
          banner(<React.Fragment>
            <Typography align="center" variant="h4" className={classes.h4}>Chapita</Typography>
            <div className={classes.vote1Div} style={{ marginTop: '45px' }}>
              {vote1()}
            </div>
          </React.Fragment>, chapita)
        } />
      <Route
        path={`${props.match.path}/princeso`}
        exact
        render={() =>
          banner(<React.Fragment>
            <Typography align="center" variant="h4" className={classes.h4}>Princeso</Typography>
            <div className={classes.vote1Div} style={{ marginTop: '45px' }}>
              {vote1()}
            </div>
          </React.Fragment>, princeso)
        } />
      <Route
        path={`${props.match.path}/mami`}
        exact
        render={() =>
          banner(<React.Fragment>
            <Typography align="center" variant="h4" className={classes.h4}>Mami</Typography>
            <div className={classes.vote1Div} style={{ marginTop: '45px' }}>
              {vote1()}
            </div>
          </React.Fragment>, tukky)
        } />
      <Route
        path={`${props.match.path}/master`}
        exact
        render={() =>
          banner(<React.Fragment>
            <Typography align="center" variant="h4" className={classes.h4}>Master</Typography>
            <div className={classes.vote1Div} style={{ marginTop: '45px' }}>
              {vote1()}
            </div>
          </React.Fragment>, tukky)
        } />
      <Route
        path={`${props.match.path}/tukky`}
        exact
        render={() =>
          banner(<React.Fragment>
            <Typography align="center" variant="h4" className={classes.h4}>Tukky</Typography>
            <div className={classes.vote1Div} style={{ marginTop: '45px' }}>
              {vote1()}
            </div>
          </React.Fragment>, tukky)
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
