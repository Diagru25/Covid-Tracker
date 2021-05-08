import React from 'react';
import { useSelector } from 'react-redux';

import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cn from 'classnames';

import styles from './Cards.module.css';


const Cards = () => {

    const {summary} = useSelector(state => state.summaryReducer);

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify='center'>
                <Grid item component={Card} xs={12} md={3} className={cn(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Infected</Typography>
                        <Typography variant='h5'>
                            <CountUp
                                start={0}
                                end={summary.totalConfirmed !== undefined ? summary.totalConfirmed : 0}
                                duration={2.5}
                                separator={','}
                            />
                        </Typography>
                        <Typography color='textSecondary'>{ new Date(summary.lastUpdate).toLocaleDateString("vi-VN")}</Typography>
                        <Typography variant='body2'>Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cn(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Recovered</Typography>
                        <Typography variant='h5' >
                            <CountUp
                                start={0}
                                end={summary.totalRecovered !== undefined ? summary.totalRecovered : 0}
                                duration={2.5}
                                separator={','}
                            />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(summary.lastUpdate).toLocaleDateString("vi-VN")}</Typography>
                        <Typography variant='body2'>Number of recovered cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cn(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Deaths</Typography>
                        <Typography variant='h5' >
                            <CountUp
                                start={0}
                                end={summary.totalDeaths !== undefined ? summary.totalDeaths : 0}
                                duration={2.5}
                                separator={','}
                            />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(summary.lastUpdate).toLocaleDateString("vi-VN")}</Typography>
                        <Typography variant='body2'>Number of deaths cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;