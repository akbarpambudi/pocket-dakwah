/**
 *  Redux saga class init
 */
import { takeEvery, all, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/types';
import { changePrayerTimes } from './prayerTimesSaga';

export default function* watch() {
    // yield all([takeEvery(types.LOGIN_REQUEST, loginSaga)]);
    yield all([takeEvery(types.PRAYER_TIMES_REQUESTED,changePrayerTimes)
        ,takeLatest(types.SET_SELECTED_DATE,changePrayerTimes)
        ,takeLatest(types.SET_APP_COORDINATES,changePrayerTimes)
    ]); 
}
