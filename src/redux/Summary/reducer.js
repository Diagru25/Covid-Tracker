import { types } from './actions';


const defaultSummary = {
    totalConfirmed: 0,
    totalRecovered: 0,
    totalDeaths: 0,
    newConfirmed: 0,
    newRecovered: 0,
    newDeaths: 0,
    lastUpdate: 0
}

const initialState = {
    country: 'global',

    summary: defaultSummary,

    dailyData: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_STATE:
            return {
                ...state,
                ...action.payload.state
            };
        default: return { ...state };
    }
}

export default reducer;