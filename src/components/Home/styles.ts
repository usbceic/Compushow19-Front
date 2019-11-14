import { createStyles, Theme } from "@material-ui/core";

const styles = (theme: Theme) =>
    createStyles({
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
        compushowLogo: {
            maxWidth: '200px',
            maxHeight: '200px',
            [theme.breakpoints.down('sm')]: {
                fontSize: '0.7rem',
            },
        },
    });

export default styles;
