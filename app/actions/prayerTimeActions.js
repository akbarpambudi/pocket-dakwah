import * as _ from 'lodash';
import { SET_PRAYER_TIME, PRAYER_TIMES_REQUESTED } from './types';

export function setPrayerTime(key,value){
    console.log(key);
    const validKeys = ['fajr','dhuhr','asr','maghrib','isha'];
    const validateKey = (key)=> _.reduce(validKeys,(isValid,validKey)=> isValid|| _.toLower(key) === validKey,false);
    if(validateKey(key)){      
        return {
            type: SET_PRAYER_TIME,
            key,
            value
        };
    }
}

export function requestPrayerTimes(){
    return {
        type: PRAYER_TIMES_REQUESTED
    };
}