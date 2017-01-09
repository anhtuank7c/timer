import ActionTypes from '../constant/ActionTypes';

export const changeHour = ({ hour, minute }) => {
    return {
        type: ActionTypes.CHANGE_HOUR,
        hour,
        minute
    };
};

export const changeMinute = ({ hour, minute }) => {
    return {
        type: ActionTypes.CHANGE_MINUTE,
        hour,
        minute
    };
};

export const changeRingTone = ({ ringTone }) => {
    return {
        type: ActionTypes.CHANGE_RING_TONE,
        payload: ringTone
    };
};

export const cancelPress = () => {
    return {
        type: ActionTypes.CANCEL_PRESS
    };
};

export const startPress = ({ hour, minute, totalTime, remaining }) => {
    return {
        type: ActionTypes.START_PRESS,
        totalTime,
        hour,
        minute,
        remaining
    };
};

export const pausePress = () => {
    return {
        type: ActionTypes.PAUSE_PRESS,
    };
};

export const updateRemainingTime = ({ remaining }) => {
    console.log('updateRemainingTime', remaining);
    return {
        type: ActionTypes.UPDATE_REMAINING_TIME,
        payload: remaining
    };
};
