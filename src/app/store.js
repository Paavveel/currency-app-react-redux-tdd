import { configureStore } from '@reduxjs/toolkit';
import courseReducer from '../features/Course/courseSlice';

export const store = configureStore({
  reducer: {
    course: courseReducer,
  },
});
