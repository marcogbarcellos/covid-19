import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from './AppBar';
import clsx from 'clsx';
import GitHubIcon from '@material-ui/icons/GitHub';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';
import { Typography, Link } from '@material-ui/core';

const styles = theme => ({
  title: {
    fontSize: 24,
    color: theme.palette.primary.main,
  },
  logoWrapper: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.common.white,
    alignItems: 'center',
    height: '73px',
    flexShrink: 0,
  },
  placeholder: toolbarStyles(theme).root,
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(4),
    color: theme.palette.primary.main,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  toolbar: {
    background: '#f7f7f8',
  },
  logoImage: {
    height: '80%',
    cursor: 'pointer',
  },
  logoText: {
    color: theme.palette.common.black,
    fontFamily: 'Montserrat,sans-serif',
    cursor: 'pointer',
    fontSize: '2em',
    fontWeight: '900',
    lineHeight: 1.125,
    margin: 0,
    marginRight: 16,
  },
  desc: {
    color: 'black',
  },
  githubIcon: {
    color: 'black',
    width: 32,
    height: 32,
    cursor: 'pointer',
  },
});

function AppAppBar(props) {
  const { classes, history } = props;

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <Typography className={classes.logoText} onClick={() => history.push('/')}>
            Covid-19
          </Typography>
          <div className={classes.right}>
            <Typography className={classes.desc} variant="body1">
              data provided by:
            </Typography>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              target="_blank"
              onClick={() => window.open('https://about-corona.net/', '_blank')}
            >
              {'about-corona'}
            </Link>

            <GitHubIcon
              className={classes.githubIcon}
              onClick={() => window.open('https://github.com/marcogbarcellos', '_blank')}
            />
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);
