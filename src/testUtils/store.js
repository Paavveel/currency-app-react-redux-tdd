import { initialCourseState } from '../features/Course/courseSlice';

export const loadingCourseState = {
  ...initialCourseState,
  status: 'loading',
};
export const errorCourseState = {
  ...initialCourseState,
  error: 'Server Error!',
};
