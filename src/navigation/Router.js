import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Route, Switch, withRouter} from 'react-router-dom';

import {ExampleComponent, Example2Component} from '../components/pages';
import * as ROUTES from './routes';

// eslint-disable-next-line
const RouterComponent = ({token}) => {
  const loginedConfig = [
    {
      id: 'exampleRoute',
      path: ROUTES.EXAMPLE_ROUTE,
      component: ExampleComponent,
      exact: true,
    },
  ];
  const notLoginedConfig = [
    {
      id: 'root',
      path: ROUTES.ROOT,
      component: ExampleComponent,
      exact: true,
    },
    {
      id: 'example2',
      path: ROUTES.EXAMPLE_ROUTE2,
      component: Example2Component,
      exact: true,
    },
  ];
  const config = token ? loginedConfig : notLoginedConfig;

  return (
    <Switch>
      {config.map(route => (
        <Route
          key={route.id}
          path={route.path}
          component={route.component}
          exact={!!route.exact}
        />
      ))}
      {/*{ token ? <Redirect from="/" to="/profile" /> : <Redirect from="/profile" to="/" />}*/}

      {/*<Route path='*' component={NoMatch}/>*/}

    </Switch>
  );
};

RouterComponent.propTypes = {
  //token: PropTypes.string,
};

const mapStateToProps = () => ({
  //token: auth.token,
  token: false,
});

export default withRouter(connect(mapStateToProps)(RouterComponent));
