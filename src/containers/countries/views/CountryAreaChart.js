import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Grid, Typography, useMediaQuery, makeStyles } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  title: {
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(4),
  },
}));

function CountryAreaChart({ title, data, names }) {
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
          <AreaChart data={data}>
            <CartesianGrid />
            <XAxis dataKey="updateAt" />
            <YAxis />
            <Tooltip />
            <Legend />
            {names &&
              names.map((country, index) => {
                const strokeAndFillHex = '#' + ((Math.random() * 0xffffff) << 0).toString(16);
                return (
                  <Area
                    type="monotone"
                    dataKey={country}
                    stackId={index}
                    stroke={strokeAndFillHex}
                    fill={strokeAndFillHex}
                  />
                );
              })}
          </AreaChart>
        </ResponsiveContainer>
      </Grid>
    </Grid>
  );
}

export default CountryAreaChart;
