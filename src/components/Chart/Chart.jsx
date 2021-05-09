import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Bar, Line } from 'react-chartjs-2';

import { actions } from '../../redux/Summary/actions';

import styles from './Chart.module.css';

const Chart = () => {
    const { dailyData, summary } = useSelector(state => state.summaryReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.changeCountry('global'));
    }, [dispatch])

    const lineChart = (
        <Line
            data={{
                labels: dailyData.map((date) => new Date(date.Date).toLocaleDateString('vi-VN')),
                datasets: [{
                    data: dailyData.map(({ Confirmed }) => Confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: false
                },
                {
                    data: dailyData.map(({ Recovered }) => Recovered),
                    label: 'Recovered',
                    borderColor: '#3fff00',
                    fill: false
                },
                {
                    data: dailyData.map(({ Deaths }) => Deaths),
                    label: 'deaths',
                    borderColor: '#ff7f7f',
                    fill: false

                }]
            }}
        />
    );

    const barChart = (
        <Bar
            data={{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [{
                    data: [summary.totalConfirmed, summary.totalRecovered, summary.totalDeaths],
                    label: 'number of people',
                    borderColor: [
                        'rgb(51, 51, 255)',
                        'rgb(51, 255, 51)',
                        'rgb(255, 51, 51)'

                    ],
                    backgroundColor: [
                        'rgba(51, 51, 255 ,0.2)',
                        'rgba(51, 255, 51, 0.2)',
                        'rgba(255, 51, 51, 0.2)'
                    ],
                    borderWidth: 1,
                }]
            }}
        />
    )

    const draw = () => {
        if (dailyData.length > 0)
            return lineChart;
        else
            return 'No data'
    }

    return (
        <div className={styles.container}>
            <div className={styles.chart}>
                {
                    draw()
                }
            </div>
            <div className={styles.chart}>
                {barChart}
            </div>
        </div>
    )
}

export default Chart;