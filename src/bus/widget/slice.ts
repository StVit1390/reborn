// Core
import { createSlice } from '@reduxjs/toolkit';

// Reducers
import * as reducers from './reducers';

// Types
import * as types from './types';

const initialState: types.WidgetState = {
    loading:        false,
    cards:          null,
    currentId:      null,
    currentWeather: null,
};

export const WidgetSlice = createSlice<types.WidgetState, typeof reducers>({
    name: 'widget',
    initialState,
    reducers,
});

export const sliceName = WidgetSlice.name;
export const WidgetActions = WidgetSlice.actions;
export default WidgetSlice.reducer;
