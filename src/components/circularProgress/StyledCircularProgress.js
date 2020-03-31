import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.secondaryaccent,
  },
}));

function StyledCircularProgress(props) {
  const classes = useStyles();
  return <CircularProgress size={30} classes={{ root: classes.root }} {...props} />;
}

StyledCircularProgress.propTypes = {
  props: PropTypes.object,
};

export default StyledCircularProgress;
