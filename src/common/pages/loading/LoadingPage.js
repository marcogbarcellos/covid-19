import React from 'react';
import { makeStyles } from '@material-ui/styles';
import StyledCircularProgress from '../../components/circularProgress/StyledCircularProgress';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    height: '500px',
    width: '100%',
  },
  container: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

function LoadingPage({ size = 55 }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <StyledCircularProgress size={size} />
      </div>
    </div>
  );
}

export default LoadingPage;
