import * as React from "react";
import { Link } from "react-router-dom";
import { withStyles, Typography } from "@material-ui/core";
import styles from "./styles";
import { connect } from "react-redux";
import * as usuariosActions from "../../actions/usuariosActions";

import axios from 'axios'

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import MenuIcon from '@material-ui/icons/Menu'

const Menu = (props: any) => {
  const { classes } = props

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [tab, setTab] = React.useState(props.location.pathname.split('/').reverse()[0])

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
    setTab(props.location.pathname.split('/').reverse()[0])
  }, [props.location.pathname])

  console.log(categorias)

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

  const sideList = (side: DrawerSide) => (
    <div
      role="presentation"
      className={classes.drawer}
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {['nominaciones/adoptado', 'nominaciones/cartoon', 'nominaciones/chancero', 'nominaciones/comadre', 'nominaciones/compadre', 'nominaciones/cono', 'nominaciones/falso', 'nominaciones/fitness', 'nominaciones/gordito', 'nominaciones/inmamable', 'nominaciones/love', 'nominaciones/papi', 'nominaciones/pro', 'nominaciones/team', 'nominaciones/chapita', 'nominaciones/princeso', 'nominaciones/mami', 'nominaciones/master', 'nominaciones/tukky'].map((e: any, i: number) => (
          <ListItem button key={i} className={classes.highlightItem} style={{ background: tab === e.split('/').reverse()[0] ? '#f9ecb7' : 'white' }}>
            <Link className={classes.linkButton} style={{ textTransform: 'capitalize' }} to={`/${e}`}>{e.split('/').reverse()[0]}</Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <nav className={classes.menu} style={{ zIndex: 8 }}>
      <div>
        <div style={{ display: 'flex' }}>
          <Button onClick={toggleDrawer('left', true)}><MenuIcon style={{ color: '#f7f7f7' }} /></Button>
          <Typography variant="h5" style={{ marginLeft: '5px', textTransform: 'capitalize', marginTop: '2px' }}>{tab}</Typography>
        </div>
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
