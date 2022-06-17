import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import startReducer from '../features/startSlice';
import endReducer from '../features/endSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    start: startReducer,
    end: endReducer,
  },
});
