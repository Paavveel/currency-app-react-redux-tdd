export const fetchTodayCourseRejected = (state, action) => {
  return {
    ...state,
    status: 'idle',
    error: action.payload,
  };
};
