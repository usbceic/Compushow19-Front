import * as React from "react";
import { withStyles, Typography } from "@material-ui/core";
import styles from "./styles";
import { connect } from "react-redux";
import * as usuariosActions from "../../actions/usuariosActions";

const Footer = (props: any) => {

    return (
        <Typography>Footer xd</Typography>
    )

}

const mapStateToProps = (reducers: any) => {
    return reducers.usuariosReducer;
};

export default connect(
    mapStateToProps,
    usuariosActions
)(withStyles(styles)(Footer));
