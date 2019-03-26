import { SET_PRAYER_TIME } from '../actions/types';
import createReducer from './../lib/createReducer';

const initialState = {
    fajr: null,
    dhuhr:null,
    asr:null,
    maghrib:null,
    isha:null,     
};

export const prayerTimeReducer = createReducer(initialState,{
    [SET_PRAYER_TIME](state,action){
        return {...state,[action.key]:action.value};
    }
});