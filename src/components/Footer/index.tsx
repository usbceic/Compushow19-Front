import * as React from "react";
import { withStyles, Typography } from "@material-ui/core";
import styles from "./styles";
import { connect } from "react-redux";
import * as usuariosActions from "../../actions/usuariosActions";

const Footer = (props: any) => {
    const { classes } = props

    return (
        <div style={{ position: 'absolute', zIndex: 8, marginTop: 'calc(100vh - 40px)', top: '0', left: '0', height: '40px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-end'}}>
            <div style={{ width: '100%', background: '#4c1a02',display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40px' }}>
            <Typography variant="h6" className={classes.h6} style={{color: '#f9ecb7'}}>COMPUSHOW 2019 BY USBCEIC</Typography>
            </div>
        </div>
    )
    
}

const mapStateToProps = (reducers: any) => {
    return reducers.usuariosReducer;
};

export default connect(
    mapStateToProps,
    usuariosActions
)(withStyles(styles)(Footer));
