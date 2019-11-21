import { createStyles, Theme } from "@material-ui/core";

const styles = (theme: Theme) =>
    createStyles({
        votingMobile: {
            [theme.breakpoints.down('sm')]: {
                flexDirection: 'column',
                '& div': {
                    width: '100% !important',
                    height: 'initial !important',
                }
            },
        },
        photoMemberMobile: {
            [theme.breakpoints.down('sm')]: {
                maxWidth: '180px !important'
            },
        },
        commentsMobile: {
            [theme.breakpoints.down('sm')]: {
                padding: '20px 0 !important'
            },
        },
        commentsDivMobile: {
            [theme.breakpoints.down('sm')]: {
                margin: '0 !important',
                maxWidth: '100% !important',
            },
        },
        nomineeMobile: {
            [theme.breakpoints.down('sm')]: {
                maxWidth: '50% !important'
            },
        },
        noPaddingMobile: {
            [theme.breakpoints.down('sm')]: {
                padding: '0 !important'
            },
        },
        mobile: {
            [theme.breakpoints.down('sm')]: {
                height: '72vh'
            },
        },
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
            color: '#fe000a',
            fontSize: '2.5rem',
            [theme.breakpoints.down('sm')]: {
                fontSize: '1.5rem',
            },
        },
        h5: {
            fontFamily: 'Hamster',
            fontSize: '2rem',
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
            fontFamily: 'Hamster',
            [theme.breakpoints.down('sm')]: {
                fontSize: '0.7rem',
            },
        },
    });

export default styles;
