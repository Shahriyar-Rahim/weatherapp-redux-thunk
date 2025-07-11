import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from '../redux/features/weather/weatherSlice.js'
import { thunk } from 'redux-thunk';
import { createLogger } from 'redux-logger';

const logger = createLogger()

const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
   myMiddleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(thunk, logger),
})

export default store;