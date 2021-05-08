import { all, put, takeEvery, fork } from 'redux-saga/effects';
import { actions, types } from './actions';
import { fetchDataSummary, fetchDailyDataGlobal, fetchDailyDataCountry } from '../../api';

function* saga_changeCountry(action) {
    try {

        let summary = {};
        let dailyData = [];
        let country = action.payload.country;

        var today = new Date();
        today.setMinutes(0);
        today.setSeconds(0);
        today.setMilliseconds(0);

        var to = new Date(today).toISOString();
        var from = new Date(today.setMonth(today.getMonth() - 1)).toISOString();

        summary = yield fetchDataSummary(country);

        if (country === 'global') {
            dailyData = yield fetchDailyDataGlobal(from, to);
            dailyData = dailyData.map((item) => {return {
                Confirmed: item.TotalConfirmed,
                Recovered: item.TotalRecovered,
                Deaths: item.TotalDeaths,
                Date: item.Date
            }});
            
        }
        else {
            dailyData = yield fetchDailyDataCountry(from, to, country);
        }

        dailyData.sort((a, b) => new Date(a.Date) - new Date(b.Date));

        yield put(actions.updateState({ country, summary, dailyData }));
    }
    catch (err) {
        console.log(err)
    }
}

function* listen() {
    yield takeEvery(types.COUNTRY_SELECTED, saga_changeCountry)
}

export default function* summarySaga() {
    yield all([fork(listen)])
}