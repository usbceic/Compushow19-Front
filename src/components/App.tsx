import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route, RouteComponentProps, Redirect } from 'react-router'
import Menu from "./Navbar/Menu";
import Home from "./Home";
import Login from "./Login";
import Nominaciones from "./Nominaciones"
import Footer from './Footer'

import { connect } from "react-redux";
import * as usuariosActions from "../actions/usuariosActions";

const App = (props: any) => {

  return (
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
            render={(props2: RouteComponentProps) => {


              if (!props.user.token) {
                return (<Redirect to="/login" />)
              }


              return (<React.Fragment>
                <Menu {...props2} />
                <Nominaciones {...props2} />
                <Footer {...props2} />
              </React.Fragment>)
            }
            }
          />

        </Switch>
      </div>
    </BrowserRouter>
  );

}

const mapStateToProps = (reducers: any) => {
  return reducers.usuariosReducer;
};

export default connect(
  mapStateToProps,
  usuariosActions
)(App)