import React from 'react';

import { Cards, Chart, CountryPicker } from './components';

import styles from './App.module.css';

import MessengerCustomerChat from 'react-messenger-customer-chat';

const App = () => {
    return (
        <div className={styles.container}>
            <Cards />
            <CountryPicker />
            <Chart />
            <MessengerCustomerChat pageId='105017101884579' appId='559855615148554' />
        </div>
    )
}

export default App;