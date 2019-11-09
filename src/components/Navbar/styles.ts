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
            textAlign: 'center',
            textDecoration: 'none',
            color: 'black',
        },
        drawer: {
            width: '10vw'
        },
    });

export default styles;
