import { createStyles, Theme } from "@material-ui/core";

const styles = (theme: Theme) =>
    createStyles({
        menu: {
            fontSize: '20px',
            backgroundColor: theme.palette.secondary.main,
            color: 'white',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
        },
        linkButton: {
            width: '100%',
            height: '100%',
            paddingTop: '8.5px',
            margin: '0',
            padding: '0',
            textAlign: 'center',
            textDecoration: 'none',
            color: 'black',
        },
        drawer: {
            width: '10vw',
            [theme.breakpoints.down('lg')]: {
                width: '15vw',
            },
            [theme.breakpoints.down('md')]: {
                width: '22vw',
            },
            [theme.breakpoints.down('sm')]: {
                width: '26vw',
            },
            [theme.breakpoints.down('xs')]: {
                width: '39vw',
            },
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
        highlightItem: {
            margin: '0',
            padding: '0',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '&:hover': {
                background: '#FAFAFA !important',
            },
        },
    });

export default styles;
