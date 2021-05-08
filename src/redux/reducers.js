import {combineReducers} from 'redux';
import summaryReducer from './Summary/reducer';

const rootReducer = combineReducers({
    summaryReducer
})

export default rootReducer;