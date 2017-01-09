import ActionTypes from '../constant/ActionTypes';
import data from './list.json';

const INITIAL = {
    hour: 0,
    minute: 1,
    hourList: data.hourList,
    minuteList: data.minuteList,
    ringTone: data.ringTone,
    ringToneList: data.ringToneList,
    btnCancelDisabled: true,
    btnStartPauseLabel: 'Start',
};

export default (state = INITIAL, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_HOUR: {
            let { minute } = state;
            if (action.payload === 0 && minute === 0) {
                minute = 1;
            }
            return { ...state, hour: action.payload, minute };
        }
        case ActionTypes.CHANGE_MINUTE: {
            let minute = 1;
            if (state.hour >= 1) {
                minute = action.payload;
            }
            return { ...state, minute };
        }
        case ActionTypes.CHANGE_RING_TONE:
            return { ...state, ringTone: action.payload };
        case ActionTypes.CANCEL_PRESS:
            return INITIAL;
        case ActionTypes.START_PRESS:
            return { ...state, btnCancelDisabled: false, btnStartPauseLabel: 'Pause' };
        case ActionTypes.PAUSE_PRESS:
            return { ...state, btnCancelDisabled: false, btnStartPauseLabel: 'Start' };
        default:
            return state;
    }
};
