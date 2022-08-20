import { createSlice } from '@reduxjs/toolkit';

export const initialCourseState = {
  value: 42,
};

const courseSlice = createSlice({
  name: 'course',
  initialState: initialCourseState,
  reducers: {},
});

export const {} = courseSlice.actions;

export const selectCourse = state => state.course.value;

export default courseSlice.reducer;
