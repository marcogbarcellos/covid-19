import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Grid, Typography, useMediaQuery, makeStyles } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  title: {
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(4),
  },
}));

function CountryBarChart({ title, data, names }) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Grid item container xs={12}>
      <Grid item xs={12} container className={classes.title}>
        <Typography variant="h2">{title}</Typography>
      </Grid>
      <Grid item xs={12} container>
        <ResponsiveContainer width={matches ? '75%' : '100%'} aspect={9.0 / 3.0}>
          <BarChart data={data}>
            <CartesianGrid />
            <XAxis dataKey="updateAt" />
            <YAxis />
            <Tooltip />
            <Legend />
            {names &&
              names.map(country => (
                <Bar type="monotone" dataKey={country} fill={'#' + ((Math.random() * 0xffffff) << 0).toString(16)} />
              ))}
          </BarChart>
        </ResponsiveContainer>
      </Grid>
    </Grid>
  );
}

export default CountryBarChart;
