import * as React from "react";
import { Link } from "react-router-dom";
import { withStyles, Typography } from "@material-ui/core";
import styles from "./styles";
import { connect } from "react-redux";
import * as usuariosActions from "../../actions/usuariosActions";

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

  React.useEffect(() => {
    setTab(props.location.pathname.split('/').reverse()[0])
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

  const sideList = (side: DrawerSide) => (
    <div
      role="presentation"
      className={classes.drawer}
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {['home', 'nominaciones'].map((e: any, i: number) => (
          <ListItem button key={i} style={{ background: tab === e ? '#f9ecb7' : 'white' }}>
            <Link className={classes.linkButton} style={{ textTransform: 'capitalize' }} to={`/${e}`}>{e}</Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <nav className={classes.menu} style={{zIndex: 8}}>
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
