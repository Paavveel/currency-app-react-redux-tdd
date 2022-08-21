import { initialCourseState } from '../features/Course/courseSlice';

export const loadingCourseState = {
  ...initialCourseState,
  status: 'loading',
};
