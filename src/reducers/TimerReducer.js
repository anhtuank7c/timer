import {
    CHANGE_HOUR,
    CHANGE_MINUTE,
    CHANGE_RING_TONE
} from '../actions/types';

const INITIAL = {
    hour: 0,
    minute: 1,
    ringTone: '../../assets/faded.mp3'
};

export default (state = INITIAL, action) => {
    switch (action.type) {
        case CHANGE_HOUR:
            return { ...state, hour: action.payload };
        case CHANGE_MINUTE:
            return { ...state, minute: action.payload };
        case CHANGE_RING_TONE:
            return { ...state, ringTone: action.payload };
        default:
            return state;
    }
}