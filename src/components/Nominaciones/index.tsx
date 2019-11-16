import React from "react";
import styles from './styles'
import { Typography, TextField, Button } from '@material-ui/core'

import { Route } from 'react-router'
import { withStyles, CssBaseline } from "@material-ui/core";
import { connect } from "react-redux";
import * as usuariosActions from "../../actions/usuariosActions";

import Autocomplete from '../Autocomplete'

import Search from '@material-ui/icons/Search'
import { useSnackbar } from 'notistack'
import { useHistory } from "react-router-dom";
import axios from 'axios'
import { Category } from "../../Models/Category";
import { User } from '../../Models/User'
import NomineeList from '../NomineeList/index'
import catchUnauthorized from '../../utils/catchUnauthorized';

const bannerImage = require('../../shared/assets/Main.png')

const Nominaciones = (props: any) => {
  const { classes } = props
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const depsCatch = {enqueueSnackbar, history, updateToken: props.updateToken};

  const [computistas, setComputistas] = React.useState([])
  const [categorias, setCategorias] = React.useState<Category[]>([])

  const [shouldUpdate, setShouldUpdate]: any = React.useState({} as any)
  const setCategoryShouldUpdate = (category: number) => (val: boolean) => {
    setShouldUpdate((prev: any) => {
      return {
        ...prev,
        [category]: val
      }
    })
  }

  const [computistasArray, setComputistasArray]: any = React.useState([])
  const [text, setText] = React.useState('')
  const [selectedId, setSelectedId] = React.useState(9999)

  const [computistasArray2, setComputistasArray2]: any = React.useState([])
  const [text2, setText2] = React.useState('')
  const [selectedId2, setSelectedId2] = React.useState(9999)

  const [extra, setExtra] = React.useState('')

  React.useEffect(() => {
    const request = axios.get('https://compushow.link/v1/api/categories', { params: {}, headers: { 'Authorization': `Bearer ${props.user.token}` } })
      .then((res: any) => {
        setCategorias(res.data)

        const shouldUpdateObj: any = {};
        res.data.forEach((val: Category, idx: number) => {
          shouldUpdateObj[val.id] = true
        })
        setShouldUpdate(shouldUpdateObj)
      })
      .catch(catchUnauthorized(depsCatch))
      .catch((err: any) => {
        console.log(err)
      });
    
  }, [])

  React.useEffect(() => {
    const request = axios.get('https://compushow.link/v1/api/users/all', { params: {}, headers: { 'Authorization': `Bearer ${props.user.token}` } })
      .then((res: any) => {
        setComputistas(res.data)
      })
      .catch(catchUnauthorized(depsCatch))
      .catch((err: any) => {
        console.log(err)
      });
      
  }, [])

  React.useEffect(() => {
    setComputistasArray([])
    setComputistasArray2([])
    setText('')
    setText2('')
    setSelectedId(9999)
    setSelectedId2(9999)
    setExtra('')
  }, [props.location.pathname])

  const onNominate = (key: number, nom1?: number, nom2?: number, aux?: string) => {
    axios.post(`https://compushow.link/v1/api/nominations`,
      nom1 !== 9999 && nom2 !== 9999 ? { categoryId: key, mainNominee: nom1, auxNominee: nom2 } : nom1 !== 9999 && nom2 === 9999 && extra === '' ? { categoryId: key, mainNominee: nom1 } : nom1 !== 9999 && nom2 === 9999 && extra !== '' ? { categoryId: key, mainNominee: nom1, extra: aux } : nom1 === 9999 && nom2 === 9999 && extra !== '' ? { categoryId: key, extra: aux } : null,
      { params: {}, headers: { 'Authorization': `Bearer ${props.user.token}` } })
      .then((res: any) => {
        enqueueSnackbar('Nominación enviada', { variant: 'success' })
        setCategoryShouldUpdate(key)(true)
      })
      .catch((err: any) => enqueueSnackbar('Error', { variant: 'error' }))
  }

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
      </div>
    </div>
  </div>

  const ToUser = () => (
    <React.Fragment>
      <Autocomplete
        computistas={computistas}
        computistasArray={computistasArray}
        setComputistasArray={setComputistasArray}
        text={text}
        setText={setText}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />
    </React.Fragment>
  )

  const ToTwoUsers = () => (
    <React.Fragment>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
        <Autocomplete
          computistas={computistas}
          computistasArray={computistasArray}
          setComputistasArray={setComputistasArray}
          text={text}
          setText={setText}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
        <Autocomplete
          computistas={computistas}
          computistasArray={computistasArray2}
          setComputistasArray={setComputistasArray2}
          text={text2}
          setText={setText2}
          selectedId={selectedId2}
          setSelectedId={setSelectedId2}
        />
      </div>
    </React.Fragment>
  )

  const ToUserWithExtra = () => (
    <React.Fragment>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
        <Autocomplete
          computistas={computistas}
          computistasArray={computistasArray}
          setComputistasArray={setComputistasArray}
          text={text}
          setText={setText}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
        <div>
          <TextField value={extra} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setExtra(e.target.value)} variant="outlined" placeholder="¿Porqué?" fullWidth />
        </div>
      </div>
    </React.Fragment>
  )

  const OnlyExtra = () => (
    <React.Fragment>
      <TextField value={extra} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setExtra(e.target.value)} variant="outlined" placeholder="Nombre" fullWidth />
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
      {(categorias as Category[]).map((category: Category) =>
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
                  <NomineeList 
                    users={computistas as User[]} 
                    category={category.id} 
                    shouldUpdate={(shouldUpdate as any)[category.id]} 
                    setShouldUpdate={setCategoryShouldUpdate(category.id)} 
                    {...props} 
                  />
                </div>
                <div style={{ width: '25%', marginTop: '25px', marginBottom: '20px', position: 'relative' }}>
                  <Button onClick={() => {
                    onNominate(category.id, selectedId, selectedId2, extra)
                    console.log(selectedId)
                  }} color="secondary" fullWidth style={{ textTransform: 'capitalize', background: '#FF0000', color: 'white' }}>Nominar</Button>
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
