import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Grid, Typography } from '@material-ui/core';

function CountryBarChart({ title, data, names }) {
  return (
    <Grid item container lg={12} alignItems="center" justify="center">
      <Grid item xs={12} container alignItems="center" justify="center">
        <Typography variant="h2">{title}</Typography>
      </Grid>
      <Grid item xs={12} container alignItems="center" justify="center">
        <ResponsiveContainer width="75%" aspect={9.0 / 3.0}>
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid /* strokeDasharray="3 3"  */ />
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
