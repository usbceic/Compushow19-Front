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
        bannerAvatar: {
            width: '216px',
            height: '216px',
            zIndex: 6,
            [theme.breakpoints.down('lg')]: {
                width: '180px',
                height: '180px',
            },
            [theme.breakpoints.down('md')]: {
                width: '150px',
                height: '150px',
            },
            [theme.breakpoints.down('sm')]: {
                width: '130px',
                height: '130px',
            },
            [theme.breakpoints.down('xs')]: {
                width: '110px',
                height: '110px',
            },
        },
        vote1Div: {
            width: '450px',
            [theme.breakpoints.down('lg')]: {
                width: '450px',
            },
            [theme.breakpoints.down('md')]: {
                width: '400px',
            },
            [theme.breakpoints.down('sm')]: {
                width: '350px',
            },
            [theme.breakpoints.down('xs')]: {
                width: '300px',
            },
        },
        vote2Div: {
            width: '550px',
            [theme.breakpoints.down('md')]: {
                width: '475px',
            },
            [theme.breakpoints.down('sm')]: {
                width: '400px',
            },
            [theme.breakpoints.down('xs')]: {
                width: '315px',
            },
        },
    });

export default styles;
