import {
    CHANGE_HOUR,
    CHANGE_MINUTE,
    CHANGE_RING_TONE
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
