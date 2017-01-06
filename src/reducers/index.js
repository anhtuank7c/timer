import { combineReducers } from 'redux';
import { NavigationReducer } from '@exponent/ex-navigation';

import TimerReducer from './TimerReducer';

export default combineReducers({
    navigation: NavigationReducer,
    timer: TimerReducer
});
