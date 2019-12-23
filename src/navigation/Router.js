import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';

import {
  LoginContainer,
  Example,
} from '../components/pages';

import * as ROUTES from './routes';
// import MainLayout from "../components/common/MainLayout/MainLayout";

// eslint-disable-next-line
const RouterComponent = ({token}) => {
  const loginedConfig = [
    {
      id: 'example',
      path: ROUTES.EXAMPLE,
      component: Example,
      exact: true,
    },
  ];
  const notLoginedConfig = [
    {
      id: 'login',
      path: ROUTES.LOGIN,
      component: LoginContainer,
      exact: true,
    },
  ];
  const config = token ? notLoginedConfig : loginedConfig;

  return (
    <Switch>
      {config.map(route => (
        <Route
          key={route.id}
          path={route.path}
          render={routeProps => {
            const Component = route.component;
            if (route.withoutLayout) {
              return <Component/>;
            }
            if (token) {
              // return (<MainLayout><Component/></MainLayout>);
              return (<Component/>);
            }
            return <Component {...routeProps}/>;
          }
          }
          exact={!!route.exact}
        />
      ))}
      <Redirect to={{pathname: token ? ROUTES.LOGIN : ROUTES.EXAMPLE}}/>
    </Switch>
  );
};

const mapStateToProps = () => ({
  // token: auth.token,
  token: 'token',
});

export default withRouter(connect(mapStateToProps)(RouterComponent));
