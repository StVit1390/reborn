// ESlint
/* eslint-disable array-bracket-newline */

// Middlewares
import createSagaMiddleware from '@redux-saga/core';
import { Middleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { rootSaga } from './rootSaga';

// MarkerGen import Saga or Thunk

const isDev = process.env.NODE_ENV === 'development';

// MarkerGen sagaMiddleware
export const sagaMiddleware = createSagaMiddleware();


const middleware: Middleware[] = [
    // MarkerGen use middleware Saga or Thunk
    sagaMiddleware,
];

isDev && middleware.push(
    createLogger({
        duration:  true,
        collapsed: true,
        colors:    {
            title:     () => '#139BFE',
            prevState: () => '#1C5FAF',
            action:    () => '#149945',
            nextState: () => '#A47104',
            error:     () => '#ff0005',
        },
    }),
);
export {
    middleware,
    // MarkerGen export sagaMiddleware
};
