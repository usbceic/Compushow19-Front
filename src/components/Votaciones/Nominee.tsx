import * as React from 'react'
import { Typography, Button, Grid } from '@material-ui/core'

import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Nominee} from '../../Models/Nominee'


export default function NomineeComp(props: any) {
    const { classes } = props
    const [open, setOpen] = React.useState(false);
    const [maxWidth, setMaxWidth] = React.useState<DialogProps['maxWidth']>('sm');
    const [fullWidth, setFullWidth] = React.useState(true);
    const nominee: Nominee = props.nom

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Grid item xs={12} sm={6}
            style={{ paddingTop: props.i % 2 === 0 ? '25px' : '0px', height: '100%', width: '100%' }}
        >
            <Button style={{ textTransform: 'capitalize' }} onClick={() => {
                setOpen(true);
            }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <img
                        src={nominee.isHappy
                            ? nominee.happyPictureUrl
                            : nominee.sadPictureUrl} alt="" />
                    <Typography align="center" style={{ height: 'auto', marginTop: '5px' }} variant="body1" className={classes.body1}>{nominee.name}</Typography>
                </div>
            </Button>
            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={open}
                onClose={handleClose}
                aria-labelledby="max-width-dialog-title"
            >
                <DialogTitle id="max-width-dialog-title">Confirmar voto</DialogTitle>
                <div style={{ width: '100%', textAlign: 'center' }}>
                    <img
                        src={nominee.happyPictureUrl} alt="" />
                </div>
                <DialogContent>
                    <DialogContentText>
                        <Typography align="center" style={{ height: 'auto', marginTop: '5px' }} variant="h5" className={classes.h5}>Deseas votar por {nominee.name} en la categoria {props.category.name} ?</Typography>
                    </DialogContentText>
                </DialogContent>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <Button variant="contained" color="primary" style={{ marginRight: '5px', background: '#4C1A02' }} onClick={() => {
                        // onVote(selectedId)
                        props.onVote(nominee.id, props.category.id)
                    }}>Done</Button>
                    <Button variant="contained" color="secondary" style={{ marginLeft: '5px', background: '#F9ECB7', color: 'black' }} onClick={() => {
                        setOpen(false)
                    }}>Cancel</Button>
                </div>
                <DialogActions>
                </DialogActions>
            </Dialog>
        </Grid>
    )
}