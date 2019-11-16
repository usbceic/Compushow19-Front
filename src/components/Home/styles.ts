import { createStyles, Theme } from "@material-ui/core";

const styles = (theme: Theme) =>
    createStyles({
        h1: {
            fontFamily: 'Hamster',
            [theme.breakpoints.down('sm')]: {
                fontSize: '2.5rem',
            },
        },
        h2: {
            fontFamily: 'Hamster',
            [theme.breakpoints.down('sm')]: {
                fontSize: '2.2rem',
            },
        },
        h3: {
            fontFamily: 'Hamster',
            [theme.breakpoints.down('sm')]: {
                fontSize: '1.8rem',
            },
        },
        h4: {
            fontFamily: 'Hamster',
            [theme.breakpoints.down('sm')]: {
                fontSize: '1.5rem',
            },
        },
        h5: {
            fontFamily: 'Hamster',
            [theme.breakpoints.down('sm')]: {
                fontSize: '1.2rem',
                padding: '1% 5% 0',
            },
        },
        h6: {
            fontFamily: 'Hamster',
            [theme.breakpoints.down('sm')]: {
                fontSize: '1rem',
            },
        },
        body1: {
            fontFamily: 'Hamster',
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
            [theme.breakpoints.down('md')]: {
                maxWidth: '170px',
                maxHeight: '170px',
            },
            [theme.breakpoints.down('sm')]: {
                maxWidth: '150px',
                maxHeight: '150px',
            },
            [theme.breakpoints.down('xs')]: {
                maxWidth: '130px',
                maxHeight: '130px',
            },

        },
        homeDiv: {
            width: '60%',
            marginTop: '40px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            [theme.breakpoints.down('lg')]: {
                width: '70%',
            },
            [theme.breakpoints.down('md')]: {
                width: '80%',
            },
            [theme.breakpoints.down('sm')]: {
                width: '90%',
            },
            [theme.breakpoints.down('xs')]: {
                width: '100%',
            },
        },
    });

export default styles;
