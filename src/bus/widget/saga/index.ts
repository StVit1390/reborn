// Core
import {
    call,
    put,
    takeLatest,
    delay,
} from 'redux-saga/effects';

// Api
import { fetchCards } from './api/fetchCards';

// Actions
import { WidgetActions } from '../slice';

// Types
import { Cards } from '../types';

export function* getCardsWorker() {
    try {
        yield put(WidgetActions.setLoaderOn());
        const response: {data: Cards} = yield call(fetchCards);
        yield put(WidgetActions.setCards(response.data));
        yield put(WidgetActions.setId(response.data[ 0 ].id));
        yield put(WidgetActions.setCurrentWeather(response.data[ 0 ]));
        yield delay(1000);
        yield put(WidgetActions.setLoaderOff());
    } catch (error) {
        console.error(error);
    }
}

const { getCards } = WidgetActions;

export function* getCardsWatcher() {
    yield takeLatest(getCards.type, getCardsWorker);
}
