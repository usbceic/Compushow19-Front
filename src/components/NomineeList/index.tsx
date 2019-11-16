import React from "react";
import styles from './styles'
import { Divider, List, ListItem, ListItemText } from '@material-ui/core'

import { Route, Redirect } from 'react-router'
import { withStyles, CssBaseline } from "@material-ui/core";
import { connect } from "react-redux";
import { useSnackbar } from 'notistack';
import { useHistory } from 'react-router-dom';
import * as usuariosActions from "../../actions/usuariosActions";


import axios from 'axios'
import { User } from "../../Models/User";
import { Nomination } from "../../Models/Nomination";
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

  const [nominees, setNominees] = React.useState<User[]>([])

  React.useEffect(() => {
    const request = axios.get(`https://compushow.link/v1/api/nominations/byCategory/${props.category}/byUser`,
        { params: {}, headers: { 'Authorization': `Bearer ${props.user.token}` } })
      .then((res: any) => {
        const nominations: Nomination[] = res.data
        const users : User[] = nominations.reduce((acc, nomination) => {
            // return []
            return [...acc, props.users.find(user => user.id === nomination.userId) as User]
        }, [] as User[])
        setNominees(users)
      });

    catchUnauthorized(request, depsCatch, (err: any) => {
      console.log(err)
    });
    
  }, [])

  return (
    <React.Fragment>
        <List component="nav" className={classes.root} aria-label="mailbox folders">
          {(nominees as User[]).map((nominee, index) => (
            <React.Fragment key={nominee.id}>
                <ListItem button>
                    <ListItemText primary={nominee.fullName} />
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
