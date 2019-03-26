import { SET_SELECTED_DATE } from './types';
import moment from 'moment';
import * as _ from 'lodash';

export function setSelectedDate(date)
{   
    if(!_.isDate(date)) throw new Error('`date` must be an instance of Date');
    return {
        type: SET_SELECTED_DATE,
        date,
        dateString: moment(date).format('YYYY-MM-DD')
    };
}