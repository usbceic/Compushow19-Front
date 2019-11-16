import React from "react";
import styles from './styles'
import { Divider, List, ListItem, ListItemText } from '@material-ui/core'

import { withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { useSnackbar } from 'notistack';
import { useHistory } from 'react-router-dom';
import * as usuariosActions from "../../actions/usuariosActions";

import Delete from '@material-ui/icons/Delete'

import axios from 'axios'
import { User } from "../../Models/User";
import catchUnauthorized from "../../utils/catchUnauthorized";

export interface NomineeListProps {
    classes: any
    category: number
    users: User[]
    user: any
    updateToken: any
}

const NomineeList = (props: NomineeListProps) => {
  const { classes } = props
  const { enqueueSnackbar } = useSnackbar()
  const history = useHistory()
  const depsCatch = {enqueueSnackbar, history, updateToken: props.updateToken}

  const [nominees, setNominees] = React.useState([])

  console.log(nominees)

  // TODO: Hacer el delete estaba cansado
  const onDelete = (id: number) => {
    axios.delete(`https://compushow.link/v1/api/nominations/byCategory/${props.category}/byUser`, { params: {}, headers: { 'Authorization': `Bearer ${props.user.token}` } })
  }

  React.useEffect(() => {
    const request = axios.get(`https://compushow.link/v1/api/nominations/byCategory/${props.category}/byUser`,
        { params: {}, headers: { 'Authorization': `Bearer ${props.user.token}` } })
      .then((res: any) => {
        const auxNom = res.data.map((e: any, i: number) => e.mainNominee)
        setNominees(auxNom)
      })
      .catch(catchUnauthorized(depsCatch))
      .catch((err: any) => {
        console.log(err)
      });
    
  }, [])



  return (
    <React.Fragment>
      <List component="nav" className={classes.root} aria-label="mailbox folders">
        {nominees.map((nominee: any, index: number) => (
          <React.Fragment key={nominee.id}>
            <ListItem>
              <ListItemText primary={nominee.fullName} />
              <Delete style={{ marginLeft: '5px', cursor: 'pointer' }} onClick={() => {
                onDelete(nominee.id)
              }} />
            </ListItem>
            {index !== (nominees.length - 1) ? <Divider /> : ''}
          </React.Fragment>
        ))}

      </List>
    </React.Fragment>
  );
}

const mapStateToProps = (reducers: any) => {
  return reducers.usuariosReducer;
};

export default connect(
  mapStateToProps,
  usuariosActions
)(withStyles(styles)(NomineeList));
