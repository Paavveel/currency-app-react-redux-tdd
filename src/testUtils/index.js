import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import courseReducer, {
  initialCourseState,
} from '../features/Course/courseSlice';

const originalState = {
  course: initialCourseState,
};

export const renderWithStore = (
  ui,
  { state = originalState, dispatch = null } = {}
) => {
  const storeMock = configureStore({
    reducer: {
      course: courseReducer,
    },
    preloadedState: state,
  });
  return render(<Provider store={storeMock}>{ui}</Provider>);
};
