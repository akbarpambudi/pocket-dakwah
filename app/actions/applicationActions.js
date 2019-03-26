import * as _ from 'lodash';
import { SET_APP_COORDINATES } from './types';
export function setAppCoordinates(coordinates){
    // eslint-disable-next-line no-console
    console.log(coordinates);
    const isValidCoordinates = (coordinates)=> _.has(coordinates,'latitude') && _.has(coordinates,'longitude');
    if(!isValidCoordinates(coordinates)){
        throw new Error('`coordinates` must have `latitude` and `longitude` properties');
    } 
    return {
        type: SET_APP_COORDINATES,
        coordinates
    };
}