import {all} from 'redux-saga/effects';

import summarySaga from './Summary/saga';

export default function* rootSaga(){
    yield all([
        summarySaga()
    ])
}

