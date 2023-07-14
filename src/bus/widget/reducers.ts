// Types
import * as types from './types';

export const setId: types.BaseContact<string> = (state, action) => {
    return {
        ...state,
        currentId: action.payload,
    };
};

export const setCards: types.SetCardsContract = (state, action) => {
    return {
        ...state,
        cards: action.payload,
    };
};

export const getCards = () => { /* empty */ };

export const setLoaderOn = (state:types.WidgetState) => {
    return {
        ...state,
        loading: true,
    };
};

export const setLoaderOff = (state: types.WidgetState) => {
    return {
        ...state,
        loading: false,
    };
};

export const setCurrentWeather: types.BaseContact<types.Card> = (state, action) => {
    return {
        ...state,
        currentWeather: action.payload,
    };
};
