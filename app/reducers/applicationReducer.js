import createReducer from '../lib/createReducer';
import { SET_APP_COORDINATES } from '../actions/types';

const initialState = {
    coordinates: null
};

export const applicationReducer = createReducer(initialState,{
    [SET_APP_COORDINATES](state,action){
        console.log(action);
        return {...state,coordinates: action.coordinates};
    }
});