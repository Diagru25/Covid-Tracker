import React, { useEffect, useState } from 'react';

import { fetchDailyData } from '../../api';

import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = () => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        async function fetchAPI() {

            var today = new Date();
            today.setMinutes(0);
            today.setSeconds(0);
            today.setMilliseconds(0);

            var to = new Date(today).toISOString();
            var from = new Date(today.setMonth(today.getMonth() - 1)).toISOString();

            const fetchedData = await fetchDailyData(from, to);
            setDailyData(fetchedData.sort((a, b) => new Date(a.Date) - new Date(b.Date)));

        }
        fetchAPI();
    }, [])

    const lineChart = (
        dailyData[0]
            ?
            (<Line
                data={{
                    labels: dailyData.map((date) => new Date(date.Date).toLocaleDateString('vi-VN')),
                    datasets: [{
                        data: dailyData.map(({ TotalConfirmed }) => TotalConfirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: false
                    },
                    {
                        data: dailyData.map(({ TotalRecovered }) => TotalRecovered),
                        label: 'Recovered',
                        borderColor: '#3fff00',
                        fill: false
                    },
                    {
                        data: dailyData.map(({ TotalDeaths }) => TotalDeaths),
                        label: 'deaths',
                        borderColor: '#ff7f7f',
                        fill: false

                    }]
                }}
            />) : null
    );

    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Chart;