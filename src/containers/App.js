import React, { lazy, Suspense } from 'react';
import { makeStyles } from '@material-ui/styles';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import LoadingPage from '../common/pages/loading/LoadingPage';

const Home = lazy(() => import('./home/Home'));
const Countries = lazy(() => import('./countries/Countries'));

const useStyles = makeStyles(theme => ({
  loading: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.background.default,
    height: '100%',
    width: '100%',
  },
  root: {
    height: '100%',
    width: '100%',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <BrowserRouter>
        <Suspense fallback={<LoadingPage />}>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/countries/:countryCode" component={Countries} />
            <Route render={() => <Redirect to="/home" />} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
