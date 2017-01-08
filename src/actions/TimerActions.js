import {
    CHANGE_HOUR,
    CHANGE_MINUTE,
    CHANGE_RING_TONE,
    CANCEL_PRESS,
    START_PRESS,
    PAUSE_PRESS,
} from './types';

export const changeHour = ({ hour }) => {
    return (dispatch) => {
        dispatch({
            type: CHANGE_HOUR,
            payload: hour
        });
    };
};

export const changeMinute = ({ minute }) => {
    return (dispatch) => {
        dispatch({
            type: CHANGE_MINUTE,
            payload: minute
        });
    };
};

export const changeRingTone = ({ ringTone }) => {
    return (dispatch) => {
        dispatch({
            type: CHANGE_RING_TONE,
            payload: ringTone
        });
    };
};

export const cancelCountDown = () => {
    return (dispatch) => {
        dispatch({
            type: CANCEL_PRESS
        });
    };
};

export const startCountDown = () => {
    return (dispatch) => {
        dispatch({
            type: START_PRESS
        });
    };
};

export const pauseCountDown = () => {
    return (dispatch) => {
        dispatch({
            type: PAUSE_PRESS
        });
    };
};
