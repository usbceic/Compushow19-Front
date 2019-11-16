interface Dependencies {
    enqueueSnackbar: any;
    history: any;
    updateToken: (token: string) => any;
}

/**
 * A kind of "decorator" (not really) for a promise (`result`) that will
 * catch 401 errors.
 */
const catchUnauthorized = (deps: Dependencies) => (err: any) => {
    // If server returned Unauthorized
    if (err.response && err.response.status === 401) {
        let msg = "Debes iniciar sesión";
        deps.enqueueSnackbar(msg, { variant: 'error' })
        
        deps.history.push('/login');
    } else {
        throw err;
    }
}

export default catchUnauthorized;