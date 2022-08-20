import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
import courseReducer, {
  initialCourseState,
} from '../features/Course/courseSlice';

// const reducer = combineReducers({
//   course: courseReducer,
// });

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
    // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
  });
  return render(<Provider store={storeMock}>{ui}</Provider>);
};
