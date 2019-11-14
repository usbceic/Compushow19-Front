import { createStyles, Theme } from "@material-ui/core";

const styles = (theme: Theme) =>
    createStyles({
        "@global": {
            body: {
                backgroundColor: theme.palette.common.white
            }
        },
        paper: {
            marginTop: theme.spacing(8),
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        compushowLogo: {
            maxWidth: '350px',
            maxHeight: '350px',
            marginBottom: '30px',
            [theme.breakpoints.down('lg')]: {
                maxWidth: '300px',
                maxHeight: '300px',
            },
            [theme.breakpoints.down('md')]: {
                maxWidth: '250px',
                maxHeight: '250px',
            },
            [theme.breakpoints.down('sm')]: {
                maxWidth: '200px',
                maxHeight: '200px',
            },
            [theme.breakpoints.down('xs')]: {
                maxWidth: '150px',
                maxHeight: '150px',
            },
        },
        form: {
            width: "100%", // Fix IE 11 issue.
        },
        submit: {
            margin: theme.spacing(3, 0, 2)
        },
        h1: {
            [theme.breakpoints.down('sm')]: {
                fontSize: '2.5rem',
            },
        },
        h2: {
            [theme.breakpoints.down('sm')]: {
                fontSize: '2.2rem',
            },
        },
        h3: {
            [theme.breakpoints.down('sm')]: {
                fontSize: '1.8rem',
            },
        },
        h4: {
            [theme.breakpoints.down('sm')]: {
                fontSize: '1.5rem',
            },
        },
        h5: {
            [theme.breakpoints.down('sm')]: {
                fontSize: '1.2rem',
            },
        },
        h6: {
            [theme.breakpoints.down('sm')]: {
                fontSize: '1rem',
            },
        },
        body1: {
            [theme.breakpoints.down('sm')]: {
                fontSize: '0.85rem',
            },
        },
        subtitle1: {
            [theme.breakpoints.down('sm')]: {
                fontSize: '0.7rem',
            },
        },
    });

export default styles;
