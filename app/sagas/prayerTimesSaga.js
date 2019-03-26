import { select,put } from 'redux-saga/effects';
import * as _ from 'lodash';
import { getPrayerTime } from '../utils/prayerTimeUtils';
import { setPrayerTime } from './../actions/prayerTimeActions';

export const getAppCoordinates = (state)=> state.application.coordinates;
export const getSelectedDate = (state)=> state.calendar.selectedDate.date;
export function* changePrayerTimes(){
    const currentAppCoordinates = yield select(getAppCoordinates);
    const selectedDate = yield select(getSelectedDate);
    console.log(selectedDate);
    if(!currentAppCoordinates){
        throw new Error('`coordinates` is empty');
    }
    if(!selectedDate){
        throw new Error('`selectedDate` is empty');
    }

    const prayers = getPrayerTime(selectedDate,[currentAppCoordinates.latitude,currentAppCoordinates.longitude]);
    const prayerTimes = _.map(_.keys(prayers),(prayerName)=>{
        return {name: prayerName,time:prayers[prayerName]};
    });
    for(let i = 0; i< prayerTimes.length;i++){
        try{
            yield put(setPrayerTime(prayerTimes[i].name,prayerTimes[i].time));
        }catch(err){
            console.warn(err);
        }
    }
}