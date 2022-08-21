import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCourse } from './courseAPI';

export const initialCourseState = {
  value: 42,
  status: 'idle',
  error: null,
};

export const fetchTodayCourse = createAsyncThunk(
  'course/fetchCourse',
  async () => {
    const response = await fetchCourse();
    return response.Valute.USD.value;
  }
);

const courseSlice = createSlice({
  name: 'course',
  initialState: initialCourseState,
  reducers: {},
  extraReducers: {
    [fetchTodayCourse.pending]: (state, action) => state,
    [fetchTodayCourse.fulfilled]: (state, action) => state,
    [fetchTodayCourse.rejected]: (state, action) => state,
  },
});

export const {} = courseSlice.actions;

export const selectCourse = state => state.course.value;

export default courseSlice.reducer;
