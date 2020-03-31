import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    height: 'calc(100% - 64px)',
  },
  errorContainer: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  },
}));

function ErrorPage({ error }) {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <div className={classes.errorContainer}>
        <Typography>Oops</Typography>
        <Typography>{t('something went wrong...')}</Typography>
        <Typography>{error}</Typography>
      </div>
    </div>
  );
}

ErrorPage.propTypes = {
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default ErrorPage;
