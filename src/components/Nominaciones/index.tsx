import React from "react";
import styles from './styles'
import {
  Typography, TextField, InputAdornment, Button
} from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete';

import { Route } from 'react-router'
import { withStyles, CssBaseline } from "@material-ui/core";
import { connect } from "react-redux";
import * as usuariosActions from "../../actions/usuariosActions";

import Autocomplete2 from '../Autocomplete'

import Search from '@material-ui/icons/Search'

import axios from 'axios'
import { Category } from "../../Models/Category";
import { User } from '../../Models/User'
import NomineeList from '../NomineeList/index'


const bannerImage = require('../../shared/assets/Main.png')

const Nominaciones = (props: any) => {
  const { classes } = props

  const [computistas, setComputistas] = React.useState([])

  const [categorias, setCategorias] = React.useState<Category[]>([])

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
      height: '45vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5, backgroundImage: `url(${bannerImage})`, backgroundSize: 'cover',
      backgroundPosition: 'top center',
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

  const ToUser = () => (
    <React.Fragment>
      <Autocomplete2 computistas={computistas} />
    </React.Fragment>
  )

  const ToTwoUsers = () => (
    <React.Fragment>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
        <Autocomplete2 computistas={computistas} />
        <Autocomplete2 computistas={computistas} />
      </div>
    </React.Fragment>
  )

  const ToUserWithExtra = () => (
    <React.Fragment>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
        <Autocomplete2 computistas={computistas} />
        <div>
          <CssTextField variant="outlined" placeholder="¿Porqué?" fullWidth InputProps={{
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

  const OnlyExtra = () => (
    <React.Fragment>
      <CssTextField variant="outlined" placeholder="Nombre" fullWidth InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search style={{ color: 'gray' }} />
          </InputAdornment>
        ),
      }} />
    </React.Fragment>
  )

  const voteInputs = {
    TO_USER: ToUser,
    ONLY_EXTRA: OnlyExtra,
    TO_USER_WITH_EXTRA: ToUserWithExtra,
    TO_TWO_USERS: ToTwoUsers
  }

  return (
    <React.Fragment>
      <CssBaseline />
      {(categorias as Category[]).map((category) =>
        <Route
          key={category.id}
          path={`${props.match.path}/${category.name}`}
          exact
          render={() =>
            banner(
              <React.Fragment>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Typography align="center" variant="h4" className={classes.h4}>{category.name}</Typography>
                  <Typography align="center" variant="h5" className={classes.h5} style={{ paddingTop: '1%' }}>{category.description}</Typography>
                  <div className={classes.vote1Div} style={{ marginTop: '45px' }}>
                    {voteInputs[category.type]()}
                  </div>
                  <NomineeList users={computistas as User[]} category={category.id} {...props} />
                </div>
              </React.Fragment>, category.pictureUrl)
          } />
      )}
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
