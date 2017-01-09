import ActionTypes from '../constant/ActionTypes';

export const changeHour = ({ hour }) => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.CHANGE_HOUR,
            payload: hour
        });
    };
};

export const changeMinute = ({ minute }) => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.CHANGE_MINUTE,
            payload: minute
        });
    };
};

export const changeRingTone = ({ ringTone }) => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.CHANGE_RING_TONE,
            payload: ringTone
        });
    };
};

export const cancelCountDown = () => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.CANCEL_PRESS
        });
    };
};

export const startCountDown = () => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.START_PRESS
        });
    };
};

export const pauseCountDown = () => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.PAUSE_PRESS
        });
    };
};
