import React from "react";
import styles from './styles'
import { Divider, List, ListItem, ListItemText, Typography } from '@material-ui/core'
import { server } from '../../shared/CONSTANTS/server'
import { withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { useSnackbar } from 'notistack';
import { useHistory } from 'react-router-dom';
import * as usuariosActions from "../../actions/usuariosActions";

import Delete from '@material-ui/icons/Delete'

import axios from 'axios'
import { User } from "../../Models/User";
import catchUnauthorized from "../../utils/catchUnauthorized";
import { Nomination } from "../../Models/Nomination";

export interface NomineeListProps {
  classes: any
  category: number
  users: User[]
  user: any
  updateToken: any
  shouldUpdate: boolean
  setShouldUpdate: (val: boolean) => any
}

const NomineeList = (props: NomineeListProps) => {
  const { classes } = props
  const { enqueueSnackbar } = useSnackbar()
  const history = useHistory()
  const depsCatch = { enqueueSnackbar, history, updateToken: props.updateToken }
  const [nominees, setNominees] = React.useState([])
  const [enter, setEnter] = React.useState(true)

  const onDelete = (id: number) => () => {
    axios.delete(`${server}/v1/api/nominations/${id}`,
      {
        params: {},
        headers: {
          'Authorization': `Bearer ${props.user.token}`
        }
      })
      .then((_: any) => {
        props.setShouldUpdate(true)
        enqueueSnackbar('Nominación eliminada', { variant: 'success' })
      })
      .catch(catchUnauthorized(depsCatch))
      .catch((err: any) => {

      });
  }

  let nomineeText;
  if (nominees.length > 0) {
    nomineeText = <Typography variant="h5" className={classes.h5}>Has nominado a</Typography>
  }

  React.useEffect(() => {
    if (enter || props.shouldUpdate) {
      axios.get(`${server}/v1/api/nominations/byCategory/${props.category}/byUser`,
        {
          params: {},
          headers: {
            'Authorization': `Bearer ${props.user.token}`
          }
        })
        .then((res: any) => {
          setNominees(res.data)
        })
        .catch(catchUnauthorized(depsCatch))
        .catch((err: any) => {

        });
      props.setShouldUpdate(false)
      setEnter(false)
    }
  }, [props.shouldUpdate])

  return (
    <React.Fragment>
      <div style={{ marginBottom: '60px', height: 'auto' }}>
        {nomineeText}
        <List component="nav" className={classes.root} aria-label="mailbox folders">
          {nominees.map((nomination: Nomination, index: number) => (
            <React.Fragment key={nomination.id}>
              <ListItem>
                <ListItemText primary={toString(nomination)} />
                <Delete style={{ marginLeft: '5px', cursor: 'pointer' }} onClick={onDelete(nomination.id)} />
              </ListItem>
              {index !== (nominees.length - 1) ? <Divider /> : ''}
            </React.Fragment>
          ))}
        </List>
      </div>
    </React.Fragment>
  );
}

const toString = (nom: Nomination) => {
  let tokens = [];
  if (nom.mainNominee) {
    tokens.push(nom.mainNominee.fullName);
  }
  if (nom.auxNominee) {
    tokens.push(nom.auxNominee.fullName);
  }
  if (nom.extra) {
    tokens.push(nom.extra);
  }
  return tokens.join(", ");
}

const mapStateToProps = (reducers: any) => {
  return reducers.usuariosReducer;
};

export default connect(
  mapStateToProps,
  usuariosActions
)(withStyles(styles)(NomineeList));
