import { createMuiTheme } from '@material-ui/core/styles'

const MainTheme = createMuiTheme({
    palette: {
        primary: {
            // light: "#A9A9A9",
            main: '#4c1a02',
            dark: '#f9ecb7',
        },
        secondary: {
            main: '#fe000a',
            light: '#f7f7f7',
            // main: '#040404',
        },
        error: { main: '#FF4500' },
        type: 'light',
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
    typography: {},
    spacing: 8,
    shape: {
        borderRadius: 0,
    },
})

export default MainTheme
