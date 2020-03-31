import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Grid, Typography } from '@material-ui/core';

function CountryAreaChart({ title, data, names }) {
  return (
    <Grid item container lg={12} alignItems="center" justify="center">
      <Grid item xs={12} container alignItems="center" justify="center">
        <Typography variant="h2">{title}</Typography>
      </Grid>
      <Grid item xs={12} container alignItems="center" justify="center">
        <ResponsiveContainer width="75%" aspect={9.0 / 3.0}>
          <AreaChart
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
