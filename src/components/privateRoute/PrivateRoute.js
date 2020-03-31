import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_USER_AUTHENTICATION } from '../../graphql/auth/queries';
import Cookies from 'js-cookie';

function PrivateRoute({ component: Component, ...rest }) {
  const { data, client } = useQuery(GET_USER_AUTHENTICATION);

  client.writeData({
    data: {
      isAuthenticated: !!Cookies.get('jwt'),
    },
  });

  return (
    <Route
      {...rest}
      render={props =>
        data && data.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { referrer: props.location, match: props.match },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
