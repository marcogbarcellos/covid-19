import React, { useEffect, useState } from 'react';
import AppAppBar from '../../components/AppAppBar';
import LoadingPage from '../../common/pages/loading/LoadingPage';
import { orderBy } from 'lodash';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/styles';
import { Tooltip, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableRow: {
    cursor: 'pointer',
  },
});

function Home({ history }) {
  const classes = useStyles();
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch('https://corona-api.com/countries')
      .then(response => {
        return response.json();
      })
      .then(json => {
        const countries = json && json.data;
        if (countries) {
          setStats(
            orderBy(
              countries.map(country => ({
                country: country.name,
                countryCode: country.code,
                population: country.population,
                todayDeaths: country.today && country.today.deaths,
                todayCases: country.today && country.today.confirmed,
                allDeaths: country.latest_data && country.latest_data.deaths,
                allCases: country.latest_data && country.latest_data.confirmed,
                allRecovered: country.latest_data && country.latest_data.recovered,
                allCritical: country.latest_data && country.latest_data.critical,
              })),
              'allCases',
              'desc'
            )
          );
        }
      });
  }, []);

  if (!stats) return <LoadingPage />;
  return (
    <>
      <AppAppBar history={history} />
      <Grid container justify="center" alignItems="center">
        <Grid item xs={10} container justify="center" alignItems="center">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Country</TableCell>
                  <TableCell>All cases</TableCell>
                  <TableCell>All deaths</TableCell>
                  <TableCell>Cases today</TableCell>
                  <TableCell>Deaths today</TableCell>
                  <TableCell>Recovered people</TableCell>
                  <TableCell>Critical cases</TableCell>
                  <TableCell>Population</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {stats.map(row => (
                  <TableRow
                    key={row.name}
                    hover={true}
                    className={classes.tableRow}
                    onClick={() => history.push(`/countries/${row.countryCode}`)}
                  >
                    <TableCell component="th" scope="row">
                      <Tooltip title={row.country}>
                        <img alt="sd" src={`https://www.countryflags.io/${row.countryCode}/shiny/64.png`} />
                      </Tooltip>
                    </TableCell>
                    <TableCell align="center">
                      {row.allCases && row.allCases.toLocaleString(undefined, { minimumFractionDigits: 0 })}
                    </TableCell>
                    <TableCell align="center">
                      {row.allDeaths && row.allDeaths.toLocaleString(undefined, { minimumFractionDigits: 0 })}
                    </TableCell>
                    <TableCell align="center">
                      {row.todayCases && row.todayCases.toLocaleString(undefined, { minimumFractionDigits: 0 })}
                    </TableCell>
                    <TableCell align="center">
                      {row.todayDeaths && row.todayDeaths.toLocaleString(undefined, { minimumFractionDigits: 0 })}
                    </TableCell>
                    <TableCell align="center">
                      {row.allRecovered && row.allRecovered.toLocaleString(undefined, { minimumFractionDigits: 0 })}
                    </TableCell>
                    <TableCell align="center">
                      {row.allCritical && row.allCritical.toLocaleString(undefined, { minimumFractionDigits: 0 })}
                    </TableCell>
                    <TableCell align="center">
                      {row.population && row.population.toLocaleString(undefined, { minimumFractionDigits: 0 })}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
