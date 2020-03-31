import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Grid, Typography, useMediaQuery, makeStyles } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  title: {
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(4),
  },
}));

function CountryLineChart({ title, data, names }) {
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
          <LineChart data={data}>
            <CartesianGrid />
            <XAxis dataKey="updateAt" />
            <YAxis />
            <Tooltip />
            <Legend />
            {names &&
              names.map(country => (
                <Line
                  type="monotone"
                  dataKey={country}
                  stroke={'#' + ((Math.random() * 0xffffff) << 0).toString(16)}
                  strokeWidth={4}
                  activeDot={{ r: 8 }}
                />
              ))}
          </LineChart>
        </ResponsiveContainer>
      </Grid>
    </Grid>
  );
}

export default CountryLineChart;
