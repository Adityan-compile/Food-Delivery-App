import { AuthGuard, RouteGuard } from './guards';
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes as Switch,
} from 'react-router-dom';
import React, { Fragment, useEffect, useState } from 'react';

import Context from '../store/context';
import Header from '../components/Header';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Provider from '../store/providers';
import Signup from '../screens/Signup';

function Routes() {
  const [user, setUser] = useState({
    authenticated: false,
  });

  useEffect(() => {
    Provider.getAuthState().then((res) => {
      setUser(res);
    });
  }, []);

  return (
    <Router>
      <Fragment>
        <Context.Provider value={(Provider, user)}>
          <Switch>
            {user.authenticated && <Header />}
            <Route
              exact
              path={'/login'}
              element={
                <AuthGuard user={user}>
                  <Login />
                </AuthGuard>
              }
            ></Route>
            <Route
              exact
              path={'/register'}
              element={
                <AuthGuard user={user}>
                  <Signup />
                </AuthGuard>
              }
            ></Route>
            {'Private Routes'}
            <Route exact path={'/'} element={<Navigate to={'/dashboard'} />} />
            <Route
              exact
              path={'/dashboard'}
              element={
                <RouteGuard user={user}>
                  <Home />
                </RouteGuard>
              }
            ></Route>
          </Switch>
        </Context.Provider>
      </Fragment>
    </Router>
  );
}

export default Routes;
