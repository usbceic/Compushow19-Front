import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route, RouteComponentProps, Redirect } from 'react-router'
import axios from 'axios'
import Menu from "./Navbar/Menu";
import Home from "./Home";
import Login from "./Login";
import Nominaciones from "./Nominaciones"
import Footer from './Footer'

// const instance = axios.create({
//   baseURL: 'https://compushow.link/v1/api',
// })

// instance.get('/nominations')
// .then((res: any) => console.log(res))
// .catch((err: any) => console.log(err))

const App = () => (
  <BrowserRouter>
    <div style={{ height: '100vh', overflow: 'auto', width: '100%' }}>
      <Switch>
        <Route
          path='/'
          exact
          render={() => <Redirect to='/login' />} />
        <Route
          path='/home'
          exact
          render={(props: RouteComponentProps) =>
            <React.Fragment>
              <Menu {...props} />
              <Home {...props} />
              <Footer {...props} />
            </React.Fragment>}
        />
        <Route
          path='/login'
          exact
          render={(props: RouteComponentProps) =>
            <React.Fragment>
              <Login {...props} />
              <Footer {...props} />
            </React.Fragment>}
        />
        <Route
          path='/nominaciones'
          render={(props: RouteComponentProps) =>
            <React.Fragment>
              <Menu {...props} />
              <Nominaciones {...props} />
              <Footer {...props} />
            </React.Fragment>}
        />

      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
