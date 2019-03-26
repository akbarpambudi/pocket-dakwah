/* 
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as loginReducer from './loginReducer';
import { applicationReducer } from './applicationReducer';
import { prayerTimeReducer } from './prayerReducer';
import { calendarReducer } from './calendarReducer';
export default Object.assign(loginReducer, loadingReducer,{application:applicationReducer,prayer:prayerTimeReducer,calendar:calendarReducer});
