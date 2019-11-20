import * as React from "react";
import { Link } from "react-router-dom";
import { withStyles, Typography } from "@material-ui/core";
import styles from "./styles";
import { connect } from "react-redux";
import { useSnackbar } from 'notistack';
import { useHistory } from "react-router-dom";
import { server } from '../../shared/CONSTANTS/server'
import * as usuariosActions from "../../actions/usuariosActions";
import { Category } from '../../Models/Category'
import catchUnauthorized from '../../utils/catchUnauthorized';

import axios from 'axios'

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import MenuIcon from '@material-ui/icons/Menu'

const Menu = (props: any) => {
  const { classes } = props

  const google_token = localStorage.getItem('google_token');
  if (google_token !== props.user.token) props.updateToken(google_token);

  const { enqueueSnackbar } = useSnackbar()
  const history = useHistory()

  if (google_token) {
    props.user.token = google_token;
  }

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [tab, setTab] = React.useState(props.location.pathname.split('/').reverse()[0])

  const [categorias, setCategorias] = React.useState([])

  console.log(categorias)

  React.useEffect(() => {
    axios.get(`${server}/v1/api/categories`, { params: {}, headers: { 'Authorization': `Bearer ${google_token}` } })
      .then((res: any) => {
        setCategorias(res.data)
      })
      .catch(catchUnauthorized({
        enqueueSnackbar,
        history,
        updateToken: props.updateToken
      })
      )
      .catch((err: any) => {
      });
  }, [])

  React.useEffect(() => {
    const idUrl = parseInt(props.location.pathname.split('/').reverse()[0], 10)
    if (idUrl) {
      const nameUrl = categorias.find((category: any) => category.id === idUrl) || { name: '' }
      setTab(nameUrl.name)
    } else {
      setTab(props.location.pathname.split('/').reverse()[0])
    }
  }, [props.location.pathname])

  type DrawerSide = 'left';
  const toggleDrawer = (side: DrawerSide, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const logOut = () => {
    props.updateToken("");
  }

  const sideList = (side: DrawerSide) => (
    <div
      role="presentation"
      className={classes.drawer}
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {(categorias as Category[]).map((e: Category, i: number) => (
          <ListItem button key={i} className={classes.highlightItem} style={{ background: tab === e.name ? '#f9ecb7' : 'white' }}>
            <Link className={classes.linkButton} to={props.match.path === '/nominaciones' ? `/nominaciones/${e.name}` : `/votaciones/${e.id}`}>{e.name}</Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <nav className={classes.menu} style={{ zIndex: 8 }}>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex' }}>
          <Button onClick={toggleDrawer('left', true)}><MenuIcon style={{ color: '#f7f7f7' }} /></Button>
          <Typography variant="h6" className={classes.h6} style={{ marginLeft: '5px', textTransform: 'capitalize', marginTop: '6px' }}>{tab}</Typography>
        </div>
        <Button onClick={logOut} style={{ marginRight: '5px', textTransform: 'capitalize', marginTop: '2px', color: 'white' }}>
          <Typography variant="h6" className={classes.h6}>Log Out</Typography>
        </Button>
        <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
          {sideList('left')}
        </Drawer>
      </div>
    </nav>
  )
}

const mapStateToProps = (reducers: any) => {
  return reducers.usuariosReducer;
};

export default connect(
  mapStateToProps,
  usuariosActions
)(withStyles(styles)(Menu));
