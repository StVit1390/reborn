// Core
import { configureStore } from '@reduxjs/toolkit';

// MarkerGen reducers
import toggles from '../../bus/client/toggles';

// Reducers
import widget from '../../bus/widget/slice';
// import createSagaMiddleware from '@redux-saga/core';
import { middleware, sagaMiddleware } from './middleware';
import { rootSaga } from './rootSaga';
// Middleware

// MarkerGen import rootSaga

// const middleWare = createSagaMiddleware();
// const customMiddleware = [ middleWare ];

export const store = configureStore({
    reducer: {
        // MarkerGen add reducer
        toggles,
        widget,
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>

// MarkerGen run rootSaga
