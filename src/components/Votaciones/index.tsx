import React from "react";
import styles from './styles'
import { Typography, Grid } from '@material-ui/core'

import { withStyles, CssBaseline } from "@material-ui/core";
import { connect } from "react-redux";
import * as usuariosActions from "../../actions/usuariosActions";
import { server } from '../../shared/CONSTANTS/server'
import { Route } from 'react-router'

import { useSnackbar } from 'notistack'
import { useHistory } from "react-router-dom";
import axios from 'axios'
import { Category } from "../../Models/Category";
import { Nominee } from "../../Models/Nominee";
import { Vote } from "../../Models/Vote";
import catchUnauthorized from '../../utils/catchUnauthorized';

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import NomineeComp from './Nominee'
import Comments from './Comments'


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        form: {
            display: 'flex',
            flexDirection: 'column',
            margin: 'auto',
            width: 'fit-content',
        },
        formControl: {
            marginTop: theme.spacing(2),
            minWidth: 120,
        },
        formControlLabel: {
            marginTop: theme.spacing(1),
        },
    }),
);


const Votaciones = (props: any) => {
    const { classes } = props
    const { enqueueSnackbar } = useSnackbar();
    const history = useHistory();
    const depsCatch = { enqueueSnackbar, history, updateToken: props.updateToken };

    const [nominados, setNominados] = React.useState<Nominee[]>([])
    const [comentarios, setComentarios] = React.useState([])
    const [categorias, setCategorias] = React.useState<Category[]>([])
    const [selectedId, setSelectedId] = React.useState(999)

    const [shouldUpdate, setShouldUpdate]: any = React.useState({} as any)
    const setCategoryShouldUpdate = (category: number) => (val: boolean) => {
        setShouldUpdate((prev: any) => {
            return {
                ...prev,
                [category]: val
            }
        })
    }

    React.useEffect(() => {
        setNominados([])
        setComentarios([])
        setSelectedId(9999)
    }, [props.location.pathname])

    React.useEffect(() => {
        axios.get(`${server}/v1/api/categories`, { params: {}, headers: { 'Authorization': `Bearer ${props.user.token}` } })
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
            });
    }, [])

    async function loadNominees() {
        const idUrl = parseInt(props.location.pathname.split('/').reverse()[0], 10)
        if (idUrl) {
            let nominadosResponse: Nominee[]

            // buscamos los nominados
            try {
                const response =
                    await axios.get(`${server}/v1/api/nominees/byCategory/${idUrl}`,
                    {
                        params: {},
                        headers: { 'Authorization': `Bearer ${props.user.token}` }
                    })
                nominadosResponse = response.data
                nominadosResponse = nominadosResponse.map(n => ({
                    ...n,
                    isHappy: true
                }))
            } catch (e) {
                console.error(e) // this should not happen
                return
            }
            // buscamos si hay algún votado en esta categoría
            try {
                const response =
                    await axios.get(`${server}/v1/api/votes/byCategory/${idUrl}`,
                    {
                        params: {},
                        headers: { 'Authorization': `Bearer ${props.user.token}` }
                    })
                const voto : Vote = response.data
                console.log(voto)
                nominadosResponse = nominadosResponse.map(n => ({
                    ...n,
                    isHappy: n.id === voto.nomineeId
                }))
            } catch (e) {
                console.error(e)
            }
            console.log(nominadosResponse)
            setNominados(nominadosResponse)
        }

    }

    React.useEffect(() => {
        loadNominees()
    }, [props.location.pathname])

    React.useEffect(() => {
        const idUrl = parseInt(props.location.pathname.split('/').reverse()[0], 10)
        if (idUrl) {
            axios.get(`${server}/v1/api/nomineeComments/byCategory/${idUrl}`, { params: {}, headers: { 'Authorization': `Bearer ${props.user.token}` } })
                .then(res => {
                    setComentarios(res.data)
                })
                .catch(err => console.log(err))
        }
    }, [props.location.pathname])

    console.log(nominados)

    const onVote = (nomId: number, categoryId: number) => {
        axios.post(`${server}/v1/api/votes`,
            { nomineeId: nomId },
            { params: {}, headers: { 'Authorization': `Bearer ${props.user.token}` } }
        )
            .then((res: any) => {
                loadNominees()
                enqueueSnackbar('Voto enviado', { variant: 'success' })
                setSelectedId(9999)
                setCategoryShouldUpdate(categoryId)(true)
            })
            .catch(err => console.log(err))
    }

    // const dualNomination = <React.Fragment>
    //     <Grid item xs={12} sm={6}
    //     // style={{ imparElKey ? paddingTop: '50px' : paddingTop: '0px' }}
    //     >
    //         <Button onClick={() => {
    //             setOpen(true)
    //             setSelectedId(1)
    //         }}>
    //             <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', textTransform: 'capitalize' }}>
    //                 <div style={{ display: 'flex' }}>
    //                     <div style={{ marginRight: '20px' }}>
    //                         <img
    //                             src="https://via.placeholder.com/100" alt="" />
    //                     </div>
    //                     <div>
    //                         <img
    //                             src="https://via.placeholder.com/100" alt="" />
    //                     </div>
    //                 </div>
    //                 <Typography align="center" style={{ height: 'auto', marginTop: '5px' }} variant="h4" className={classes.h4}>Pareja 1</Typography>
    //             </div>
    //         </Button>
    //     </Grid>
    //     <Dialog
    //         fullWidth={fullWidth}
    //         maxWidth={maxWidth}
    //         open={open}
    //         onClose={handleClose}
    //         aria-labelledby="max-width-dialog-title"
    //     >
    //         <DialogTitle id="max-width-dialog-title">Confirmar voto</DialogTitle>
    //         <div style={{ width: '100%', textAlign: 'center' }}>
    //             <img
    //                 src="https://via.placeholder.com/200" alt="" />
    //         </div>
    //         <DialogContent>
    //             <DialogContentText>
    //                 <Typography align="center" style={{ height: 'auto', marginTop: '5px' }} variant="h5" className={classes.h5}>Deseas votar por x en la categoria y ?</Typography>
    //             </DialogContentText>
    //         </DialogContent>
    //         <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
    //             <Button variant="contained" color="primary" style={{ marginRight: '5px', background: '#4C1A02' }} onClick={() => {
    //                 // onVote(selectedId)
    //             }}>Done</Button>
    //             <Button variant="contained" color="secondary" style={{ marginLeft: '5px', background: '#F9ECB7', color: 'black' }} onClick={() => {
    //                 setOpen(false)
    //                 setSelectedId(9999)
    //             }}>Cancel</Button>
    //         </div>
    //         <DialogActions>
    //         </DialogActions>
    //     </Dialog>
    // </React.Fragment>

    return (
        <React.Fragment>
            <CssBaseline />
            {(categorias as Category[]).map((category: Category) =>
                <Route
                    key={category.id}
                    path={`${props.match.path}/${category.id}`}
                    exact
                    render={() =>
                        <React.Fragment>
                            <div style={{ width: '100%', height: 'calc(100vh - 60px)', overflow: 'scroll', display: 'flex' }}>
                                <div style={{
                                    width: '40%',
                                    height: '100%',
                                    backgroundImage: `url(https://compushow.s3.us-east-2.amazonaws.com/backgrounds/Main.png)`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'top center',
                                    backgroundRepeat: 'no-repeat',
                                    textAlign: 'center',
                                    paddingTop: '40px',
                                }}>
                                    <img
                                          src={`${category.pictureUrl}`}
                                        style={{ marginBottom: '10px' }} alt="" />

                                    <Typography align="center" style={{ height: 'auto' }} variant="h4" className={classes.h4}>{category.name}</Typography>
                                    <div style={{ marginTop: '20px' }}>
                                        <Grid container justify="center">
                                            {nominados.map((e: any, i: number) => (<NomineeComp classes={classes} onVote={onVote} setSelectedId={setSelectedId} nom={e} key={i} i={i} category={category} />))}
                                        </Grid>
                                    </div>
                                </div>
                                <div style={{ width: '60%', height: '100%' }}>
                                    <Grid container justify="center" style={{ padding: '40px', paddingBottom: '30px' }}>
                                        {comentarios.map((e: any, i: number) => (<Comments classes={classes} key={i} i={i} comment={comentarios[i]} />))}
                                    </Grid>
                                </div>
                            </div>
                        </React.Fragment>
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
)(withStyles(styles)(Votaciones));
