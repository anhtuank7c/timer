import {
    CHANGE_HOUR,
    CHANGE_MINUTE,
    CHANGE_RING_TONE,
    CANCEL_PRESS
} from '../actions/types';

import data from './list.json';

const INITIAL = {
    hour: 0,
    minute: 1,
    hourList: data.hourList,
    minuteList: data.minuteList,
    ringTone: data.ringTone,
    ringToneList: data.ringToneList,
};

export default (state = INITIAL, action) => {
    switch (action.type) {
        case CHANGE_HOUR:
            return { ...state, hour: action.payload };
        case CHANGE_MINUTE:
            return { ...state, minute: action.payload };
        case CHANGE_RING_TONE:
            return { ...state, ringTone: action.payload };
        case CANCEL_PRESS:
            return INITIAL;
        default:
            return state;
    }
};
