import { SET_TEKNIKS, SET_ERROR } from '../../src/redux/actionTypes';

export const setTekniks = (tekniks) => ({
    type: SET_TEKNIKS,
    payload: tekniks,
});

export const setError = (error) => ({
    type: SET_ERROR,
    payload: error,
});
