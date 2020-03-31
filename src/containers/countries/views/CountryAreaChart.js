import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Grid, Typography, makeStyles, Slider } from '@material-ui/core';
import moment from 'moment';

const useStyles = makeStyles(theme => ({
  title: {
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(4),
  },
}));

function CountryAreaChart({ title, data, countries }) {
  const classes = useStyles();
  const [dates, setDates] = React.useState([0, data.length - 1]);
  const [filteredData, setFilteredData] = React.useState(data);
  const handleChangeDateRange = (event, newValue) => {
    setFilteredData(data.slice(newValue[0], newValue[1]));
    setDates(newValue);
  };

  const marks = data.map((item, index) => ({ value: index, label: moment(item.date).format('MMM-DD') }));
  const firstMiddleAndLastMarks = [marks[0], marks[Math.round((marks.length - 1) / 2)], marks[marks.length - 1]];
  function valuetext(value) {
    return moment(data[value].date).format('MMM-DD');
  }

  return (
    <Grid item container xs={12}>
      <Grid item xs={12} container className={classes.title}>
        <Typography variant="h2">{title}</Typography>
      </Grid>
      <Grid item xs={12} container>
        <Grid item xs={10} container>
          <ResponsiveContainer width="100%" aspect={9.0 / 3.0}>
            <AreaChart data={filteredData}>
              <CartesianGrid />
              <XAxis dataKey="updateAt" />
              <YAxis />
              <Tooltip />
              <Legend />
              {countries &&
                countries.map((country, index) => {
                  return (
                    <Area
                      type="monotone"
                      dataKey={country.name}
                      stackId={index}
                      stroke={country.color}
                      fill={country.color}
                    />
                  );
                })}
            </AreaChart>
          </ResponsiveContainer>
        </Grid>
        <Grid item xs={2} container justify="center" alignItems="center">
          <Slider
            orientation="vertical"
            value={dates}
            onChange={handleChangeDateRange}
            valueLabelDisplay="auto"
            min={0}
            max={data.length - 1}
            step={1}
            aria-labelledby="date-range-slider"
            getAriaValueText={valuetext}
            marks={firstMiddleAndLastMarks}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CountryAreaChart;
