export const fetchTodayCoursePending = (state, action) => {
  return {
    ...state,
    status: 'loading',
    error: null,
  };
};
