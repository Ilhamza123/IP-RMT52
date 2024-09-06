import { createStore } from 'redux';
import { SET_TEKNIKS, SET_ERROR } from '../../src/redux/actionTypes';

const initialState = {
    tekniks: [],
    error: null,
};

const sabukReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TEKNIKS:
            return { ...state, tekniks: action.payload };
        case SET_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

const store = createStore(sabukReducer);
export default store;