// Core
import { all } from 'redux-saga/effects';

//Sagas
import { getCardsWatcher } from '../../bus/widget/saga';

// MarkerGen tools imports

export function* rootSaga() {
    yield all([ getCardsWatcher() ]);
}
