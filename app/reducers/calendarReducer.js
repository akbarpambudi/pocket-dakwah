import createReducer from '../lib/createReducer';
import { SET_SELECTED_DATE } from './../actions/types';


const initialState = {
    selectedDate:{
        date: null,
        dateString:null
    }
};


export const calendarReducer = createReducer(initialState,{
    [SET_SELECTED_DATE](state,action){
        return {...state,selectedDate:{date:action.date,dateString:action.dateString}};
    }
});
