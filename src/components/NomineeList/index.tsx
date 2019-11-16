import React from "react";
import styles from './styles'
import { Divider, List, ListItem, ListItemText } from '@material-ui/core'

import { withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import * as usuariosActions from "../../actions/usuariosActions";

import Delete from '@material-ui/icons/Delete'

import axios from 'axios'
import { User } from "../../Models/User";

export interface NomineeListProps {
  classes: any
  category: number
  users: User[]
  user: any
}

const NomineeList = (props: NomineeListProps) => {
  const { classes } = props

  const [nominees, setNominees] = React.useState([])

  console.log(nominees)

  // React.useEffect(() => {
  //   axios.get(`https://compushow.link/v1/api/nominations/byCategory/${props.category}/byUser`,
  //     { params: {}, headers: { 'Authorization': `Bearer ${props.user.token}` } })
  //     .then((res: any) => {
  //       const nominations: Nomination[] = res.data
  //       const users: User[] = nominations.reduce((acc, nomination) => {
  //         console.log('acc', acc)
  //         console.log('nomination', nomination)
  //         // return []
  //         return [...acc, props.users.find(user => user.id === nomination.userId) as User]
  //       }, [] as User[])
  //       setNominees(users)
  //     })
  //     .catch((err: any) => {
  //       console.log(err)
  //     })
  // }, [])

  //Hacer el delete estaba cansado
  const onDelete = (id: number) => {
    axios.delete(`https://compushow.link/v1/api/nominations/byCategory/${props.category}/byUser`, { params: {}, headers: { 'Authorization': `Bearer ${props.user.token}` } })
  }

  React.useEffect(() => {
    axios.get(`https://compushow.link/v1/api/nominations/byCategory/${props.category}/byUser`,
      { params: {}, headers: { 'Authorization': `Bearer ${props.user.token}` } })
      .then((res: any) => {
        const auxNom = res.data.map((e: any, i: number) => e.mainNominee)
        setNominees(auxNom)
      })
      .catch((err: any) => {
        console.log(err)
      })
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
