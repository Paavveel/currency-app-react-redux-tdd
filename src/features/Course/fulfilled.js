export const fetchTodayCourseFulfilled = (state, action) => {
  return {
    ...state,
    value: action.payload,
    status: 'idle',
  };
};
