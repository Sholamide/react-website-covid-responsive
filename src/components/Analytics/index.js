import React, { useState, useEffect } from 'react'
import {
    AnalyticsContainer,
    AnalyticsWrapper,
    InfoRow,
    Column1,
    Column2,
    AnalyticsH1
} from './AnalyticsElements';
import { Select, FormControl } from '@material-ui/core';
import styles from './analytics.module.css';
import { fetchCountries } from '../Api';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import Cx from 'classnames';
import { Bar } from 'react-chartjs-2';


const Analytics = ({ handleCountryChange, data: { confirmed, recovered, deaths, lastUpdate }, country }) => {

    const [fetchedCountries, setFetchedCountries] = useState([])

    const barChart = (
        confirmed
            ?
            (
                <Bar
                    data={{
                        labels: ['Infected', 'Recovered', 'Deaths'],
                        datasets: [{
                            label: 'People',
                            backgroundColor: [
                                'rgba(0,0,255,0.5)',
                                'rgba(0,255,0,0.5)',
                                'rgba(255,0,0,0.5)'
                            ],
                            data: [confirmed.value, recovered.value, deaths.value]
                        }]
                    }}
                    options={{
                        legend: { display: false },
                        title: { display: true, text: `Current state in ${country}` },
                    }}
                />
            ) : null
    );

    useEffect(() => {
        const fetchCountriesAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetchCountriesAPI();
    }, [setFetchedCountries]);

    console.log(fetchedCountries);

    if (!confirmed) {
        return 'Loading.......';
    }


    return (
        <>
            <div className={styles.container}>
                <AnalyticsH1>
                    Analytics
            </AnalyticsH1>
                <FormControl variant="outlined" className={styles.formControl}>
                    <Select
                        native
                        onChange={(e) => handleCountryChange(e.target.value)}
                        //label = "Select Country"
                        inputProps={{
                            name: 'country',
                            id: 'country-picker-simple',
                        }}
                    >
                        <option value="">Global</option>
                        {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                    </Select>
                </FormControl>
                <InfoRow>
                    <Column1>
                        <Grid container spacing={3} justify="center">
                            <Grid item component={Card} xs={12} md={3} className={Cx(styles.card, styles.infected)}>
                                <CardContent>
                                    <Typography color='textSecondary' gutterBottom>Infected</Typography>
                                    <Typography variant='h5'>
                                        <CountUp
                                            start={0}
                                            end={confirmed.value}
                                            duration={2}
                                            separator=','
                                        />
                                    </Typography>
                                    <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                                    <Typography variant='body2'>Number of active cases of COVID-19</Typography>
                                </CardContent>
                            </Grid>

                            <Grid item component={Card} xs={12} md={3} className={Cx(styles.card, styles.recovered)}>
                                <CardContent>
                                    <Typography color='textSecondary' gutterBottom>Recovered</Typography>
                                    <Typography variant='h5'>
                                        <CountUp
                                            start={0}
                                            end={recovered.value}
                                            duration={2}
                                            separator=','
                                        />
                                    </Typography>
                                    <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                                    <Typography variant='body2'>Number of recovered COVID-19 cases</Typography>
                                </CardContent>
                            </Grid>

                            <Grid item component={Card} xs={12} md={3} className={Cx(styles.card, styles.deaths)}>
                                <CardContent>
                                    <Typography color='textSecondary' gutterBottom>Death</Typography>
                                    <Typography variant='h5'>
                                        <CountUp
                                            start={0}
                                            end={deaths.value}
                                            duration={2}
                                            separator=','
                                        />
                                    </Typography>
                                    <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                                    <Typography variant='body2'>Number of deaths caused of COVID-19</Typography>
                                </CardContent>
                            </Grid>
                        </Grid>
                    </Column1>
                    <Column2>
                        {barChart}
                    </Column2>
                </InfoRow>
            </div>
        </>
    )
}

export default Analytics
