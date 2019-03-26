import createReducer from '../lib/createReducer';

const initialState = {
    fajr: false,
    dhuhr:false,
    asr:false,
    maghrib:false,
    isha:false,     
};

export const prayerReminderReducer = createReducer(initialState,{

});