import ActionTypes from '../constant/ActionTypes';
import data from './list.json';

const INITIAL = {
    hour: 0,
    minute: 1,
    totalTime: 0,
    remaining: 0,
    showAlert: false,
    pause: false,
    hourList: data.hourList,
    minuteList: data.minuteList,
    ringTone: data.ringTone,
    tmpRingTone: data.ringTone,
    ringToneList: data.ringToneList,
    btnCancelDisabled: true,
    btnStartPauseLabel: 'Start',
};

export default (state = INITIAL, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_HOUR: {
            let { minute } = action;
            const { hour } = action;
            // If hour = 0 and minute = 0, set minute to minimum 1
            if (hour === 0 && minute === 0) {
                minute = 1;
            }
            return { ...state, hour, minute };
        }
        case ActionTypes.CHANGE_MINUTE: {
            let { minute } = action;
            const { hour } = action;
            // If hour = 0 and minute = 0, set minute to minimum 1
            if (hour === 0 && minute === 0) {
                minute = 1;
            }
            return { ...state, minute };
        }
        case ActionTypes.CHOOSING_RING_TONE:
            return { ...state, tmpRingTone: action.payload };
        case ActionTypes.CHANGE_RING_TONE:
            return { ...state, ringTone: action.payload };
        case ActionTypes.CANCEL_PRESS: {
            const { hour, minute } = action;
            // Stop count down, but keep latest value of hour, minute
            return { ...state, ...INITIAL, hour, minute };
        }
        case ActionTypes.START_PRESS: {
            const { hour, minute, totalTime, remaining } = action;
            return {
                ...state,
                btnCancelDisabled: false,
                btnStartPauseLabel: 'Pause',
                pause: false,
                totalTime,
                hour,
                minute,
                remaining
            };
        }
        case ActionTypes.PAUSE_PRESS: {
            return {
                ...state,
                btnStartPauseLabel: 'Resume',
                pause: true
            };
        }
        case ActionTypes.UPDATE_REMAINING_TIME:
            return {
                ...state,
                remaining: action.payload
            };

        case ActionTypes.SHOW_ALERT:
            return {
                ...state,
                showAlert: true,
                btnCancelDisabled: true,
                btnStartPauseLabel: 'Start',
                pause: false,
                totalTime: 0
            };
        default:
            return state;
    }
};
